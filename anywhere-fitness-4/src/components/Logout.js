import React, { useEffect } from 'react'
import { useHistory } from 'react-router'



export default function Logout(props) {
    const { setCurrentUsername } = props
    const { push } = useHistory()
    useEffect(() => {
        window.localStorage.removeItem('role')
        push('/')
        setCurrentUsername('');

    })
    return (
        <div></div>
    )
}
