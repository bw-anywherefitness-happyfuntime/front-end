import React from "react";
import './styles/ClassComp.css';


export default function Class(props) {
    const { classData } = props;

    return (
        <div className='card'>
            <div className='class-header'>
                <h2>Class: {classData.class_type}</h2>
                <h3>{classData.class_date} @ {classData.class_time}</h3>
            </div>
            <div>
                <p>Where: {classData.class_location}</p>
                <p>Length: {classData.class_duration}</p>
                <p>Intensity: {classData.class_intensity}/10</p>
            </div>

            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

//class_type
//class_location
//class_duration
//class_date
//class_time
//intensity_level ->>>>>> number/10