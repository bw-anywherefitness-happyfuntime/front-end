import React, { useState, useEffect } from 'react'
import ClassComp from './ClassComp.js'
import axios from 'axios'

const initFormValues = {
    class_type: '',
    class_location: '',
    class_duration: '',
    class_date: '',
    class_time: '',
    intensity_level: ''
}

const initDisabled = false;

export default function Classes(props) {
    const { currentUsername } = props
    const [classes, setClasses] = useState([])
    const [formValues, setFormValues] = useState(initFormValues)
    const [disabled, setDisabled] = useState(initDisabled);

    // FUNCTIONS

    // Update values on Change
    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    // Delete Class
    function deleteClass(id) {
        axios.delete(`https://bw-fitness-4.herokuapp.com/api/classes/${id}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    // Fetch classes from API
    function getClasses() {
        axios.get('https://bw-fitness-4.herokuapp.com/api/classes')
            .then(res => {
                setClasses(res.data);
            })
            .catch(err => console.log(err))
    }

    // Toggle Form
    function toggleForm(evt) {
        const form = document.querySelector('.form-container');
        form.classList.remove('hide');
        evt.target.classList.add('hide');
    }

    // Post New Class
    function post(values) {
        const classToAdd = {
            class_type: values.class_type,
            class_location: values.class_location,
            class_duration: parseInt(values.class_duration),
            class_date: values.class_date,
            class_time: values.class_time,
            intensity_level: parseInt(values.intensity_level)
        }

        axios.post('https://bw-fitness-4.herokuapp.com/api/classes', classToAdd)
            .then(res => {
                setClasses([...classes, res.data])
                document.querySelector('.form-container').classList.add('hide');
                document.querySelector('#newClassBtn').classList.remove('hide');
            })
            .catch(err => console.log(err))
            .finally(() => setFormValues(initFormValues))
    }


    // EFFECTS
    
    useEffect(getClasses, [])

    // HELPER FUNCTIONS
    function change(name, value) {
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    // Form Submit
    const submit = (evt) => {
        evt.preventDefault();
        post(formValues);
    }

    return (
        <div className='classes'>
            <div className='controls'>
                {(window.localStorage.getItem('role') === '2') && <button onClick={toggleForm} id='newClassBtn'>New Class</button>}
            </div>
            <div className='form-container hide'>
                <form onSubmit={submit}>
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
                    </div>
                    <div className='form-text'>
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
                    <button id='submitBtn' disabled={disabled}>Create Class</button>
                </form>
            </div>
            <div className='classList-container'>
                {classes.map(classData => <ClassComp
                    currentUsername={currentUsername}
                    classData={classData}
                    deleteClass={deleteClass}
                    onChange={onChange}
                    key={classData.class_id} />)}
            </div>
        </div>
    )
}


//CLASSES schema

//class_type
//class_location
//class_duration ->>>>>> number (in minutes)
//class_date
//class_time
//intensity_level ->>>>>> number/10
