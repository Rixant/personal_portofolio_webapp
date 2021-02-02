import { render } from 'react-dom';
import NavBar from './NavigationComponents/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './AboutComponent';
import Redirect from './RedirectComponent';
import Contact from './ContactComponent';
import Resume from './ResumeComponent';
import Home from './HomeComponent';



const Main=()=>{
        return(
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route component={Home} path='/' exact />
                    <Route component={About} path='/about'  />
                    <Route exact path="/Projects" render={() => (window.location = "https://github.com/Rixant")} />
                    <Route component={Resume} path='/resume'/>
                    <Route component={Contact} path='/contact'/>
                    </Switch>  
            </BrowserRouter>
            

        );



    }



export default Main;