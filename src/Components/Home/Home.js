import React from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import './Home.css';

const Home = () => {
    return (
       <section className='bg'>
        <div className="home"></div>
        <Header></Header>
        <Card></Card>
       </section>
        
    );
};

export default Home;