import React from 'react'
import ClassComp from './ClassComp.js'

export default function Classes(props) {
    const { classes } = props;

    return (
        <div>
            <div className='controls'>
                <button>New Class</button>
            </div>
            <div className='classList-container'>
                {classes.map(classData => <ClassComp classData={classData} />)}
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
