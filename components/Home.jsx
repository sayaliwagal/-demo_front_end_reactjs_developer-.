import React from 'react'
import Navbar from './Navbar';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
import Feed from './Feed';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    return (
        <div>
      
        <Navbar />
      <Grid container>
        <Grid item sm={2}><Leftbar /></Grid>
        <Grid item sm={7}><Feed /></Grid>
        <Grid item sm={3}><Rightbar /></Grid>
        
      </Grid>
    
        </div>
    )
}

export default Home
