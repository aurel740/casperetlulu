import React from 'react';
import BannerHome from '../components/BannerHome';
import MainHomeContent from '../components/MainHomeContent';
import chaton from "../assets/pictures/chaton.png";
import chat from "../assets/pictures/chat.png";

function Home() {
  return (
    <div className='home-content'>
      <BannerHome />
      <main className='mainHome'>
        <MainHomeContent/>
        <div className='kittensContent'>

          <div className='text'></div>
          <div className='picture'>
          {/* <img src={chaton} alt="photo d'un chaton roux"/> */}
            <div className='button seeKittens'></div>
          </div>

        </div>
        <div className='CatsContent'>

          <div className='text'></div>
          <div className='picture'>
          <img/>
            <div className='button seeCats'></div>
          </div>

        </div>

      </main>
    </div>
  )
}

export default Home
