import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoginView } from '../components/login/LoginView';
import { MarvelView } from '../components/marvel/MarvelView';
import { Navbar } from '../components/ui/Navbar';
export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Navbar/>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path ="/login" component ={LoginView} />
              <Route exact path ="/" component ={MarvelView}/>
            </Switch>
          </div>
        </Router>
      );
}
