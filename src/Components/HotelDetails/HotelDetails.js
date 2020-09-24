import React from 'react';
import {Col, Container,Row } from 'react-bootstrap';
import './HotelDetails.css';
import DemoHotelsData from "./DemoHotelsData";
import AllHotels from './AllHotels';
import Header from '../Header/Header';


const HotelDetails = () => {
    return (
        <section className='hotelsBg'>
            <br></br>
            <Container>
                <Header></Header>
                <hr></hr>
            </Container>
            <Container>
                <Row> 
                    <Col md={7}>
                        {
                            DemoHotelsData.map(hotel=> <AllHotels hotel={hotel}></AllHotels>)
                        }
                    </Col>
                    <Col md={5}>
                        <div className='container'> 
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default HotelDetails;