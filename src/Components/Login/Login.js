import React, { Component, useEffect } from 'react';

import useInput from '../../Hooks/useInput';

export default function Login() {
    const isNotEmpty = value => value.trim() !== '';

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

    // const usernameClasses = usernameInputHasError ? 'form-control invalid' : 'form-control';
    // const passwordClasses = passwordInputHasError ? 'form-control invalid' : 'form-control';

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(enteredUsername);
        console.log(enteredPassword);

        usernameReset();
        pwdReset();
    };

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
                                    <input type="text" className="form-control" placeholder="Enter Password"
                                        onChange={pwdChangeHandler}
                                        onBlur={pwdBlurHandler}
                                        value={enteredPassword}></input>
                                    {passwordInputHasError &&
                                        <p className="error-text">Passowrd required!</p>}
                                </div>
                            </div>

                            <div className="col md3 border-right"></div>
                        </div>

                        <div className="row" style={{ marginTop: 20 }}>
                            <div className="col md8 border-right"></div>

                            <div className="col md2 border-right">
                                <div className="form-group">
                                    <button disabled={!formIsValid} className="btn btn-primary shadow w-100">Login</button>
                                </div>
                            </div>

                            <div className="col md2 border-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    )
}
