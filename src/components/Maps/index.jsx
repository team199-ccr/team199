import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'
// import { Container } from './styles';
const Maps = (props) => {
  console.log('KEY ID: ',process.env.REACT_APP_GOOGLE_API_KEY)
  return (
    <Map 
      google={props.google}
      zoom={15}
      initialCenter={{
        lat: -22.8749664,
        lng: -43.242477
      }}
    />
    )
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(Maps);
// export default Maps;
