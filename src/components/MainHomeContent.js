import React from 'react';
import "../styles/MainHomeContent.css";
// import chaton from "../assets/pictures/chaton.png";
// import chat from "../assets/pictures/chat.png";

// Section contenant la présentation

function MainHomeContent({picture, text, title, word, styleFlex={}}) {


  return (
    <div className='mainHomeContent' style={{...styleFlex}} >

    <div className='textMain'>
        <h2 className='homeTitle1'>{title}</h2>
        <p className='homeText1'>{text}</p>
    </div>
    <div className='pictureContent'>
        <div className='pictureDiv'><img className="picture" src={picture} alt="chaton roux"/></div>
      <button className='catsButtons seeKittens'>Voir les {word}</button>
    </div>

  </div>
  )
}

export default MainHomeContent
