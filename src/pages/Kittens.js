import React from 'react'
import Cards from '../components/Cards'
import kittens from '../data-provisoire/chaton.json';

function Kittens() {
  return (
    <section className='adoption'>
      <Cards animal={kittens}/>
    </section>
  )
}

export default Kittens
