import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Login.css';
import GoogleLogo from '../../images/Icon/google.png';
import FacebookLogo from '../../images/Icon/fb.png';

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    const handelGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const googleSignInUser = { name: displayName, email}
            console.log(googleSignInUser);
            setLoggedInUser(googleSignInUser);
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    const handelFacebookSignIn = () =>{
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            const {displayName,email,photoURL} = result.user;
            const facebookSignIn = {name: displayName,  email,  photoURL}
            console.log(facebookSignIn);
            setLoggedInUser(facebookSignIn);
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    return (
        <section className="loginBG">
            <Container>
                <Row>
                    <Col  xs={6} md={4}>
                        <Header></Header>
                    </Col>
                </Row>
                <Row>
                <Col xs={6} md={4}>
                    
                    </Col>
                    <Col xs={6} md={4}>
                        <button onClick={handelGoogleSignIn}><img className="img" src={GoogleLogo} alt=""/> <span>Sign in with Google</span></button>
                        <br/>
                        <button onClick={handelFacebookSignIn}><img className="img" src={FacebookLogo} alt=""/> <span>Sign in with Facebook</span></button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;