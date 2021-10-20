import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Bookings(props) {
    const { currentUsername } = props
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        axios.get(`https://bw-fitness-4.herokuapp.com/api/users/${currentUsername}/bookings`)
            .then(res => {
                setBookings(res.data.bookings)
                console.log(res.data)
            })
            .catch(err => console.log({ err }))

    }, [])

    const handleDelete = booking => {
        console.log('button clicked')
        
        axios.delete(`https://bw-fitness-4.herokuapp.com/api/users/${currentUsername}/bookings/${booking.booking_id}`)
        .then(res=> setBookings(res.data.currentBookings))
        .catch(err => console.log({ err }))
    }
    return (

        <div>
            <h2>{currentUsername}'s Class Reservations</h2>
            {bookings.map(booking => {
                return (
                    <div>
                        <h2>Type: {booking.class_type}</h2>
                        <p>Date: {booking.class_date}</p>
                        <p>Location: {booking.class_location}</p>
                        <p>Time: {booking.class_time}</p>
                        <button onClick={()=> handleDelete(booking)}>Cancel Booking</button>
                    </div>
                )
            })}
        </div>
    )
}