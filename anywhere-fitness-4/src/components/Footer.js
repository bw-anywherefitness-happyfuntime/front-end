import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer>
            <div>Footer</div>
            <div className='navigations'>
                <Link to='/'>HOME</Link>
                <Link to='/classes'>CLASSES</Link>
                <Link to='/bookings'>BOOKINGS</Link>
                <Link to='/login'>LOGIN</Link>
                <Link to='/logout'>LOGOUT</Link>
                <Link to='/signup'>SIGNUP</Link>
            </div>
            </footer>
    )
}
