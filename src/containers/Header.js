import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Header.css";
import patte from "../assets/pictures/patte_chat.png";
import elipse1 from "../assets/pictures/Ellipse1.png";
import photo_presidente from "../assets/pictures/photo.png";

function Header() {
  return (
    <header className="header" >
      <div className='text'>
        <p className='textHeader'>Association Casperetlulu</p>
        <nav className="navHeader">
          <ul className="listHeader">
            <li className="puceLink"><Link className="Link" to="/"><img src={patte} alt='empreinte de chat' />Accueil</Link></li>

            <li className="puceLink"><Link className="Link" to="/cats">Chats</Link></li>
            <li className="puceLink"><Link className="Link" to="/kittens">Chatons</Link></li>
            <li className="puceLink"><Link className="Link" to="/activities">Activité</Link></li>
            <li className="puceLink"><Link className="Link" to="/connexion">Connection</Link></li>

          </ul>
        </nav>
      </div>

      <div className='rectangle1'>
        <div className='rectanle2'>
        </div>
      </div>
      <div className='elipsesContainer'>
  <img  className='elipses elipse1' src={elipse1} alt='cercle à fond bleu foncé'/>
  <img className='elipses photo_presidente' src={photo_presidente} alt="Portrait dessin de la présidente de l'association"/>
</div>
    </header>
  )
}

export default Header
