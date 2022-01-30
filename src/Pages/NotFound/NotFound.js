import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../img/Error/404.jpg';

const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
            <img style={{ width: '400px' }} src={error} alt="img" />
            <br />
            <Link to="/"><button>Go back</button></Link>
        </div>
    );
};

export default NotFound;