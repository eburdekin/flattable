import '../App.css';
import { useState } from 'react'

export default function Login() {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [login, setLogin] = useState(false)

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
        <div className='loginContainer'>
            <h3>Welcome, {login ? user : "user"}!</h3>

            <br />
            <div className="inputContainer">
                <label>Username</label>
                <input
                    type='text'
                    className='loginInput'
                    placeholder='Username'
                    style={style}
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
            </div>
            <div className="inputContainer">
                <label>Password</label>
                <input
                    type='password'
                    className='loginInput'
                    placeholder="Password"
                    style={style}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            </div>
            <input type="button" style={buttonStyle} value="Login" onClick={handleLogin}></input>
            {login ? "Login success" : null }
        </div>

    </div>
}