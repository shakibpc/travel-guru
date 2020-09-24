import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from "./Components/Booking/Booking";
import NotFound from './Components/NotFound/NotFound';
import HotelDetails from "./Components/HotelDetails/HotelDetails";
import Login from './Components/Login/Login';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='/login'>
          <Login></Login>
        </Route>
        
        <PrivateRoute path='/booking/:placeName'>
          <Booking></Booking>
        </PrivateRoute>

        <Route exact path='/hotelDetails'>
          <HotelDetails></HotelDetails>
        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
