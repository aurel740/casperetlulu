import React from 'react'
import LogIn from '../components/LogIn'
import NewUser from '../components/NewUser'
import "../styles/Connexion.css"

function Connexion() {
  return (
    <div className='connexion'>
      <h3>Connexion</h3>
      <div className='formStyle'> 
      <NewUser/>  
      <LogIn/>
      </div>

    </div>
  )
}

export default Connexion
