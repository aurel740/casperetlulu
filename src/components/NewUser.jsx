import React, { useState } from 'react';

const NewUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pseudo,setPseudo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
  const signUp = () => {
    if(confirmPassword === password) {
         // Effectuez ici les actions pour la création d'un nouveau compte utilisateur
    fetch('http://localhost:4000/api/auth/signup', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        pseudo: pseudo
      })
    })
      .then(response => {
        if (response.ok) {
          console.log('Compte utilisateur créé avec succès');
          // Effectuez ici les actions souhaitées après la création du compte
        } else {
          setErrorMessage('Erreur lors de la création du compte utilisateur');
          throw new Error('Erreur lors de la création du compte utilisateur');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Une erreur est survenue lors de la création du compte utilisateur. Veuillez réessayer plus tard.');
      });
    }
    if(confirmPassword ===! password){
        setErrorMessage('Mot de passe différent');
    }
   
  };
  
    return (
        <div className='NewUser'>
            <h4>Nouveau chez nous ?</h4>
            <form className='formLogIn' onSubmit={signUp}>
            <label htmlFor="email" name="email">E-mail :</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre adresse email" />
            <label htmlFor="pseudo" name="pseudo">Pseudo :</label>
            <input type="text" id="pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} placeholder="Votre pseudo" />
            <label htmlFor="password" name="password">Mot de passe :</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Votre mot de passe" />
            <label htmlFor="confirmPassword" name="confirmPassword">Confirmez votre mot de passe :</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmez mot de passe" />
            <button type="submit" className='buttonSubmit'>Envoyez</button>
          </form>
          <div id="erreur">{errorMessage}</div>
        </div>
    );
};

export default NewUser;