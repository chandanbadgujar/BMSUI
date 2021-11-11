import React, { Component, useEffect } from 'react';

import useInput from '../../Hooks/useInput';
import './Login.css';
import { useHistory, Redirect } from "react-router-dom";

export default function Login() {
    const [redirect, setRedirect] = React.useState(false);
    const isNotEmpty = value => value.trim() !== '';
    const history = useHistory();

    const routeChange = () => {
        let path = `home`;
        //history.push(path);
        window.location.href = '/';
    }

    const {
        value: enteredUsername,
        isValid: enteredUsernameIsValid,
        hasError: usernameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: usernameReset } = useInput(isNotEmpty);

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: pwdChangeHandler,
        inputBlurHandler: pwdBlurHandler,
        reset: pwdReset } = useInput(isNotEmpty);

    //const [enteredUsername, setEnteredUsername] = React.useState('');
    //const [enteredPassword, setEnteredPassword] = React.useState('');

    //const enteredUsernameIsValid = enteredUsername.trim() !== '';
    //const enteredPasswordIsValid = enteredPassword.trim() !== '';

    let formIsValid = false;

    if (enteredUsernameIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = async (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        let res = await fetch("http://localhost:12296/api/Auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                "username": enteredUsername,
                "password": enteredPassword
            }),
        }).then((response) => {
            if(response.ok){
                setRedirect(true);
            }else{
                alert('user not found or incorrect credentials!');
            }
            //let response = await res.json();
        });

    };

    if (redirect) {
        return <Redirect to="/" />;
    } 
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='container mt4'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col md12 border-right">
                                <h6>Login</h6>
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md3 border-right"></div>

                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Username</label>
                                    <input type="text" className="form-control" placeholder="Enter Username"
                                        onChange={nameChangeHandler}
                                        onBlur={nameBlurHandler}
                                        value={enteredUsername}></input>
                                    {usernameInputHasError &&
                                        <p className="error-text">Username required!</p>}
                                    <label className="mb-1">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Password"
                                        onChange={pwdChangeHandler}
                                        onBlur={pwdBlurHandler}
                                        value={enteredPassword}></input>
                                    {passwordInputHasError &&
                                        <p className="error-text">Passowrd required!</p>}
                                </div>
                            </div>

                            <div className="col md3 border-right"></div>
                        </div>

                        <div className="row MarginTop">
                            <div className="col md8 border-right"></div>

                            <div className="col md2 border-right">
                                <div className="form-group">
                                    <button disabled={!formIsValid} className="btn btn-outline-primary shadow w-100">Login</button>
                                </div>
                                {/* <div className="form-group">
                                    <button onClick={routeChange} className="btn btn-outline-primary shadow w-100">Redirect to Home</button>
                                </div> */}
                            </div>

                            <div className="col md2 border-right"></div>
                        </div>
                    </div>
                </div>
            </div>

        </form >
    )
}
