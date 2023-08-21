import React from 'react'
import DocButtonsHome from '../components/DocButtonsHome';
import "../styles/Infos.css";
import GreyCat from "../assets/pictures/greyCat.png";


function Infos() {
  return (
    <div className='infosContent'>
        <div className='infoText'>
            <h2 className='infoTitle'>Les informations sur l’association</h2>
            <p className='paragraph infoParagraph1'>L’association posséde le certificat “Journal Officiel de la république française” pour les associations et fondations d’entreprise (document n°1). Il permet la création de l’association Casperetlulu avec le service de sauvetage et stérilisation des chats errants, nourrisage, socialisation et adoption des chatons avec ou sans maman chat -stérilisation et assai de socialisation de la maman, et garde de chats domestiques.</p>
            </div>
            <div className='infosRight'>
            <div className='infosRight2'>
           <p className='paragraph infoParagraph2'>Le statut est à jour et justifié par le document “Association déclarée sous le régime de la loi du 1er juillet 1901”. Le document est disponible en “document n°2”.<br/><br/> L’attestation individuelle de fin de formation est aussi disponible, il justifie des compétences sur la connaissances des animaux de compagnie d’espèces domestiques (ACADED) catégorie “chat”. Le document est communiquer en n°3.</p>
            
            <div className='buttonsComponents'>
            <DocButtonsHome/>
            <DocButtonsHome/>
            <DocButtonsHome/>
<div className='greyCatDiv'><img className='greyCatImg' src={GreyCat} alt="photo d'un chat gris foncé aux petites oreilles" /></div>
        </div>

           
           
        </div>
            </div>
           

       
      
    </div>
  )
}

export default Infos
