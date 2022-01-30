import React from 'react';
import './Banner.css';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../../img/banner/5.png';
import img2 from '../../../img/banner/6.png';
import img3 from '../../../img/banner/4.png';

const Banner = () => {
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
        </Container>
    );
};

export default Banner;