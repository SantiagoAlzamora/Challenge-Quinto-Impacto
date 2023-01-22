import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export default function Header() {
    const {data} = useContext(AuthContext)
    return (
        <div className='header'>
            <Link to={""}>Home</Link>
            <Link to={""}>{data.user ? "Logout" : "Login"}</Link>
            <Link to={""}>Register</Link>
            <Link to={""}>{data.user.email}</Link>
        </div>
    )
}
