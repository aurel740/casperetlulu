import React from 'react';
import "../styles/Infos.css";

function DocButtonsHome({number}) {
  return (
    <div className='docButtonsHome'>
        <button className='docButtonHome'>Voir le document n°{number}</button>
      
    </div>
  )
}

export default DocButtonsHome
