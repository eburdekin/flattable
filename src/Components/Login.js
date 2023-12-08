import '../App.css';
import { useState } from 'react'

export default function Login() {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [login, setLogin] = useState('')

    function handleLogin() {
        if (user !== '') {
        setLogin(!login)
        }
        else {
            alert("Enter a username!")
        }
    }

    const style = {
        'fontFamily': 'Roboto',
        'padding': '2px',
        'margin': '5px',
        'width': '200px',
        'fontWeight': 'bold',
    }

    const buttonStyle = {
        'fontFamily': 'Roboto',
        'padding': '8px',
        'margin': '5px',
        'backgroundColor': '#BF41B7',
        'color': 'white',
        'fontSize': '14px',
        'fontWeight': 'bold',
    }

    return <div className="mainComponent">
        <h2>Login</h2>
        <h3>Welcome, {login ? user : "user"}!</h3>
            <p>Please log in using your Employee Credentials to access today's Reservations and Menu.</p>
        <div className='loginContainer'>
            <br />
                <label>Username</label>
                <input
                    type='text'
                    className='loginInput'
                    style={style}
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <label>Password</label>
                <input
                    type='password'
                    className='loginInput'
                    style={style}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            <input type="button" style={buttonStyle} value="Login" onClick={handleLogin}></input>
            {login ? "Login success" : null }
        </div>

    </div>
}