import React from 'react';
import "../styles/Infos.css"

function BorderElement({style={}}) {
  return (
    <div className='borderElement' style={{...style} }></div>
  )
}

export default BorderElement
