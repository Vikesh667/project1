import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import Navbar from "./Navbar";
import {
  FaEnvelope,
  FaKey,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input';
import "react-phone-number-input/style.css";
import { Avatar, Button,  Grid, InputAdornment, Paper,  Typography } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function Registration() {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const[isError,setIsError]=useState(false);

  const [value, setValue] = useState();

  if (value && isValidPhoneNumber(value.toString())) {
    console.log("Phone Number Valid");
  } else {
    console.log("Invalid");
  }

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const headerStyle={margin:0}
  const paperStyle={padding: '30px 20px' ,width:300,margin:"20px auto"}
  const avtarStyle={backgroundColor: 'green'}
  const sizeFont={fontSize: '20px'}

  function handleFormSubmit(e) {
    e.preventDefault();

    if (name.split("").lenght<8 || !email || !password || !phone ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("yourEmail", JSON.stringify(email));
      localStorage.setItem(
        "yourPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 return (
    <>
      <div>
        <Navbar />
        <section className="hero-section">
          {" "}
          {login ? (
            <Grid>
                <form onSubmit={handleFormSubmit}>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avtarStyle}>
                              <AddCircleOutlineIcon/>
                            </Avatar>
                      <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant="caption">Please fill this form to create an account</Typography>
                  <div className="form-group">
                    < FaUser  style={sizeFont}/>
                    <br/>
                    <input
                      type="text"
                      size="40"
                      className="form-control"
                      placeholder="Enter Full Name"
                      fullWidth required
                      name="name"
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <br/>
                <div className="form-group">
                < FaEnvelope style={sizeFont}/>
                <br/>
                  <input
                    type="email"
                    size="40"
                    className="form-control"
                    placeholder="Enter email"
                    fullWidth required
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <br/>
                <div className="form-group">
                < FaKey style={sizeFont}/>
                <br/>
                  <input
                    type="password"
                    size="40"
                    minLength="8"
                    className="form-control"
                    placeholder="Enter password"
                    fullWidth required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <br/>
                <div className="form-group">
                  < FaPhone style={sizeFont}/>
                  <br/>
                    <input
                      type="tel"
                      size="40"
                      value={phone}
                      maxLength="10"
                      className="form-control"
                      placeholder="Enter contact no"
                      fullWidth required
                      onChange={(event) => {
                            setPhone(event.target.value);}}
                    />
                </div>                    
                   <br/>
                   <Button type='submit' variant='contained'  color='primary'>
                           Register
                    </Button>
                  
                  {flag && (
                    <Alert color="primary" variant="danger">
                      I got it you are in hurry! But every Field is important!
                    </Alert>
                  )}
                </Grid>   
                </Paper>
              </form>
            </Grid>

          ) : (
            <Login />
          )}
          </section>
        </div>
    
    </>
  );
}

export default Registration;