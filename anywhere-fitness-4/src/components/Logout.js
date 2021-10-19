import React, {useEffect} from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'



export default function Logout() {
    useEffect(()=> {
    window.localStorage.removeItem('role')
})
    return (
        <div>Logout</div>
    )
}
