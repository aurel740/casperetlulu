import React from 'react'
import Cards from '../components/Cards'

function Cats() {
  return (
<section>
  <p className='description'>L'adoption responsable est d'une importance capitale ! Gardez à l'esprit que votre nouvel ami aura besoin de soins et d'une alimentation adaptée à chaque étape de sa vie. Vous vous engagez pour plusieurs années de câlins et de joyeuses espiègleries :) Avant d'adopter, il est primordial de se poser les bonnes questions (le budget pour son bien-être, s'assurer que toute la famille du même foyer partage ce choix, etc.). Une adoption réfléchie est synonyme d'une adoption réussie ! Pour rappel, chaque chat sera stériliser et identifier avant l’adoption.</p>
  <Cards animal="cats"/>
</section>
  )
}

export default Cats
