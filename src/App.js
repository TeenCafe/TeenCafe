import './App.css';
import BootstrapCarousel from './BootstrapCarousel';
import BootstrapNavbar from "./BootstrapNavbar";
import {BrowserRouter as Router, Route, Link, BrowserRouter, Switch, HashRouter} from 'react-router-dom';
import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Footer from "./components/footer"
import About from "./components/About";
import Events from "./components/Events";
import Reservations from "./components/Reservations";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <div>
                    <BootstrapNavbar/>
                    <div className="pl-20">
                        <Switch>
                            
                            <Route path='/about' component={About}/>
                            <Route path='/events' component={Events}/>
                            <Route path='/reservations' component={Reservations}/>
                            <Route path='/signup' component={SignUp}/>
                            <Route exact path='/' component={Home}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        </div>

    );
}

export default App;
