import React, { useState } from 'react';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const login = (e) => {
      e.preventDefault();
    
      fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then(response => {
          let erreur;
    
          if ((email.value && password.value) && !response.ok) {
            erreur = 'Adresse email ou mot de passe incorrect';
          }
          if ((!email.value || !password.value) && !response.ok) {
            erreur = 'Veuillez saisir tous les champs';
          }
    
          if (erreur) {
            setErrorMessage(erreur);
          } else {
            setErrorMessage('');
            console.log(response);
          }
    
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Réponse non valide');
          }
        })
        .then(data => {
          console.table(data);
          sessionStorage.setItem('user', JSON.stringify(data));
          let user = JSON.parse(sessionStorage.getItem('user'));
          if (user) {
            // Effectuez ici les actions souhaitées après la connexion réussie
            console.log('Connexion réussie');
            window.location.href = '../';
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  
    return (
        <div className='logIn'>
            <h4>Me connecter</h4>
            <form className='formLogIn' onSubmit={login}>
            <label htmlFor="email" name="email">E-mail :</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse email" />
            <label htmlFor="password" name="password">Mot de passe :</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
            <button type="submit" className='buttonSubmit'>Se connecter</button>
          </form>
          <div id="erreur">{errorMessage}</div>
        </div>
    );
};

export default LogIn;