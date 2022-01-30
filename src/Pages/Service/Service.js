import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, img, title, rating, price } = props.service;   // destructuring in service components
    return (
        <Container>
            <div className='service px-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            Ratting: {rating}
                        </Card.Text>
                        <Card.Text>
                            Price: {price}
                        </Card.Text>
                        <Link to={`/booking/${id}`}><button type="button" className="btn btn-primary">Details...</button></Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Service;