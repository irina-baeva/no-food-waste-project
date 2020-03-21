import React, { useState } from 'react';
import { FormControl, Input, Container, Paper, Button, FormHelperText, ButtonBase } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {Link} from "react-router-dom"



const useStylesRegister = makeStyles({
    root: {
        flexGrow: 1,
        margin: "auto"
    },
    paper: {
        // marginTop: "50%",
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
    //useState hook
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',

    });
    //distracture data from formdata
    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = async e => {
        e.preventDefault();
        //check if password match
        if (password !== password2) {
            console.log("Passwords are not matching")
        } else {

            console.log('Success')
            //if we do not use  REDUX
            const newUser = {
                name,
                email,
                password
            }
            try{
                const config = {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                }
                const body = JSON.stringify(newUser)
                const res = await axios.post('http://localhost:5050/api/users', body, config)
                console.log(res.data)
            } catch(err){
                console.log(err.response.data)
            }
        }
    }

    return (
        <React.Fragment >
            <Container className={classes.root} maxWidth="sm">
                <h1 >Sign Up</h1>
                <p >
                    <FontAwesomeIcon icon={faUser} />  Create Your Account</p>
                <Paper className={classes.paper}>
                    <form className={classes.form} onSubmit={e => onSubmit(e)}>
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                                value={name}
                                onChange={e => onChange(e)}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={email}
                                onChange={e => onChange(e)}
                            />
                            <FormHelperText >
                                Your company email
                                    </FormHelperText>
                        </FormControl>
                        <FormControl >
                            <Input
                                type="password"
                                placeholder="Password"
                                name="password"
                                minLength="6"
                                value={password}
                                onChange={e => onChange(e)}
                            />
                        </FormControl>
                        <FormControl className="">
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                minLength="6"
                                value={password2}
                                onChange={e => onChange(e)}
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            style={{ marginTop: "50px" }}
                            color="primary"
                            type="submit"
                            label="Register"
                            value="Register"
                        > Register
                            </Button>
                    </form>
                    <p className="">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </Paper>
            </Container>
        </React.Fragment>
    );
}
{/* export default Register; */ }