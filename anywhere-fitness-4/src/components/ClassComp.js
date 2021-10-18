import axios from "axios";
import React from "react";
import './styles/ClassComp.css';


export default function Class(props) {
    const { classData, deleteClass, editClass } = props;
    
    function deleteFunc() {
        deleteClass(classData.class_id);
    }

    function editFunc() {
        editClass(classData.class_id);
    }


    return (
        <div className='card'>
            <div className='class-header'>
                <h2>Class: {classData.class_type}</h2>
                <h3>{classData.class_date} @ {classData.class_time}</h3>
            </div>
            <div className='contents'>
                <p>Where: {classData.class_location}</p>
                <p>Duration: {classData.class_duration}</p>
                <p>Intensity: {classData.intensity_level}/10</p>
            </div>
            <div className='buttons'>
                <button onClick={editFunc}>Edit</button>
                <button onClick={deleteFunc}>Delete</button>
            </div>
        </div>
    )
}

//class_type
//class_location
//class_duration
//class_date
//class_time
//intensity_level ->>>>>> number/10