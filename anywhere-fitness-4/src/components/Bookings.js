import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Bookings(props) {
    const [bookings, getBookings] = useState([]);
    


   useEffect(() => {
       axios.get(
           `https://bw-fitness-4.herokuapp.com/api/users/${props.currentUsername}/bookings`
           ).then(res => {
               getBookings(res.data);
               console.log(res.data);
           }).catch(error => console.log(error));
   }, []);

   

    return (
        <div>bookings</div>
        
    )
}


//when clients click "bookings" tab in menu, it will get "/api/users/${username}/bookings" and respond with the user_id, username, and an array of bookings


//when instructor clicks on "bookings" it will get "/api/classes" and response will be class_id, type, time, date, duration, intensity level, and attendance.

//[{"class_id":12,"class_type":"Pilates","class_location":"4E","class_time":"5PM","class_date":"2021-10-27","class_duration":"45","intensity_level":"7","attendance":[]},{"class_id":14,"class_type":"Boxing","class_location":"3A","class_time":"10AM","class_date":"2021-10-22","class_duration":"60","intensity_level":"10","attendance":[]}]