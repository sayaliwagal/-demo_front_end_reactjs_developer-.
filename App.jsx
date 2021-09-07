//eslint-disable-next-line
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { makeStyles, } from '@material-ui/core/styles';
import SignUp from './components/SignUp';
import Home from './components/Home';


const useStyles = makeStyles((theme) => ({}));
const App = () => {
   const classes = useStyles();
    return (
      
      <div>
        <Router>
         <Switch>
         <Route path="/" exact conponent={Home} />
         <Route path="/add" conponent={SignUp} />
          
         </Switch>
         </ Router>
      </div>
    );
};

export default App;