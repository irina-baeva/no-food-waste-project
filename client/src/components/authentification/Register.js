import React, { Component } from 'react';
import { FormControl, Input, Container, Paper, Button, FormHelperText } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const useStylesRegister =makeStyles({
    root: {
        flexGrow: 1,
        margin: "auto"
    },
    paper: {
        marginTop: "50%",
        // transform: "translate(0, 50%)",
        padding: 20,
        maxWidth: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        flexDirection: "column",
        marginTop: "1.2rem 0",

        
    },
    form: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minWidth: 600,
        marginTop: "0.3rem",
        color: "#888",
    }

});

export default function Register() {
    const classes = useStylesRegister();
            return (
                <React.Fragment className={classes.root}>
                    <Container maxWidth="sm">
                        <h1 class="large text-primary">Sign Up</h1>
                        <p class="lead">
                        <FontAwesomeIcon icon={faUser} />  Create Your Account</p>
                        <Paper className={classes.paper}>
                            <form className={classes.form}>
                                <FormControl class="" fullWidth = 'true'>
                                    <Input type="text" placeholder="Name" name="name" required />
                                </FormControl>
                                <FormControl>
                                    <Input type="email" placeholder="Email Address" name="email" />
                                    <FormHelperText  class="">
                                        Your company email
                                    </FormHelperText>
                                </FormControl>
                                <FormControl class="form-group">
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        minLength="6"
                                    />
                                </FormControl>
                                <FormControl class="">
                                    <Input
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="password2"
                                        minLength="6"
                                    />
                                </FormControl>
                                <Button
                                    style={{ marginTop: "50px" }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    href="#contained-buttons"
                                    label="Sign In"
                                    value="register"
                                >
                                    Log In
                  </Button>
                            </form>
                            <p class="">
                                Already have an account? <a href="login.html">Sign In</a>
                            </p>
                        </Paper>
                    </Container>
                </React.Fragment>
            );
            }
{/* export default Register; */ }