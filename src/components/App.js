import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Home from "./Home/Home";
import {Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import ContactsContainer from "./Contacts/ContactsContainer";
import './App.css';
import Contact from "./Contacts/Contact";
import NotFound from "./Common/NotFound";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route exact path='/contacts' component={ContactsContainer}/>
        <Route exact path='/contacts/:id' component={Contact}/>
        <Route path='*' component={NotFound}/>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
