import './App.css';
import React, { useEffect } from "react";
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route,Redirect }
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Kt6EZSDAMwxqlw4upmYvDymfIopHw3bYzt1fabWnzlq5rWY2O21jOOnn8YOnpFrkEknzN50CabsT8bG57EkZ8yv00eiKzRPCe"
);


function App() {
  // const isAuthenticated = getToken();
  const [{user},dispatch]=useStateValue();

  function PrivateRoute ({children,...rest}){
    return(
      console.log("HIIIIIIIIIIII",user),
      <Route{...rest} render={()=>{
        return user==null?<Redirect to='/login' />:children
      }} />
    )
  }
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>',authUser);

      if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser
          })

      } else{
        
        dispatch({
          type:'SET_USER',
          user:null
          
        })

      }
    })

  },[])
  return (
    // BEM 
    <Router>
      <div className="app">
      <Switch>

      <Route path="/login">
          <Login />        
      </Route>

      <PrivateRoute path="/orders">
          <Header /> 
          <Orders />        
      </PrivateRoute>

      <PrivateRoute path='/payment'>
        
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>

      </PrivateRoute>

      <PrivateRoute path="/checkout">
        <Header />
        <Checkout />        
      </PrivateRoute>
        
      

        <PrivateRoute path="/" >
           <Header />
           <Home />
        </PrivateRoute>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
