import './Booking.css';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import img1 from '../../img/banner/2.png';
import img2 from '../../img/banner/3.png';
import img3 from '../../img/banner/1.png';


const Booking = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});

    useEffect(() => {
        fetch('https://whispering-coast-93144.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if (details.length > 0) {
            // eslint-disable-next-line eqeqeq
            const matchData = details.find(detail => detail._id == serviceId)
            setSpecificDetail(matchData);
        }
    }, [details, serviceId, specificDetail])

    return (
        <Container>
            <Carousel fade className='banner-container pb-5 pt-2'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div>
                <h1>Tour Overview</h1>
            </div>
            <div className='bottom'>
                <div className='booking'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={specificDetail?.img} />
                        <Card.Body>
                            <Card.Title>{specificDetail?.title}</Card.Title>
                            <Card.Text>
                                Price: {specificDetail?.price}
                            </Card.Text>
                            <Card.Text>
                                {specificDetail?.detail}
                            </Card.Text>
                            <Link to="/"><Button variant="primary">Go back</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div >
        </Container>
    );
};

export default Booking;