import React from 'react';
import './About.css';
import banner from '../../img/banner/7.jpg';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const About = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/services`);
    }
    return (
        <Container>
            <h1 className='mt-4'><u>About Us</u></h1>
            <div className='row row-cols-1 row-cols-lg-2 pb-5'>
                <div className='col'>
                    <img className='img-fluid pt-5' src={banner} alt="Img" />
                </div>
                <div className='col pt-3 paragraph'>
                    <h2 className='text-info'>Our Management Team</h2>
                    <br /><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button onClick={handleClick} type="button" className="btn btn-primary">Learn More ...</button>
                </div>
            </div>
        </Container>
    );
};

export default About;