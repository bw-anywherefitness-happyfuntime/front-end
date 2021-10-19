import React, { useState, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import loginSchema from './components/validation/loginSchema';
import { axiosWithAuth } from './helpers/axiosWithAuth';
import signupSchema from './components/validation/signupSchema';
import './App.css'
import PrivateRouteClient from './components/PrivateRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import Classes from './components/Classes'
import Bookings from './components/Bookings'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import axios from 'axios'

//INITIAL FORM STATES
const AUTH_KEY = "makemesuperman";

const initialLoginValues = {
  username: "",
  password: "",
}
const initialLoginErrors = {
  username: "",
  password: "",
}
const initialSignup = {
  username: "",
  password: "",
  secret: "",
  role: "client", //'instructor' or 'client'
}
const initialSignupErrors = {
  username: "",
  password: "",
  secret: "",
  role: "",
}
const initialLoginDisabled = true;
const initSignupRoleDisabled = true;
const initSignupSubmitDisabled = true;
const initialSignupCallErrors = '';

function App() {

  //LOGIN FORM STATE
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
  const [loginDisabled, setLoginDisabled] = useState(initialLoginDisabled);
  const [loginCallErrors, setLoginCallErrors]= useState('');
  const [signupValues, setSignupValues] = useState(initialSignup)
  const [signupErrors, setSignupErrors] = useState(initialSignupErrors)
  const [signupRoleDisabled, setSignupRoleDisabled] = useState(initSignupRoleDisabled);
  const [signupSubmitDisabled, setSignupSubmitDisabled] = useState(initSignupSubmitDisabled);
  const[signupCallErrors, setSignupCallErrors] = useState(initialSignupCallErrors)
  //EVENT HANDLERS
  const loginInputChange = (name, value) => {
    // console.log('login input change: ', name, value); //PLACEHOLDER
    validateLogin(name, value);
    setLoginValues({...loginValues, [name]:value});
  }
  const signupInputChange = (name, value) => {
    // console.log('signup input change: ', name, value); //PLACEHOLDER
    validateSignup(name, value);
    setSignupValues({...signupValues, [name]:value});
  }

  const loginSubmit = () => {

    console.log("form submit"); //PLACEHOLDER
    // const newUser = { //NEED TO CHANGE THESE KEYS TO MATCH API????
    //   first_name: formValues.first_name.trim(), //TRIM ERRORING OUT HERE
    //   last_name: formValues.last_name.trim(),
    //   email: formValues.email.trim(),
    //   pwd: formValues.pwd.trim(),
    //   tos: formValues.tos,
    // }
    // // console.log(newUser);
    // postNewUser(newUser);
    axiosWithAuth()
    .post('https://bw-fitness-4.herokuapp.com/api/users/login', loginValues)
    .then(res=> {window.localStorage.setItem('token', res.data.token)
    console.log(res)
    setLoginCallErrors('')}
    )
    .catch(err=> {setLoginCallErrors( err.response.data.message )
    console.log(err.response)}) 
    setLoginValues(initialLoginValues);
    console.log("login submit");//placeholder until we sort out auth stuff

  }
  const signupSubmit = () => {
    console.log("signup submit");//placeholder until we sort out auth stuff
    axios.post('https://bw-fitness-4.herokuapp.com/api/users/register', signupValues)
    .then(res=> {window.localStorage.setItem('token', res.data.username)
    setSignupCallErrors('')
  })
    .catch(err=> {setSignupCallErrors(err.response.data.message)
    console.log(err.response)},
    setSignupValues(initialSignup))
  }

  const validateLogin = (name, value) => {
    yup.reach(loginSchema, name)
      .validate(value)
      .then(() => setLoginErrors({ ...loginErrors, [name]:''}))
      .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0] }))
  }
  const validateSignup = (name, value) => {
    // console.log('validating signup now')
    yup.reach(signupSchema, name)
      .validate(value)
      .then(() => setSignupErrors({ ...signupErrors, [name]:''}))
      .catch(err => setSignupErrors({ ...signupErrors, [name]: err.errors[0] }))
  }

  //SIDE EFFECTS
  // - if the form is valid, then enable submit button
  // - - for LOGIN
  useEffect(() => { 
    loginSchema.isValid(loginValues).then(valid => setLoginDisabled(!valid))
}, [loginValues]);

  // - - for SIGNUP
  useEffect(() => { 
    signupSchema.isValid(signupValues).then(valid => setSignupSubmitDisabled(!valid))
}, [signupValues]);
  useEffect(() => { //if the secret code is the auth key, enable selection of INSTRUCTOR
    if(signupValues.secret === AUTH_KEY){
      setSignupRoleDisabled(false);
    }
    else {
      setSignupRoleDisabled(true);
      // setSignupValues({...signupValues, role: 'client'}); //if it gets disabled, go back to client
      // this ^^^^ times out so it's commented out for the moment but it SHOULD get fixed.
    }
}, [signupValues]);


  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route path='/classes'>
            <Classes />
          </Route>
          <Route path='/bookings'>
            <Bookings />
          </Route>
          <Route path='/login'>
            <Login
              values={loginValues}
              change={loginInputChange}
              disabled={loginDisabled}
              submit={loginSubmit}
              errors={loginErrors}
              callErrors={loginCallErrors}
              />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
          <Route path='/signup'>
            <Signup 
              values={signupValues}
              change={signupInputChange}
              role_disabled={signupRoleDisabled}
              submit_disabled={signupSubmitDisabled}
              submit={signupSubmit}
              errors={signupErrors}
              callErrors={signupCallErrors}
            />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
