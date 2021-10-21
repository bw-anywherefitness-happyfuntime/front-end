import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Modal(props) {
    const {
        displayModal,
        book,
        handleDelete,
        handleModal
    } = props

    return (
        <>
            {
                !!displayModal ? <div className='modal'>
                    <div>Are you sure you want to cancel this class?</div>
                    <div>You won't be able to undo it</div>
                    <div>
                        <button onClick={() => handleDelete(book)}>Yes</button>
                        <button onClick={() => handleModal(false)}>No</button>
                    </div>
                </div > : <div></div>
            }

        </>

    )
}

export default function Bookings(props) {
    const { currentUsername } = props
    const [bookings, setBookings] = useState([])
    const [book, setBook] = useState(null)
    const [displayModal, setDisplayModel] = useState(false)

    useEffect(() => {
        axios.get(`https://bw-fitness-4.herokuapp.com/api/users/${currentUsername}/bookings`)
            .then(res => {
                setBookings(res.data.bookings)
                console.log(res.data)
            })
            .catch(err => console.log({ err }))

    }, [])

    const handleModal = (display, booking) => {
        setDisplayModel(display);
        setBook(booking)
    }

    console.log(displayModal)

    const handleDelete = booking => {
        console.log('button clicked')
        axios.delete(`https://bw-fitness-4.herokuapp.com/api/users/${currentUsername}/bookings/${booking.booking_id}`)
            .then(res => {
                setBookings(res.data.currentBookings)
                setDisplayModel(false)
            })
            .catch(err => console.log({ err }))
    }
    return (
        <div className='bookings-wrap'>
            <div className='bookings'>
                <h2>{currentUsername}'s Class Reservations</h2>
                <p>Enjoy Your Classes Built With <i class="fa fa-heart"></i><i class="fa fa-heart"></i><i class="fa fa-heart"></i></p>
                <div className='booking-cards'>
                    {bookings.length > 0 ? bookings.map(booking => {
                        return (
                            <div className='booking'>
                                <h3>{booking.class_type}</h3>
                                <p>Date: {booking.class_date}</p>
                                <p>Location: {booking.class_location}</p>
                                <p>Time: {booking.class_time}</p>
                                <button className='cancelBtn' onClick={() => handleModal(true, booking)}>Cancel Booking</button>
                            </div>
                        )
                    }) : <div>You don't have any booked class yet!</div>}
                </div>
                <Modal
                    book={book}
                    displayModal={displayModal}
                    handleDelete={handleDelete}
                    handleModal={handleModal}
                />
            </div>
        </div>
    )
}