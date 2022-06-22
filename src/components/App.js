import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import Home from "./Home/Home";
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import ContactsContainer from "./Contacts/ContactsContainer";
import NotFound from "./Common/NotFound/NotFound";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/contacts' component={ContactsContainer}/>
      <Route path='/contacts/:id' component={ContactsContainer}/>
      {/*<Route path='*' component={NotFound}/>*/}
      <Footer/>
    </div>
  );
}

export default App;
