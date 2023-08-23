import React from 'react'
import Cards from '../components/Cards'

function Kittens() {
  return (
<section>
  <p className='description'>L'adoption responsable est d'une importance capitale ! Gardez à l'esprit que votre nouvel ami va grandir et aura besoin de soins et d'une alimentation adaptée à chaque étape de sa vie. Vous vous engagez pour plusieurs années de câlins et de joyeuses espiègleries :) Avant d'adopter, il est primordial de se poser les bonnes questions (prévoir un budget pour son bien-être, s'assurer que toute la famille du même foyer partage ce choix, etc.). Une adoption réfléchie est synonyme d'une adoption réussie ! Pour rappel, chaque chaton sera identifier et sera ou devra être stériliser.</p>
  <Cards animal="kittens"/>
</section>
  )
}

export default Kittens
