import React from 'react';
import './Visit.css';
import { Container } from 'react-bootstrap';
import visit1 from '../../img/visit/1.jpg';
import visit2 from '../../img/visit/2.jpg';
import visit3 from '../../img/visit/3.jpg';
import visit4 from '../../img/visit/4.jpg';
import visit5 from '../../img/visit/5.jpg';

const Visit = () => {
    return (
        <Container>
            <div className='visit'>
                <h2>Go Exotic Places</h2>
                <div>
                    <img className='visit' src={visit1} alt="" width="200" height="200" />
                    <img className='visit' src={visit2} alt="" width="500" height="200" />
                    <img className='visit' src={visit3} alt="" width="200" height="200" />
                </div>
                <div>
                    <img className='visit' src={visit4} alt="" width="450" height="200" />
                    <img className='visit' src={visit5} alt="" width="450" height="200" />
                </div>
            </div>
        </Container>
    );
};

export default Visit;