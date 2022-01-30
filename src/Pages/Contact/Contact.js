import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <Container>
            <div className='py-5'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.698619818997!2d90.40223534563532!3d23.790331822361782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c712798ac901%3A0xbd402ac5e42ef1b5!2sRd%207%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1643408096796!5m2!1sen!2sbd" title="map">
                </iframe>
            </div>
            <div className='bottom'>
                <div className='d-flex align-items-center'>
                    <img src="https://www.pikpng.com/pngl/b/314-3142242_call-now-contact-nbp-telecom-services-icon-clipart.png" width="30px" alt="" />
                    <h5 className='ps-2'>Phone: </h5>
                    <h6 className='ps-3'><small>+8801834959239</small></h6>
                </div>
                <div className='d-flex align-items-center'>
                    <img src="https://i1.wp.com/www.gauss-friends.org/wp-content/uploads/2020/04/location-pin-connectsafely-37.png?ssl=1" width="30px" alt="" />
                    <h5 className='ps-2'>location:</h5>
                    <h6 className='ps-3'><small>House-45, Rd-7, Banani, Dhaka-1212, BD.</small></h6>
                </div>
                <div className='d-flex align-items-center'>
                    <img src="https://i.ibb.co/YRM2NnH/gmail.png" width="30px" height="30px" alt="" />
                    <h5 className='ps-2'>Email:</h5>
                    <h6 className='ps-3'><small>info@rr-travely.com.bd</small></h6>
                </div>
            </div >
        </Container>
    );
};

export default Contact;