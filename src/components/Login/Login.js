import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Log In</h3>
            <div style={{margin: '20px'}}>
                <button onClick={signInWithGoogle}>Google Signin</button>
            </div>
            <form>
                <input type="email" name="" id="opiurew43879" placeholder='Your Eamil' />
                <br />
                <input type="password" name="" id="440iesr094930j" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;