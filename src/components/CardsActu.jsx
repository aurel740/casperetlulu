import React, { useState, useEffect } from 'react';
import actuAsso from "../data-provisoire/actuAsso.json";
import evenement from "../data-provisoire/evenement.json";
import facebook from "../assets/pictures/facebook.png";
import imageTest from '../assets/pictures/t-shirt-asso.jpg';


const CardsActu = ({ event }) => {
    const [dataEvent, setDataEvent] = useState([]);
    const [dataProvisoire, setDataProvisoire] = useState([]);
    const [statutEvent,setStatutEvent] = useState(true);

    useEffect(() => {
        let url;

        if (event === "evenement") {
            url = "../data-provisoire/evenement.json";
            setDataProvisoire(evenement);
            setStatutEvent(true);
        } else if (event === "actu") {
            url = "../data-provisoire/actuAsso.json";
            setDataProvisoire(actuAsso);
            setStatutEvent(false);
        }

        fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            setDataEvent(data); // Assurez-vous que data est un tableau
            console.log(dataEvent);
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
    }, [event]);

    return (
        <div className='cardsEvent'>
            {dataProvisoire.map((objet, index) => (
                <div className='cardsEventFlex' key={objet.id} style={{ flexDirection: window.innerWidth >= 1029 && index % 2 === 0 ? 'row-reverse' : 'row'}} alt={`description de l'article ${objet.title}`}>
                    <img className='mainPictureActu' src={imageTest} alt="Visuel de l'évènement" />
                    <div className='infoEvent'>
                        {statutEvent && 
                        <div className='date'>
                            <span></span>
                            <span>Mise à jour le :<br/> {objet.dateUpgrade} </span>
                        </div>}
                        {!statutEvent && 
                        <div className='date'>
                            <span>Lieu de l'actualité :<br/> {objet.place}</span>
                            <span>Mise à jour le :<br/> {objet.dateUpgrade} </span>
                        </div>}
                        <h4>{objet.title}</h4>
                        <p className='descriptionEvent'>{objet.description}</p>
                        {statutEvent && 
                        <div className='infoUseful'>
                            <div className='infoPlace'>                            
                                <p className='separation'>Date de l'évènement : <br/> Du {objet.date1} au {objet.date2}</p>
                                <p>Lieu de l'évènement : <br/> {objet.place}</p>
                            </div>
                            <div className='lien'>
                                <div>
                                <p>Lien de l'évènement :</p>
                                <a href={objet.link} className='linkEvent'>Cliquez-ici</a>
                                </div>
                                <div>
                                    <p className='textEvent'>Partager:</p>
                                    <a href="test"><img src={facebook} alt="Logo facebook" className='logoFacebook'/></a>
                                </div>
                            </div>

                        </div>
                        }
                    {!statutEvent && 
                        <div className='infoUsefulActu'>
                            <div className='infoPlaceActu'>                            
                                <p>Date de l'actualité : <br/><br/> Le {objet.date}</p>
                            </div>
                            <div className='lienActu'>
                                <p>Lien de l'actualité:</p>
                                <a href={objet.link} className='linkEvent linkActu'>Cliquez-ici</a>
                            </div>
                            <div>
                                <p>Partager:</p>
                                <a  href="test"><img className="logoFacebook" src={facebook} alt="Logo facebook" /></a>
                            </div>
                        </div>
                        }

                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardsActu;
