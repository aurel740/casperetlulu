import React, { useState } from 'react';
import "../styles/Activities.css";
import iconeButtonCatBlackEvenement from "../assets/pictures/buttonCatBlack.png";
import iconeButtonCatBlackActu from "../assets/pictures/buttonCatBlackActu.png";
import iconeButtonCatColorEvenement from "../assets/pictures/buttonCatColor.png";
import iconeButtonCatColorActu from "../assets/pictures/buttonCatColorActu.png";
import CardsActu from '../components/CardsActu';

function Acivities() {
  const [statutEvent, setStatutEvent] = useState("evenement");
  const [evenementButtonSrc, setEvenementButtonSrc] = useState(iconeButtonCatColorEvenement);
  const [actuButtonSrc, setActuButtonSrc] = useState(iconeButtonCatBlackActu);

  const handleEvenementButtonClick = () => {
    setStatutEvent("evenement");
    setEvenementButtonSrc(iconeButtonCatColorEvenement);
    setActuButtonSrc(iconeButtonCatBlackActu);
  };

  const handleActuButtonClick = () => {
    setStatutEvent("actu");
    setEvenementButtonSrc(iconeButtonCatBlackEvenement);
    setActuButtonSrc(iconeButtonCatColorActu);
  };

  return (
    <section className='activities'>
      <div className='catButton'>
        <button className='catButtonEvenement' onClick={handleEvenementButtonClick}>
          <img src={evenementButtonSrc} alt="icone chat coucher" />
        </button>
        <button className='catButtonActu' onClick={handleActuButtonClick}>
          <img src={actuButtonSrc} alt="icone chat coucher"/>
        </button>
      </div>
      <CardsActu event={statutEvent} />
    </section>
  );
}

export default Acivities;
