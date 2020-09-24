import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Header from '../Header/Header';
import './Booking.css';

const Booking = () => {

    const {placeName}=useParams();
    const booking=fakeData.find(pl=>pl.name === placeName)

    return (
        <section className="homepage">

        <div className="background"></div>

        <Header></Header>
        <Container className="pt-5 mt-5">

                <Row>
                    <Col lg={5} className='text-center'>
                        <h2 className='placeName'>{booking.name}</h2>
                        <p className='description'>{booking.fullDescription}</p>
                
                    </Col>

                    <Col lg={2} className="mb-5"></Col>

                    <Col lg={5} className="formStyle mb-5 ">
                        <form className="form-area">
                            <div className="form-group">
                                <label>Origin</label>
                                <input type="address" defaultValue={`Rajshahi`} className="form-control" placeholder="Enter Address" required />
                            </div>

                            <div className="form-group">
                                <label>Destination</label>
                                <input type="address" className="form-control" defaultValue={placeName} />
                            </div>
                            <div className="form-group row booking-date">
                                <div className="col-6">
                                    <label htmlFor="date-input">From</label>
                                    <input className="form-control" type="date" id="dateFrom" required />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="dateTo">To</label>
                                    <input className="form-control" type="date" id="dateTo" required />
                                </div>
                            </div>
                            <br/>                          
                            <Link to ='/hotelDetails'><button type="submit" className="btn btn-warning btn-block">Submit</button> </Link>
                        </form>
                    </Col> 




                    </Row>

                    </Container>








    </section>
    );
};

export default Booking;