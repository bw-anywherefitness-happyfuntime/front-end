import React, { useState, useEffect } from 'react'
import ClassComp from './ClassComp.js'
import axios from 'axios'
import './styles/Classes.css'


const initFormValues = {
    class_type: '',
    class_location: '',
    class_duration: '',
    class_date: '',
    class_time: '',
    class_intensity: 0
}

export default function Classes(props) {
    const [classes, setClasses] = useState([])
    const [formValues, setFormValues] = useState(initFormValues)

    // FUNCTIONS

    // Fetch classes from API
    function getClasses() {
        axios.get('https://bw-fitness-4.herokuapp.com/api/classes')
            .then(res => {
                console.log(res);
                setClasses(...classes, res.data);
            })
            .catch(err => console.log(err))
    }

    function createClass(newClass) {
        const classToAdd = {

        }
    }


    // EFFECTS
    useEffect(getClasses, [classes]);

    return (
        <div>
            <div className='controls'>
                <button>New Class</button>
            </div>
            <div className='newclass-form'>
                <form>
                    <label>Class Type
                        <input 
                            type='text'
                            value={formValues.class_type}
                            
                        />
                    </label>
                    <label>

                    </label>
                </form>
            </div>
            <div className='classList-container'>
                {classes.map(classData => <ClassComp classData={classData}/>)}
            </div>
        </div>
    )
}


//CLASSES schema

//class_type
//class_location
//class_duration
//class_date
//class_time
//intensity_level ->>>>>> number/10
