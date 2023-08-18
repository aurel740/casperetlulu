import React from 'react';
import "../styles/MainHomeContent.css";
import chaton from "../assets/pictures/chaton.png";
import chat from "../assets/pictures/chat.png";

function MainHomeContent() {
  return (
    <div className='mainHomeContent'>

    <div className='textMain'>
        <h2 className='homeTitle1'>Bienvenu à l’association Casperetlulu !</h2>
        <p className='homeText1'>
        Le bien-être de nos amis à quatre pattes est une priorité tant pour nous que pour nos adhérents. C'est avec grand plaisir que nous vous accueillons à Janville-en-Beauce, dans l'espoir que vous puissiez potentiellement devenir la famille adoptive pour nos chats et chatons, offrant ainsi un foyer aimant pour le reste de leur vie. L'adoption des chatons, qu'ils soient avec ou sans leur mère, est une possibilité que nous proposons.
        </p>
    </div>
    <div className='pictureContent'>
        <div className='pictureDiv'><img className="picture" src={chaton} alt="photo d'un chaton roux"/></div>
      <button className='catsButtons seeKittens'>Voir les chatons</button>
    </div>

  </div>
  )
}

export default MainHomeContent
