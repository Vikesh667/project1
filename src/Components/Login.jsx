import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, Grid ,Paper, TextField, Typography} from "@mui/material";
import {
 
  FaUser
  
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Login() {
  const paperStyle={padding: 20,height: '75vh',width: 350,margin: "20px auto"}
  const avtarStyle={background: 'green'}
  const btnstyle={margin:'8px 0'}
  const sizeFont={fontSize: '15px'}


  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("yourPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("yourEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

    return (
      <div>
      {/* <Navbar /> */}
          <section className="hero-section">
        {home ? (
          <Grid>
            <form onSubmit={handleLogin}>
                <Paper elevation={10} style={paperStyle}>
                  <Grid align='center'>
                      <Avatar style={avtarStyle}><LockIcon /></Avatar>
                      <h2>SignIn</h2>
                      <br/>
                  </Grid>
                  <TextField label='email' placeholder="Enter email"  onChange={(event) => setEmaillog(event.target.value)} 
                      fullWidth required/>
                      <br/><br/>
                  <TextField label='Password' placeholder="Enter Password" type='password'  onChange={(event) => setPasswordlog(event.target.value)}
                    fullWidth required/>  
                  <Button type="Submit" color="primary" variant ="contained" style={btnstyle} fullWidth required>Login</Button> 
                  <Typography> <h6 style={sizeFont}>Do you have an acount? </h6>
                        <NavLink to="/Registeration">
                          <h6> Register</h6></NavLink>
                  </Typography>
                </Paper>
              </form>
          </Grid>
  ) : (
          <Home />
        )}
        </section>
      </div>
    
    );
  
}

export default Login;