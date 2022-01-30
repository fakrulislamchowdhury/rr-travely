import React from 'react';
import './Login.css';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div className='login'>
            <h1 className='py-5'>Please login</h1>
            <div>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
            <br />
            <div>
                <button onClick={signInUsingGithub} className="btn btn-warning">GitHub Sign In</button>
            </div>
        </div>
    );
};

export default Login;