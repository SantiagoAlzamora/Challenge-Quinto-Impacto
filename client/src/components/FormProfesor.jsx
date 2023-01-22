import React from 'react'

export default function FormProfesor() {
    return (
        <form>
            <input type="email" placeholder='example@example.com' />
            <input type="password" placeholder='Password' />
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Lastname' />
            <button type='submit'>Register</button>
        </form>
    )
}
