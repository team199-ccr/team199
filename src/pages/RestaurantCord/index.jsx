import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Maps } from './../../components';

const RestaurantCord =(props) =>{
  const [coordinates,setCoordinates] = useState({lat:undefined,lng:undefined,accuracy:undefined});
  const [havePermision,setPermision] = useState(false);
  const [haveGeolocation,setGeolocation] = useState(false);
  const [savingCoordLocation,setSavingCoordLocation] = useState(false);
  const [savingCoordSuccess,setSavingCoordSuccess] = useState(false);

  useEffect (()=>{
    console.log('props',)
  },[])
  useEffect (()=>{
    
    if('geolocation' in navigator){
      setGeolocation(true)
    }
  }, [], )

  useEffect(()=>{
    const saveLocation = (position) =>{
      console.log('position',position);
      const {coords:{latitude:lat,longitude:lng,accuracy}} = position;
      setPermision('accepted')
      setCoordinates({lat,lng,accuracy})
      // localStorage.setItem('setCoords',JSON.stringify({lat,lng}))
    }
    const errorOnSaveLocation = (error) =>{
        if(error.code === error.PERMISSION_DENIED )
          setPermision('denied')
        else
          setPermision(false)
    }
    navigator.geolocation.getCurrentPosition(saveLocation,errorOnSaveLocation);
  },[haveGeolocation])
  
  const saveCoords = async ()=>{
    const id = window.location.href.split('/').splice(-1,1)[0]
    setSavingCoordLocation(true)
    try{
      console.log(`http://rango-api.edilsonjunior.site/merchant/${id}`)
      const {lat:latitude,lng:longitude} = coordinates
      await axios.put(`http://rango-api.edilsonjunior.site/merchant/${id}`,{latitude,longitude})
      setSavingCoordSuccess(true)
    }catch(e){
      console.log('error',e.response)
      alert('Ocorreu algum erro na execução')
    }
  }
  return (
  <div id="restaurantCord">

    {savingCoordLocation &&
    ((savingCoordSuccess && 
    <div className="block-everything">
      <p className="title">Está salvo!</p>
      <p className="sub-title">Pode voltar pro chat :D</p>
    </div>) ||
    <div className="block-everything">
      <p className="title">Carregando, aguarde!</p>
    </div>)}

    {haveGeolocation && (
    (havePermision === false && (
      <div className="permission-message">
        <p className="title">NÃO TEMOS PERMISSÃO</p>
        <p className="message">Nos dê permissão para acessar a sua localização</p>
      </div>))||
    (havePermision === 'denied' && (
      <div className="permission-message">
        <p className="title">BLOQUEOU A PERMISSÃO</p>
      </div>))||
    (havePermision === 'accepted' && 
      <div id="restaurant-confirm-map">
        <button id="confirmButton" className="button-primary" onClick={saveCoords}>
          Confirmar Local de estabelecimento
        </button>
        <Maps
        zoom={coordinates.lat !== undefined? 16:4}
        lat={coordinates.lat}
        lng={coordinates.lng}
        accuracy={coordinates.accuracy}
        marker={{lat:coordinates.lat,lng:coordinates.lng}}
        />
    </div>
    ))
    }
    
  </div>
  )
}

export default RestaurantCord;