import React, { useState, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import loginSchema from './components/validation/loginSchema';
import { axiosWithAuth } from './helpers/axiosWithAuth';
import './App.css'
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import Classes from './components/Classes'
import Bookings from './components/Bookings'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'

//INITIAL FORM STATES
const initialLoginValues = {
  username: "",
  password: "",
}
const initialLoginErrors = {
  username: "",
  password: "",
}
const initialLoginDisabled = true;

function App() {
  //LOGIN FORM STATE
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
  const [loginDisabled, setLoginDisabled] = useState(initialLoginDisabled);

  //LOGIN FORM EVENT HANDLERS
  const inputChange = (name, value) => {
    console.log('login input change: ', name, value); //PLACEHOLDER
    validateLogin(name, value);
    setLoginValues({...loginValues, [name]:value});
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
    .then(res=> console.log(res))
    .catch(err=> console.log( err.response.data.message ))
  }
  const validateLogin = (name, value) => {
    yup.reach(loginSchema, name)
      .validate(value)
      .then(() => setLoginErrors({ ...loginErrors, [name]:''}))
      .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0] }))
  }
  //SIDE EFFECTS
  useEffect(() => {
    loginSchema.isValid(loginValues).then(valid => setLoginDisabled(!valid))
}, [loginValues]);

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
              change={inputChange}
              disabled={loginDisabled}
              submit={loginSubmit}
              errors={loginErrors}
              />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
