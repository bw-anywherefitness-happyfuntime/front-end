import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    
    return (
        <header className="App-header">
            <div>logo</div>
            <div className='navigations'>
                <Link to='/'>HOME</Link>
                <Link to='/classes'>CLASSES</Link>
                <Link to='/bookings'>BOOKINGS</Link>
                <Link to='/login'>LOGIN</Link>
                <Link to='/logout'>LOGOUT</Link>
                <Link to='/signup'>SIGNUP</Link>
            </div>
        </header>
    )
}
