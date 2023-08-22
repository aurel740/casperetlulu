import React from 'react';
import "../styles/BannerHome.css";
import bannerCats from "../assets/pictures/banner_cats.png";

// Bannière de la page d'accueil

function BannerHome() {
  return (
    <div className='bannerHome'>
      <img className="bannerHomePicture" src={bannerCats} alt='Photo de deux chats noir et roux sur un canapé'/>
    </div>
  )
}

export default BannerHome
