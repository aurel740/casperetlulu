import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
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
