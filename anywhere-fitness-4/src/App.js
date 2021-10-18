import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

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

function App() {
  //LOGIN FORM STATE
  const [loginValues, setLoginValues] = useState(initialLoginValues)

  //LOGIN FORM EVENT HANDLERS
  const inputChange = (name, value) => {
    console.log('login input change: ', name, value); //PLACEHOLDER
    // validate(name, value);
    setLoginValues({...loginValues, [name]:value});
  }

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
