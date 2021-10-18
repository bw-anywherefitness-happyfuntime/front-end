import React from 'react'
import ClassComp from './ClassComp.js'

export default function Classes(props) {
    const { classes } = props;

    return (
        <div>
            {classes.map(classData => <ClassComp classData={classData} />)}
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
