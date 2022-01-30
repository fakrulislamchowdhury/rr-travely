import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://whispering-coast-93144.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container>
            <h1 className='text-primary mt-5'>Our Popular Services</h1>
            <div className="service-container">
                {
                    services.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;