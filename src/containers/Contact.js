import React from 'react';
import "../styles/Contact.css";
import phone from "../assets/pictures/telephone_1.png";
import email from "../assets/pictures/email_1.png";
import adress from "../assets/pictures/adresse_1.png";
import contactBulle from "../assets/pictures/bulle_contact.png";

// Section des coordonnées dans la patte géante

function Contact() {
  return (
    <div className='contactContainer'>
        <img className="contactBulle" src={contactBulle} alt="dessin d'une emprunte de chat géante avec un chat tigré de profil" />
      {/* <div className='catContactDiv'><img className='catContactImg' src={chatMignon} /></div>
      <p className='contactText email'>E-mail:<br/>mf.rabin@sfr.fr</p>
      <p className='contactText tel'>Télèphone:<br/>06.81.96.05.98</p>
      <p className='contactText adress'>Adresse:<br/>14 rue de la forge 28310 janville-en-beauce</p>
      <div className='contactText contactForm'>
        <h2 className='contactText formTitle'>Formulaire du site</h2>
        <button>cliquez ici</button>
      </div>
      <p className='contactText contactUsText'>Des questions ?<br/>N’hésitez pas à nous contacter !</p> */}
      <div className='contactContent'>
        <p className='contactText'>Des questions ?  Voici les différents points de contact !</p>
        <div className='contactText2 coordonnees'>
          <div className='contactText2 coordonnee tel'><i class="fa-solid fa-phone-volume"></i>Téléphone: 06.81.96.05.98</div>
          <div className='contactText2 coordonnee email'><i class="fa-regular fa-envelope"></i>E-mail: mf.rabin@sfr.fr</div>
        </div>
<div className='contactText2 adress'><div className='houseDiv'><img className='houseImg' src={adress} /></div><p className='adressText'>Adresse: 14 rue de la forge<br/> 28310 Janville-en-beauce<br/> (lieu dit Outrouville)</p></div>

      </div>

    </div>
  )
}

export default Contact
