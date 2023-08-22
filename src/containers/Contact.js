import React from 'react';
import "../styles/Contact.css";
import chatMignon from "../assets/pictures/chatmignon_1.png";
import patteGeante from "../assets/pictures/patte_info_compl.png";

// Section des coordonnées dans la patte géante

function Contact() {
  return (
    <div className='contactContainer'>
        <img className="patteGeante" src={patteGeante} alt="dessin d'une emprunte de chat géante avec un chat tigré de profil" />
        <button className='contactButton'>cliquez ici</button>
      {/* <div className='catContactDiv'><img className='catContactImg' src={chatMignon} /></div>
      <p className='contactText email'>E-mail:<br/>mf.rabin@sfr.fr</p>
      <p className='contactText tel'>Télèphone:<br/>06.81.96.05.98</p>
      <p className='contactText adress'>Adresse:<br/>14 rue de la forge 28310 janville-en-beauce</p>
      <div className='contactText contactForm'>
        <h2 className='contactText formTitle'>Formulaire du site</h2>
        <button>cliquez ici</button>
      </div>
      <p className='contactText contactUsText'>Des questions ?<br/>N’hésitez pas à nous contacter !</p> */}

    </div>
  )
}

export default Contact
