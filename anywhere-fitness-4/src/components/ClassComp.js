import React from "react";


export default function Class(props) {
    const { classData } = props;

    return (
        <div>
            <div className='class-header'>
                <h2>{classData.type}</h2>
                <h3>{classData.date} @ {classData.time}</h3>
            </div>
            <div>
                <p>{classData.location}</p>
                <p>{classData.duration}</p>
                <p>{classData.intensity}</p>
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