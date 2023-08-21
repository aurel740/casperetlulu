import React from 'react';
import "../styles/Home.css";
import BannerHome from '../components/BannerHome';
import MainHomeContent from '../components/MainHomeContent';
import chaton from "../assets/pictures/chaton.png";
import chat from "../assets/pictures/chat.png";
import Infos from '../containers/Infos';

function Home() {
  const text1 = "Le bien-être de nos amis à quatre pattes est une priorité tant pour nous que pour nos adhérents. C'est avec grand plaisir que nous vous accueillons à Janville-en-Beauce, dans l'espoir que vous puissiez potentiellement devenir la famille adoptive pour nos chats et chatons, offrant ainsi un foyer aimant pour le reste de leur vie. L'adoption des chatons, qu'ils soient avec ou sans leur mère, est une possibilité que nous proposons.";
  const text2 = "Notre engagement premier est de fournir un refuge sécurisé pour les chats errants et/ou abandonnés. Si besoin, nous procédons à la capture de ces félins. Ensuite, notre mission consiste à les familiariser avec les humains et les chiens, dans le but de leur offrir une nouvelle opportunité de vie. Avant toute adoption, nous nous assurons de leur apporter les soins essentiels, de les identifier de manière appropriée, et enfin, de les stériliser.";
  const title1 = "Bienvenu à l’association Casperetlulu !";
  const title2 = "Notre objectif";

  return (
    <div className='home-content'>
      <BannerHome />
      <main className='mainHome'>
        <MainHomeContent title={title1} text={text1} picture={chaton} word="chatons" />
        <MainHomeContent title={title2} text={text2} picture={chat} word="chats" styleFlex={{ flexDirection: "row-reverse" }} />
        <Infos />
      </main>
    </div>
  )
}

export default Home
