import '../App.css';

export default function Login() {
    return <div className="mainComponent">
        <h2>Login</h2>
       <div className='loginContainer'>
            <div className="inputheader">
                <header>Welcome User</header>
            </div>
          
         <br />
            <div className="inputContainer">
                <label>Username</label>
                <input 
                type='text'
                className='loginInput'
                placeholder='Username'
                // onChange={pass an event handler here}
                />
            </div>
            <div className="inputContainer">
                <label>Password</label>
                <input
                    type='text'
                    className='loginInput'
                    placeholder="Password"
                    // onChange={pass an event handler here}
                />
            </div>
       </div>
    
    </div>
}