import React from 'react';
import "../styles/BannerHome.css";
import bannerCats from "../assets/pictures/banner_cats2.jpg";

// Bannière de la page d'accueil

function BannerHome() {
  return (
    <div className='bannerHome'>
      <img className="bannerHomePicture" src={bannerCats} alt='Deux chats noir et roux sur un canapé'/>
    </div>
  )
}

export default BannerHome
