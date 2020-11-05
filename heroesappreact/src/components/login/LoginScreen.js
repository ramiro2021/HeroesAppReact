import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/');
        // console.log('push desestructuracion de history');
        history.replace('/');
        console.log('replace desestructuracion de history');
    }

    return (
        <div className="container mt-5">
            <h1>Login </h1>
            <hr />

            <button className="btn btn-primary" onClick={handleLogin} >
                Login
            </button>
        </div>
    )
}
