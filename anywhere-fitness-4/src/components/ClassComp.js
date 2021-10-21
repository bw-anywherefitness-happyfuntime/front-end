import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

export default function Class(props) {
    const role = localStorage.getItem('role')
    const { push } = useHistory()
    const { classData, deleteClass, currentUsername } = props;
    const initFormValues = {
        class_type: classData.class_type,
        class_location: classData.class_location,
        class_duration: classData.class_duration,
        class_date: classData.class_date,
        class_time: classData.class_time,
        intensity_level: classData.intensity_level
    }
    const [formValues, setFormValues] = useState(initFormValues)
    const [bookError, setBookError] = useState('')

    function deleteFunc() {
        deleteClass(classData.class_id);
    }

    function editFunc() {
        document.querySelector('#editForm').classList.remove('hide');
    }

    // Update values on Change
    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    function updateClass(values) {
        const classToUpdate = {
            class_type: values.class_type,
            class_location: values.class_location,
            class_duration: parseInt(values.class_duration),
            class_date: values.class_date,
            class_time: values.class_time,
            intensity_level: parseInt(values.intensity_level)
        }

        axios.put(`https://bw-fitness-4.herokuapp.com/api/classes/${classData.class_id}`, classToUpdate)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => {
                document.querySelector('#editForm').classList.add('hide');
            })
    }

    // HELPER FUNCTIONS
    function change(name, value) {
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    function submit(evt) {
        evt.preventDefault();
        updateClass(formValues);
    }

    function bookClass(e) {
        e.preventDefault();
        if (!role) {
            setBookError('You need to log in in order to book a class')
        } else {
            axios.post(`https://bw-fitness-4.herokuapp.com/api/users/${currentUsername}/bookings`, { class_id: classData.class_id })
                .then(res => {
                    console.log(res)
                    push('/bookings')
                })
                .catch(err => setBookError(err.response.data.message))
        }
    }
    const buttonSwitch = (window.localStorage.getItem('role') === '2') ? <div className='buttons'>
        <button onClick={editFunc}>Edit</button>
        <button onClick={deleteFunc}>Delete</button>
    </div> : <button className='bookBtn' onClick={bookClass}>Book</button>

    return (
        <div className='card'>
            <div className='class-header'>
                <h2>Class: <span>{classData.class_type}</span> </h2>
                <h3>{classData.class_date} @ {classData.class_time}</h3>
            </div>
            <div className='contents'>
                <p>Location: {classData.class_location}</p>
                <p>Duration: {classData.class_duration} minutes</p>
                <p>Intensity: {classData.intensity_level}/10</p>
            </div>
            {(window.localStorage.getItem('role') === '2') && <div>Attendees:
                <ul>
                    {classData.attendance.map(attendees => <li>{attendees.username}</li>)}
                </ul>

            </div>}

            <div className='buttonSwitch'>{buttonSwitch}</div>
            {bookError ? <div className='book-error'>{bookError}</div> : <div></div>}

            <form id='editForm' onSubmit={submit} className='hide'>
                <div className='form-text'>

                    <label>Class Type
                        <input
                            type='text'
                            name='class_type'
                            value={formValues.class_type}
                            onChange={onChange}
                        />
                    </label>

                    <label>Location
                        <input
                            type='text'
                            name='class_location'
                            value={formValues.class_location}
                            onChange={onChange}
                        />
                    </label>

                    <label>Duration
                        <input
                            type='text'
                            name='class_duration'
                            value={formValues.class_duration}
                            onChange={onChange}
                        />
                    </label>

                    <label>Time
                        <input
                            type='text'
                            name='class_time'
                            value={formValues.class_time}
                            onChange={onChange}
                        />
                    </label>

                    <label>Date
                        <input
                            type='date'
                            name='class_date'
                            value={formValues.class_date}
                            onChange={onChange}
                        />
                    </label>

                    <label>Intensity
                        <input
                            type='text'
                            name='intensity_level'
                            value={formValues.intensity_level}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className='btn-container'>
                    <button id='submitBtn'>Edit Class</button>
                </div>
            </form>
        </div>
    )
}

