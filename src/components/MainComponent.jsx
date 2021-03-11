import NavBar from './NavigationComponents/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Resume from './ResumeComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';



const Main=()=>{
        return(
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route component={Home} path='/'  exact />
                    <Route component={About} path='/about'  />
                    <Route exact path="/Projects" render={() => (window.location = "https://github.com/Rixant")} />
                    <Route component={Resume} path='/resume'/>
                    <Route component={Contact} path='/contact'/>
                    </Switch> 
                    <Footer /> 
            </BrowserRouter>
            

        );



    }



export default Main;