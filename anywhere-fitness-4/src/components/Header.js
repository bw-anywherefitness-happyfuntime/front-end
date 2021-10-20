import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const role = window.localStorage.getItem('role')
    const navMagic=
        !!role 
        ? (<Link className='nav nav-4' to='/logout'>LOGOUT</Link>) 
        : (
            [<Link className='nav nav-4' to='/login'>LOGIN</Link>,
            <Link className='nav nav-5' to='/signup'>SIGNUP</Link>]
        )
    const bookingMagic=
        role === 'client' && (<Link className='nav nav-3' to='/bookings'>BOOKINGS</Link>)
    return (
        <header className="App-header">
            <div className='header-container'>
                <div className='logo-wrap'>
                    <div className='logo'>
                        A/F
                    </div>
                    <div className='brand'>AnywhereFitness</div>
                </div>
                <div className='navigations'>
                    <Link className='nav nav-1' to='/'>HOME</Link>
                    <Link className='nav nav-2' to='/classes'>CLASSES</Link>
                    {bookingMagic}
                    {navMagic}
                </div>
            </div>
        </header>
    )
}
