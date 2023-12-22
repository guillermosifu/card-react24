import React from 'react';
import Foto from './assets/Imagen1.png'
const Card = () => {
  return (
    <header className="header">
      <figure className="header__professional-image-container">
        <img
       
          src={Foto}
          alt="Foto de Guille"
          className="header__professional-image"
        />
       
      </figure>
    </header>
  );
};

export default Card;