import React from 'react';
import "../styles/Infos.css"

// Composant pour la bordure top "effet rayures" de la section "Les informations sur l'association"

function BorderElement({style={}}) {
  return (
    <div className='borderElement' style={{...style} }></div>
  )
}

export default BorderElement
