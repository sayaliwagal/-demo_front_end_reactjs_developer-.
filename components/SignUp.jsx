//eslint-disable-next-line
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import { makeStyles, } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useForm from './UseForm';
import validate from './validateinfo';


const useStyles = makeStyles((theme)=> ({
  div: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    // width: '800px',
    // Height: '300px',
    // paddingBlock: '40px',
  },
  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));
const SignUp = () => {

  const {handleChange, values, errors, handleSubmit} = useForm(validate);
  const classes = useStyles();
    return(
      <Box>
  <Container component="main" maxwidth="xs" background-color="black">
      <CssBaseline />
      <div className={classes.div}>
        <Avatar className={classes.avatar}>
          <ExitToAppIcon />
        </ Avatar>
        <Typography componemt ="h1" variant="h5">
            Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>   
        <TextField
            // variant="Standerd"
            margin="normal"
            required
            fullwidth id="username"
            label="User Name"
            name="UserName"
            auroComplete="UserName"
            autoFocus 
            value={values.UserName}
            onChange={handleChange}          
             />
            {errors.username && <p>{errors.username}</p>}
              <TextField      
            // variant="Standerd"
            margin="normal"
            required
            fullwidth id="email"
            label="Email Address"
            name="email"
            auroComplete="email"
            autoFocus       
            value={values.email}
            onChange={handleChange}      
             />
               {errors.email && <p>{errors.email}</p>}
          
              <TextField
            // variant="Standerd"
            margin="normal"
            required
            fullwidth id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}  
            />
              {errors.password && <p>{errors.password}</p>}
             <TextField
            // variant="Standerd"
            margin="normal"
            required
            fullwidth id="password2"
            label="ConfirmPassword"
            name="ConfirmPassword"
            type="password"
            autoComplete="current-password"
            value={values.ConfirmPassword}
            onChange={handleChange}  
            />
              {errors.password2 && <p>{errors.password2}</p>}
            <Button type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
              Sing Up
            </Button>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                  {"Already have an Account? Sin In here"}
                </Link>

              </Grid>
            </Grid>

        </form>
     </div>
    
  </Container> 
  </Box>
        
    );
}

export default SignUp;