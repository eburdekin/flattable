import '../App.css';

export default function Login() {

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
            <h3>Welcome, user!</h3>

            <br />
            <div className="inputContainer">
                <label>Username</label>
                <input
                    type='text'
                    className='loginInput'
                    placeholder='Username'
                    style={style}
                // onChange={pass an event handler here}
                />
            </div>
            <div className="inputContainer">
                <label>Password</label>
                <input
                    type='text'
                    className='loginInput'
                    placeholder="Password"
                    style={style}
                // onChange={pass an event handler here}
                />
            </div>
            <input type="button" style={buttonStyle} value="Login"></input>
        </div>

    </div>
}