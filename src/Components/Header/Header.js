import React, { useContext } from 'react';
import { Container,Navbar,FormControl,Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { UserContext } from '../../App';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container>

        <Navbar variant="dark">
            <Navbar.Brand href="/"><img className="logo" src={logo} alt="" /></Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                <FormControl variant='white' type="text" placeholder="Search Your Destination...." className="mr-sm-2" />
                </Form>
                <Link className='navBar ml-5' to="/">News</Link>
                <Link className='navBar ml-5' to="destination">Destination</Link>
                <Link className='navBar ml-5' to="blog">Blog</Link>
                <Link className='navBar ml-5' to="contact">Contact</Link>
                <Link className='navBar ml-5' to="/hotelDetails">{loggedInUser.name}</Link> 
                <Link to='/login'><Button className='button'>Login</Button></Link>
            </Navbar.Collapse>
        </Navbar>
    </Container>

    );
};

export default Header;