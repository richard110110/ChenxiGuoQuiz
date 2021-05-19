import React from 'react';
import fire from './config/fire';

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        alert("welcome: " + email);
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
        alert('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        alert('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center', color: 'black'}}>
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="text"/>
        </div>
        <button style={{margin: '10px', border: '2px solid #4CAF50'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px', border: '2px solid #4CAF50'}} onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default Login;