import React from 'react';

// import whiteLogo from 'images/white-logo.png'
 
const HomePage = () => {
  return (
    <div id="homepage" style={{backgroundColor:'var(--secondary-color)'}}>
      <div className="container">

        <div className="logo">
          <img src='/images/white-logo.png' alt="rango logo"/>
        </div>
 
        <p className="welcome-message">Seja bem-vindo</p>

        <div className="login">

          <input inputmode="numeric" placeholder="Insira seu número"/>
          <button>
            Enviar o código
          </button>

          <div className="new-account">
            <p>Não é cadastrado?</p>
            <a href="#">Criar conta.</a>
          </div>
        </div>



      </div>
    </div>
  )
  
}

export default HomePage;