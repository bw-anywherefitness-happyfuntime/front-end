import React, {useEffect} from 'react'
import { useHistory } from 'react-router'



export default function Logout() {
    const { push } = useHistory()
    useEffect(()=> {
    window.localStorage.removeItem('role')
    push('/')

})
    return (
        <div>Logged out</div>
    )
}
