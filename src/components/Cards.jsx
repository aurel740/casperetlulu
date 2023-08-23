// import React, { useState, useEffect } from 'react';
import dataKittens from '../data-provisoire/chaton.json';
import "../styles/Adoption.css"
import femelle from '../assets/pictures/femelle.png';
import male from '../assets/pictures/male.png';
import inconnu from '../assets/pictures/inconnu.png';
import imgtest from '../data-provisoire/img/chaton-a-adopter-15.webp'
const Cards = ({ animal }) => {
    // const [dataAnimals, setDataAnimals] = useState([]);

    // useEffect(() => {
    //     let fetchData = () => {
    //         let url;

    //         if (animal === "kittens") {
    //             url = "../data-provisoire/chaton.json";
    //         } else if (animal === "cats") {
    //             url = "../data-provisoire/chat.json";
    //         }

    //         fetch(url) 
    //         .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error("Network response was not ok");
    //                 }
    //                 return response.json();
    //             })
    //             .then(data => {
    //                 setDataAnimals(data);
    //                 console.log(dataAnimals);
    //             })
    //             .catch(error => {
    //                 console.error("Fetch error:", error);
    //             });
    //     };

    //     fetchData();
    // }, [animal]);

    return (
        <div className='cards'>
            {dataKittens.map((objet) => {
                let genreImage;

                if (objet.gender === "F") {
                    genreImage = femelle;
                } else if (objet.gender === "M") {
                    genreImage = male;
                } else if (objet.gender === "I") {
                    genreImage = inconnu;
                }

                return (
                    <div className='cardsFlex' key={objet.id} alt={`description de ${objet.name}`}>
                        <img className='mainPicture' src={imgtest} alt={objet.name} />
                        <div>
                            <span className='name'>{objet.name}</span>
                            <div className='infoKittens'>
                                <img className='genre' src={genreImage} alt="genre du chaton"/>
                                <p>Age :<br/> {objet.age} mois</p>
                                <p>Disponible le : <br/> {objet.adoption}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;

