import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from './pages/Home';
import Admin from "./pages/Admin";
import User from "./pages/User";
import Connexion from "./pages/Connexion";
import Activities from "./pages/Acivities";
import Kittens from "./pages/Kittens";
import Cats from "./pages/Cats";
import "./styles/Header.css";
// import elipse1 from "./assets/pictures/Ellipse1.png";
// import photo_presidente from "./assets/pictures/photo.png";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        {/* <div className='elipsesContainer'>
  <img  className='elipses elipse1' src={elipse1} alt='cercle à fond bleu foncé'/>
  <img className='elipses photo_presidente' src={photo_presidente} alt="Portrait dessin de la présidente de l'association"/>
</div> */}

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/connexion' element={<Connexion/>} />
          <Route path='/activities' element={<Activities/>} />
          <Route path='/kittens' element={<Kittens/>} />
          <Route path='/cats' element={<Cats/>} />

        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
