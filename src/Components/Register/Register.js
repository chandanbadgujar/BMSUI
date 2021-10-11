import React, { useEffect, useState } from 'react';

import useInput from '../../Hooks/useInput';
import { useDispatch } from 'react-redux';
import './Register.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Moment from 'moment';
import { Redirect } from 'react-router-dom';

export default function Register() {
    const isNotEmpty = value => value.trim() !== '';
    const isNameValid = value => {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]+/;
        return value.trim() !== '' && !format.test(value);
    };
    const isContactNoValid = value => {
        var pattern = new RegExp(/^[0-9\b]+$/);
        return value.trim() !== '' && pattern.test(value) && !(value.length < 10);
    };
    const isDepositValid = value => {
        var pattern = new RegExp(/^[0-9\b]+$/);
        return value.trim() !== '' && pattern.test(value);
    };
    const isEmailIdValid = value => {
        return value.trim() !== '' && (value.includes('@') && value.includes('.'));
    };
    const isPanValid = value => {
        if (enteredIdProof == '1') {
            var pattern = new RegExp(/^[0-9\b]+$/);
            return value.trim() !== '' && pattern.test(value) && !(value.length < 12);
        } else if (enteredIdProof == '2') {
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            return value.trim() !== '' && !format.test(value);
        }

        return value.trim() !== '' && (value.includes('@') && value.includes('.'));
    };

    const dispatch = useDispatch();

    function calculateAge(dob) {
        var dob = new Date(dob);
        var month_diff = Date.now() - dob.getTime();

        var age_dt = new Date(month_diff);

        var year = age_dt.getUTCFullYear();

        var age = Math.abs(year - 1970);

        return age;
    }

    function setCitizenStatus(dob) {
        const age = calculateAge(dob);

        if (age < 18) {
            setCitizenshipStatus('Minor');
        } else if (age >= 18 && age <= 60) {
            setCitizenshipStatus('Normal');
        } else if (age > 60) {
            setCitizenshipStatus('Senior');
        }
    }

    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameReset } = useInput(isNameValid);
    const {
        value: enteredUsername,
        isValid: usernameIsValid,
        hasError: usernameInputHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: usernameReset } = useInput(isNotEmpty);
    const {
        value: enteredPassword,
        isValid: passwordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: pwdChangeHandler,
        inputBlurHandler: pwdBlurHandler,
        reset: pwdReset } = useInput(isNotEmpty);
    const {
        value: enteredGuardianType,
        isValid: guardianTypeIsValid,
        hasError: guardianTypeHasError,
        valueChangeHandler: guardianTypeChangeHandler,
        inputBlurHandler: guardianTypeBlurHandler,
        reset: guardianTypeReset } = useInput(isNotEmpty);
    const {
        value: enteredGuardianTypeName,
        isValid: guardianTypeNameIsValid,
        hasError: guardianTypeNameHasError,
        valueChangeHandler: guardianTypeNameChangeHandler,
        inputBlurHandler: guardianTypeNameBlurHandler,
        reset: guardianTypeNameReset } = useInput(isNotEmpty);
    const {
        value: enteredAddress,
        isValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: addressReset } = useInput(isNotEmpty);
    const {
        value: enteredCitizenshipType,
        isValid: citizenshipTypeIsValid,
        hasError: citizenshipTypeHasError,
        valueChangeHandler: citizenshipTypeChangeHandler,
        inputBlurHandler: citizenshipTypeBlurHandler,
        reset: citizenshipTypeReset } = useInput(isNotEmpty);
    const {
        value: enteredState,
        isValid: stateIsValid,
        hasError: stateHasError,
        valueChangeHandler: stateChangeHandler,
        inputBlurHandler: stateBlurHandler,
        reset: stateReset } = useInput(isNotEmpty);
    const {
        value: enteredCountry,
        isValid: countryIsValid,
        hasError: countryHasError,
        valueChangeHandler: countryChangeHandler,
        inputBlurHandler: countryBlurHandler,
        reset: countryReset } = useInput(isNotEmpty);
    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset } = useInput(isEmailIdValid);
    const {
        value: enteredGender,
        isValid: genderIsValid,
        hasError: genderHasError,
        valueChangeHandler: genderChangeHandler,
        inputBlurHandler: genderBlurHandler,
        reset: genderReset } = useInput(isNotEmpty);
    const {
        value: enteredMaritalStatus,
        isValid: maritalStatusIsValid,
        hasError: maritalStatusHasError,
        valueChangeHandler: maritalStatusChangeHandler,
        inputBlurHandler: maritalStatusBlurHandler,
        reset: maritalStatusReset } = useInput(isNotEmpty);
    const {
        value: enteredContactNo,
        isValid: contactNoIsValid,
        hasError: contactNoHasError,
        valueChangeHandler: contactNoChangeHandler,
        inputBlurHandler: contactNoBlurHandler,
        reset: contactNoReset } = useInput(isContactNoValid);

    const [showCalendar, setShowCalendar] = useState(false);
    // const {
    //     value: enteredDob = new Date(),
    //     isValid: dobIsValid,
    //     hasError: dobHasError,
    //     valueChangeHandler: dobChangeHandler,
    //     inputBlurHandler: dobBlurHandler,
    //     reset: dobReset } = useInput(isNotEmpty);
    const dobChangeHandler = (value) => {
        setEnteredDob(value);
        dobHasError();
        setCitizenStatus(value)
        setShowCalendar(false);
    }
    const dobHasError = () => {
        return enteredDob !== undefined;
    }
    const {
        value: enteredAccountType,
        isValid: accountTypeIsValid,
        hasError: accountTypeHasError,
        valueChangeHandler: accountTypeChangeHandler,
        inputBlurHandler: accountTypeBlurHandler,
        reset: accountTypeReset } = useInput(isNotEmpty);
    const {
        value: enteredBranchName,
        isValid: branchNameIsValid,
        hasError: branchNameHasError,
        valueChangeHandler: branchNameChangeHandler,
        inputBlurHandler: branchNameBlurHandler,
        reset: branchNameReset } = useInput(isNotEmpty);
    const {
        value: enteredDepositAmt,
        isValid: depositAmtIsValid,
        hasError: depositAmtHasError,
        valueChangeHandler: depositAmtChangeHandler,
        inputBlurHandler: depositAmtBlurHandler,
        reset: depositAmtReset } = useInput(isDepositValid);
    const {
        value: enteredIdProof,
        isValid: idProofIsValid,
        hasError: idProofHasError,
        valueChangeHandler: idProofChangeHandler,
        inputBlurHandler: idProofBlurHandler,
        reset: idProofReset } = useInput(isNotEmpty);
    const {
        value: enteredIdDocNo,
        isValid: idDocNoIsValid,
        hasError: idDocNoHasError,
        valueChangeHandler: idDocNoChangeHandler,
        inputBlurHandler: idDocNoBlurHandler,
        reset: idDocNoReset } = useInput(isPanValid);
    const {
        value: enteredReferenceName,
        isValid: referenceNameIsValid,
        hasError: referenceNameHasError,
        valueChangeHandler: referenceNameChangeHandler,
        inputBlurHandler: referenceNameBlurHandler,
        reset: referenceNameReset } = useInput(isNameValid);
    const {
        value: enteredReferenceAcc,
        isValid: referenceAccIsValid,
        hasError: referenceAccHasError,
        valueChangeHandler: referenceAccChangeHandler,
        inputBlurHandler: referenceAccBlurHandler,
        reset: referenceAccReset } = useInput(isNotEmpty);
    const {
        value: enteredReferenceAddress,
        isValid: referenceAddressIsValid,
        hasError: referenceAddressHasError,
        valueChangeHandler: referenceAddressChangeHandler,
        inputBlurHandler: referenceAddressBlurHandler,
        reset: referenceAddressReset } = useInput(isNotEmpty);

    const [redirect, setRedirect] = React.useState(false);

    const [enteredDob, setEnteredDob] = React.useState(new Date());
    const [guardianTypeState, setguardianType] = React.useState('');
    // const [selectedGuardianTypeState, setSelectedguardianType] = React.useState('');

    const [citizenshipTypeState, setCitizenshipType] = React.useState('');
    //const [selectedCitizenshipState, setSelectedCitizenship] = React.useState('');
    const [citizenshipStatusState, setCitizenshipStatus] = React.useState('');

    const [stateTypeState, setStateType] = React.useState('');
    //const [selectedStateState, setSelectedState] = React.useState('');

    const [countryTypeState, setCountryType] = React.useState('');
    //const [selectedCountryState, setSelectedCountry] = React.useState('');

    const [genderTypeState, setGenderType] = React.useState('');
    //const [selectedGenderState, setSelectedGender] = React.useState('');

    const [maritalStatusTypeState, setMaritalStatusType] = React.useState('');
    //const [selectedMaritalStatusState, setSelectedMaritalStatus] = React.useState('');

    const [accountTypeState, setAccountType] = React.useState('');
    //const [selectedAccountTypeState, setSelectedAccountType] = React.useState('');

    const [idProofTypeState, setIdProofType] = React.useState('');
    //const [selectedIdProofTypeState, setSelectedIdProofType] = React.useState('');

    useEffect(() => {
        getGuardianTypes();
        getCitizenship();
        getState();
        getCountries();
        getGender();
        getMaritalStatus();
        getAccountType();
        getIdProofType();
    }, []);

    function getGuardianTypes() {
        const guardianTypes = [
            { label: "Natural guardians", value: 1 },
            { label: "Testamentary guardians", value: 2 },
            { label: "Guardians appointed or declared by the court", value: 3 }
        ];

        let guardianTypesList = guardianTypes.length > 0
            && guardianTypes.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setguardianType(guardianTypesList);
    }

    function getCitizenship() {
        const citizenships = [
            { label: "Indian", value: 1 },
            { label: "Other", value: 2 }
        ];

        let citizenshipsList = citizenships.length > 0
            && citizenships.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setCitizenshipType(citizenshipsList);
    }

    function getState() {
        const states = [
            { label: "Maharashtra", value: 1 },
            { label: "Goa", value: 2 }
        ];

        let statesList = states.length > 0
            && states.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setStateType(statesList);
    }

    function getCountries() {
        const countries = [
            { label: "India", value: 1 },
            { label: "USA", value: 2 }
        ];

        let countriesList = countries.length > 0
            && countries.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setCountryType(countriesList);
    }

    function getGender() {
        const gender = [
            { label: "Male", value: 1 },
            { label: "Female", value: 2 }
        ];

        let genderList = gender.length > 0
            && gender.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setGenderType(genderList);
    }

    function getMaritalStatus() {
        const maritalStatus = [
            { label: "Married", value: 1 },
            { label: "unMarried", value: 2 },
            { label: "Widowed", value: 2 }
        ];

        let maritalStatusList = maritalStatus.length > 0
            && maritalStatus.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setMaritalStatusType(maritalStatusList);
    }

    function getAccountType() {
        const accountTypes = [
            { label: "Salay", value: 1 },
            { label: "Savings", value: 2 }
        ];

        let accountTypesList = accountTypes.length > 0
            && accountTypes.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setAccountType(accountTypesList);
    }

    function getIdProofType() {
        const idProofType = [
            { label: "Aadhar", value: 1 },
            { label: "Pan", value: 2 }
        ];

        let idProofTypeList = idProofType.length > 0
            && idProofType.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setIdProofType(idProofTypeList);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        let formIsValid = false;

        if (nameIsValid &&
            usernameIsValid &&
            passwordIsValid &&
            guardianTypeNameIsValid &&
            addressIsValid &&
            emailIsValid &&
            contactNoIsValid &&
            branchNameIsValid &&
            depositAmtIsValid &&
            //idDocNoIsValid &&
            referenceNameIsValid &&
            referenceAccIsValid &&
            referenceAddressIsValid) {
            formIsValid = true;
        }

        if (formIsValid) {
            fetch("http://localhost:12296/api/User/register", {
                method: 'POST',
                body: JSON.stringify({
                    "username": enteredUsername,
                    "password": enteredPassword,
                    "name": enteredName,
                    "guardianName": enteredGuardianTypeName,
                    "guardianType": parseInt(enteredGuardianType),
                    "address": enteredAddress,
                    "citizenshipType": parseInt(enteredCitizenshipType),
                    "country": parseInt(enteredCountry),
                    "state": parseInt(enteredState),
                    "email": enteredEmail,
                    "gender": parseInt(enteredGender),
                    "maritalStatus": parseInt(enteredMaritalStatus),
                    "contactNo": enteredContactNo,
                    "dob": enteredDob,
                    "initialDeposit": parseInt(enteredDepositAmt),
                    "accountType": parseInt(enteredAccountType)
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => { 
                setRedirect(true);
            });
        }

        //TODO: POST using react-redux
    };
    if(redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='container mt4'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col md12 border-right">
                                <h6>Customer Registration</h6>
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Name</label>
                                    <input type="text" className="form-control" placeholder="Enter customer name"
                                        value={enteredName}
                                        onChange={nameChangeHandler}
                                        onBlur={nameBlurHandler}></input>
                                    {nameInputHasError && <p className="error-text">Name is required! Special characters and numbers not allowed!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Username</label>
                                    <input type="text" className="form-control" placeholder="Enter Username"
                                        value={enteredUsername}
                                        onChange={usernameChangeHandler}
                                        onBlur={usernameBlurHandler}></input>
                                    {usernameInputHasError && <p className="error-text">Username required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Password</label>
                                    <input type="text" className="form-control" placeholder="Enter Password"
                                        value={enteredPassword}
                                        onChange={pwdChangeHandler}
                                        onBlur={pwdBlurHandler}></input>
                                    {passwordInputHasError && <p className="error-text">Password required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Gurdian Type</label>
                                    <select name="guardianType" className="form-control"
                                        //onChange={e => setSelectedguardianType(e.target.value)}
                                        value={enteredGuardianType}
                                        onChange={guardianTypeChangeHandler}
                                        onBlur={guardianTypeBlurHandler}>
                                        {guardianTypeState}
                                    </select>
                                    {/* {guardianTypeHasError && <p className="error-text">Guardian type required!</p>} */}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Gurdian Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Gurdian Name"
                                        value={enteredGuardianTypeName}
                                        onChange={guardianTypeNameChangeHandler}
                                        onBlur={guardianTypeNameBlurHandler}></input>
                                    {guardianTypeNameHasError && <p className="error-text">Guardian name required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Address"
                                        value={enteredAddress}
                                        onChange={addressChangeHandler}
                                        onBlur={addressBlurHandler}></input>
                                    {addressHasError && <p className="error-text">Address required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Citizenship</label>
                                    <select name="citizenshipType" className="form-control"
                                        //onChange={e => setSelectedCitizenship(e.target.value)}
                                        value={enteredCitizenshipType}
                                        onChange={citizenshipTypeChangeHandler}
                                        onBlur={citizenshipTypeBlurHandler}>
                                        {citizenshipTypeState}
                                    </select>
                                    {/* {citizenshipTypeHasError && <p className="error-text">Citizenship type required!</p>} */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Country</label>
                                    <select name="stateType" className="form-control"
                                        //onChange={e => setSelectedCountry(e.target.value)}
                                        value={enteredCountry}
                                        onChange={countryChangeHandler}
                                        onBlur={countryBlurHandler}>
                                        {countryTypeState}
                                    </select>
                                    {/* {countryHasError && <p className="error-text">Country required!</p>} */}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">State</label>
                                    <select name="stateType" className="form-control"
                                        //onChange={e => setSelectedState(e.target.value)}
                                        value={enteredState}
                                        onChange={stateChangeHandler}
                                        onBlur={stateBlurHandler}>
                                        {stateTypeState}
                                    </select>
                                    {/* {stateHasError && <p className="error-text">State required!</p>} */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Email Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Email Address"
                                        value={enteredEmail}
                                        onChange={emailChangeHandler}
                                        onBlur={emailBlurHandler}></input>
                                    {emailHasError && <p className="error-text">Email required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Gender</label>
                                    <select name="genderType" className="form-control"
                                        //onChange={e => setSelectedGender(e.target.value)}
                                        value={enteredGender}
                                        onChange={genderChangeHandler}
                                        onBlur={genderBlurHandler}>
                                        {genderTypeState}
                                    </select>
                                    {/* {genderHasError && <p className="error-text">Gender required!</p>} */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Marital Status</label>
                                    <select name="maritalStatusType" className="form-control"
                                        //onChange={e => setSelectedMaritalStatus(e.target.value)}
                                        value={enteredMaritalStatus}
                                        onChange={maritalStatusChangeHandler}
                                        onBlur={maritalStatusBlurHandler}>
                                        {maritalStatusTypeState}
                                    </select>
                                    {/* {maritalStatusHasError && <p className="error-text">Marital Status required!</p>} */}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Contact No.</label>
                                    <input type="text" className="form-control" placeholder="Enter Contact No."
                                        value={enteredContactNo}
                                        onChange={contactNoChangeHandler}
                                        onBlur={contactNoBlurHandler}></input>
                                    {contactNoHasError && <p className="error-text">Contact no required! Only 10 digit no is allowed!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">DOB</label>
                                    <input type="text" className="form-control" placeholder="Enter DOB"
                                        value={Moment(enteredDob).format('DD/MM/YYYY')}
                                        onFocus={() => setShowCalendar(true)}
                                        readOnly
                                    // onBlur={dobBlurHandler}
                                    ></input>
                                    <Calendar
                                        value={''}
                                        onChange={dobChangeHandler}
                                        className={showCalendar ? "" : "hide"}
                                    //onBlur={dobBlurHandler} 
                                    />
                                    {/* {dobHasError && <p className="error-text">DOB required!</p>} */}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Account Type</label>
                                    <select name="maritalStatusType" className="form-control"
                                        //onChange={e => setSelectedAccountType(e.target.value)}
                                        value={enteredAccountType}
                                        onChange={accountTypeChangeHandler}
                                        onBlur={accountTypeBlurHandler}>
                                        {accountTypeState}
                                    </select>
                                    {/* {accountTypeHasError && <p className="error-text">Account type required!</p>} */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Branch Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Branch Name"
                                        value={enteredBranchName}
                                        onChange={branchNameChangeHandler}
                                        onBlur={branchNameBlurHandler}></input>
                                    {branchNameHasError && <p className="error-text">Branch name required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Citizen Status</label>
                                    <input type="text" value={citizenshipStatusState} readOnly={true} className="form-control" placeholder="Enter Citizen Status"></input>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Initial Deposit Amount</label>
                                    <input type="text" className="form-control" placeholder="Enter Initial Deposit Amount"
                                        value={enteredDepositAmt}
                                        onChange={depositAmtChangeHandler}
                                        onBlur={depositAmtBlurHandler}></input>
                                    {depositAmtHasError && <p className="error-text">Deposit amount required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Identification Proof Type</label>
                                    <select name="idProofType" className="form-control"
                                        //onChange={e => setSelectedIdProofType(e.target.value)}
                                        value={enteredIdProof}
                                        onChange={idProofChangeHandler}
                                        onBlur={idProofBlurHandler}>
                                        {idProofTypeState}
                                    </select>
                                    {/* {idProofHasError && <p className="error-text">Id proof required!</p>} */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Identification Document No.</label>
                                    <input type="text" className="form-control" placeholder="Enter Identification Document No."
                                        value={enteredIdDocNo}
                                        onChange={idDocNoChangeHandler}
                                        onBlur={idDocNoBlurHandler}></input>
                                    {idDocNoHasError && <p className="error-text">Id Doc no required! Aadhar 12 digits and PAN alphnumeric allowed!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Reference Account Holder Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Reference Account Holder Name"
                                        value={enteredReferenceName}
                                        onChange={referenceNameChangeHandler}
                                        onBlur={referenceNameBlurHandler}></input>
                                    {referenceNameHasError && <p className="error-text">Reference name required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Reference Account Holder acc. No.</label>
                                    <input type="text" className="form-control" placeholder="Enter Reference Account Holder acc. No."
                                        value={enteredReferenceAcc}
                                        onChange={referenceAccChangeHandler}
                                        onBlur={referenceAccBlurHandler}></input>
                                    {referenceAccHasError && <p className="error-text">Reference account required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Reference Account Holder Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Reference Account Holder Address"
                                        value={enteredReferenceAddress}
                                        onChange={referenceAddressChangeHandler}
                                        onBlur={referenceAddressBlurHandler}></input>
                                    {referenceAddressHasError && <p className="error-text">Reference address required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row MarginTop">
                            <div className="col md6 border-right">
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <button className="btn btn-outline-primary shadow w-100">Save</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="clearFooter"></div>
        </form>
    )
}