import React from 'react';
import "../styles/Contact.css";
import chatMignon from "../assets/pictures/chatmignon_1.png"


function Contact() {
  return (
    <div className='contactContainer'>
      <div className='catContactDiv'><img className='catContactImg' src={chatMignon} /></div>
      <p className='contactText email'>E-mail:<br/>mf.rabin@sfr.fr</p>
      <p className='contactText tel'>Télèphone:<br/>06.81.96.05.98</p>
      <p className='contactText adress'>Adresse:<br/>14 rue de la forge 28310 janville-en-beauce</p>
      <form className='contactText contactForm'>
        <h2 className='contactText formTitle'>Formulaire du site</h2>
        <button type='submit'>cliquez ici</button>
      </form>
      <p className='contactText contactUsText'>Des questions ?<br/>N’hésitez pas à nous contacter !</p>

    </div>
  )
}

export default Contact
