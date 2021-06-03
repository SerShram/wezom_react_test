import React from 'react';
import './App.css';
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import Home from "./Home/Home";
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import ContactsContainer from "./Contacts/ContactsContainer";

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
            <Route  path='/home' component={Home}/>
            <Route path='/profile' component={Profile} />
            <Route path='/contacts' component={ContactsContainer} />
        </main>
        <Footer/>
    </div>
  );
}

export default App;
