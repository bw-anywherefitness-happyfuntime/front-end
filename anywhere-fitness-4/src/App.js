import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Classes from './components/Classes'
import Bookings from './components/Bookings'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'

function App() {

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
            <Login />
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
