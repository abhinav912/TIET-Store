import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import userEvent from '@testing-library/user-event';

var logosrc="https://lmtsm.thapar.edu/assets/front/img/web-logo-01.png";

function Login() {
  const history = useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const signIn = e =>{
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .then(auth =>{
        history.push('/')
      })
      .catch(error =>(error.message))
  }
  
  const register = e =>{
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) =>{
        console.log(auth); 
        if (auth){
          history.push('/');
        } 
      })
      .catch(error => alert(error.message))

    }
  
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src={logosrc} />
        </Link>

        <div className='login__container'>

            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password'vlaue={password} onChange={e=>setPassword(e.target.value)} /> 

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>
                    By signing-in you agree to the TIET's Conditions of Use & Ethics. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create TIET account</button>
        </div>
    </div>
  )
}

export default Login