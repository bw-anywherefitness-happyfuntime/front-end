import React, { useState, useEffect } from 'react'
import ClassComp from './ClassComp.js'
import axios from 'axios'
import './styles/Classes.css'

export default function Classes(props) {
    const [classes, setClasses] = useState([])

    function getClasses() {
        axios.get('https://bw-fitness-4.herokuapp.com/api/classes')
            .then(res => {
                console.log(res);
                setClasses(res.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(getClasses, []);

    return (
        <div>
            <div className='controls'>
                <button>New Class</button>
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
