import React, { useEffect, useState } from 'react';

import useInput from '../../Hooks/useInput';
import './UpdateAccount.css';
import DropdownModel from '../../Models/DropdownModel';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Moment from 'moment';

export default function UpdateAccount() {
    let guardianTypes = [
        new DropdownModel("Natural guardians", 1),
        new DropdownModel("Testamentary guardians", 2),
        new DropdownModel("Guardians appointed or declared by the court", 3)
    ];
    let citizenships = [
        new DropdownModel("Indian", 1),
        new DropdownModel("Other", 2)
    ];
    let gender = [
        new DropdownModel("Male", 1),
        new DropdownModel("Female", 2)
    ];
    let maritalStatus = [
        new DropdownModel("Married", 1),
        new DropdownModel("unMarried", 2),
        new DropdownModel("Widowed", 3)
    ];
    let countries = [
        new DropdownModel("India", 1),
        new DropdownModel("USA", 2)
    ];
    let states = [
        new DropdownModel("Maharashtra", 1),
        new DropdownModel("Goa", 2),
        new DropdownModel("California", 3),
        new DropdownModel("Texas", 4)
    ];
    let accountTypes = [
        new DropdownModel("Salay", 1),
        new DropdownModel("Savings", 2)
    ];
    let idProofType = [
        new DropdownModel("Aadhar", 1),
        new DropdownModel("Pan", 2)
    ];

    //#region states
    const [guardianTypeState, setguardianType] = React.useState([]);
    const [selectedGuardianTypeState, setSelectedGuardianType] = React.useState(guardianTypes[0].value);

    const [enteredAccountNo, setAccountNo] = React.useState('');

    const [citizenshipTypeState, setCitizenshipType] = React.useState('');
    const [selectedCitizenshipState, setSelectedCitizenship] = React.useState(citizenships[0].value);
    const [citizenshipStatusState, setCitizenshipStatus] = React.useState('');

    const [genderTypeState, setGenderType] = React.useState('');
    const [selectedGenderState, setSelectedGender] = React.useState(gender[0].value);

    const [maritalStatusTypeState, setMaritalStatusType] = React.useState('');
    const [selectedMaritalStatusState, setSelectedMaritalStatus] = React.useState(maritalStatus[0].value);

    const [countryTypeState, setCountryType] = React.useState('');
    const [selectedCountryState, setSelectedCountry] = React.useState(countries[0].value);

    const [stateTypeState, setStateType] = React.useState('');
    const [selectedStateState, setSelectedState] = React.useState(states[0].value);

    const [accountTypeState, setAccountType] = React.useState('');
    const [selectedAccountTypeState, setSelectedAccountType] = React.useState(accountTypes[0].value);

    const [idProofTypeState, setIdProofType] = React.useState('');
    const [selectedIdProofTypeState, setSelectedIdProofType] = React.useState(idProofType[0].value);

    const [redirect, setRedirect] = React.useState(false);
    const [customerIdState, setCustomerId] = React.useState('');

    const [enteredDob, setEnteredDob] = React.useState(new Date());
    //#endregion

    //#region validation functions
    const isNotEmpty = value => value?.trim() !== '';
    const isNameValid = value => {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]+/;
        return value.trim() !== '' && !format.test(value);
    };
    const isContactNoValid = value => {
        var pattern = new RegExp(/^[0-9\b]+$/);
        return value.trim() !== '' && pattern.test(value) && (value.length == 10);
    };
    const isDepositValid = value => {
        var pattern = new RegExp(/^[0-9\b]+$/);
        return value.trim() !== '' && pattern.test(value);
    };
    const isEmailIdValid = value => {
        return value.trim() !== '' && (value.includes('@') && value.includes('.'));
    };
    const isPanValid = value => {
        if (selectedIdProofTypeState == '1') {
            var pattern = new RegExp(/^[0-9\b]+$/);
            return value.trim() !== '' && pattern.test(value) && !(value.length < 12);
        } else if (selectedIdProofTypeState == '2') {
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            return value.trim() !== '' && !format.test(value);
        }

        return value.trim() !== '' && (value.includes('@') && value.includes('.'));
    };
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
    //#endregion

    //#region useInput
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        setValueHandler: setEnteredName,
        reset: nameReset } = useInput(isNameValid);
    const [showCalendar, setShowCalendar] = useState(false);
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
        value: enteredRegistrationDate,
        isValid: registrationDateIsValid,
        hasError: registrationDateHasError,
        valueChangeHandler: registrationDateChangeHandler,
        inputBlurHandler: registrationDateBlurHandler,
        setValueHandler: setEnteredRegistrationDate,
        reset: registrationDateReset } = useInput(isNotEmpty);
    const {
        value: enteredBankName,
        isValid: bankNameIsValid,
        hasError: bankNameHasError,
        valueChangeHandler: bankNameChangeHandler,
        inputBlurHandler: bankNameBlurHandler,
        setValueHandler: setEnteredBankName,
        reset: bankNameReset } = useInput(isNotEmpty);
    const {
        value: enteredBranchName,
        isValid: branchNameIsValid,
        hasError: branchNameHasError,
        valueChangeHandler: branchNameChangeHandler,
        inputBlurHandler: branchNameBlurHandler,
        setValueHandler: setEnteredBranchName,
        reset: branchNameReset } = useInput(isNotEmpty);
    const {
        value: enteredIdDocNo,
        isValid: idDocNoIsValid,
        hasError: idDocNoHasError,
        valueChangeHandler: idDocNoChangeHandler,
        inputBlurHandler: idDocNoBlurHandler,
        setValueHandler: setEnteredIdDocNo,
        reset: idDocNoReset } = useInput(isNotEmpty);
    const {
        value: enteredReferenceName,
        isValid: referenceNameIsValid,
        hasError: referenceNameHasError,
        valueChangeHandler: referenceNameChangeHandler,
        inputBlurHandler: referenceNameBlurHandler,
        setValueHandler: setEnteredReferenceName,
        reset: referenceNameReset } = useInput(isNotEmpty);
    const {
        value: enteredReferenceAcc,
        isValid: referenceAccIsValid,
        hasError: referenceAccHasError,
        valueChangeHandler: referenceAccChangeHandler,
        inputBlurHandler: referenceAccBlurHandler,
        setValueHandler: setEnteredReferenceAcc,
        reset: referenceAccReset } = useInput(isNotEmpty);
    const {
        value: enteredReferenceAddress,
        isValid: referenceAddressIsValid,
        hasError: referenceAddressHasError,
        valueChangeHandler: referenceAddressChangeHandler,
        inputBlurHandler: referenceAddressBlurHandler,
        setValueHandler: setEnteredReferenceAddress,
        reset: referenceAddressReset } = useInput(isNotEmpty);
    const {
        value: enteredAddress,
        isValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        setValueHandler: setEnteredAddress,
        reset: addressReset } = useInput(isNotEmpty);
    const {
        value: enteredContactNo,
        isValid: contactNoIsValid,
        hasError: contactNoHasError,
        valueChangeHandler: contactNoChangeHandler,
        inputBlurHandler: contactNoBlurHandler,
        setValueHandler: setEnteredContactNo,
        reset: contactNoReset } = useInput(isNotEmpty);
    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        setValueHandler: setEnteredEmail,
        reset: emailReset } = useInput(isNotEmpty);
    const {
        value: guardianTypeName,
        isValid: guardianTypeNameIsValid,
        hasError: guardianTypeNameHasError,
        valueChangeHandler: guardianTypeNameChangeHandler,
        inputBlurHandler: guardianTypeNameBlurHandler,
        setValueHandler: setEnteredGuardianName,
        reset: guardianTypeNameReset } = useInput(isNotEmpty);

    //#endregion

    useEffect(() => {
        getGuardianTypes();
        getCountries();
        getState();
        getGender();
        getIdProofType();
        getMaritalStatus();
        getAccountType();
        getCitizenship();

        getUserDetails();
    }, []);

    //#region dropdown bind functions
    function getCountries() {
        let countriesList = countries.length > 0
            && countries.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setCountryType(countriesList);
    }

    function getState() {
        let statesList = states.length > 0
            && states.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setStateType(statesList);
    }

    function getGender() {
        let genderList = gender.length > 0
            && gender.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setGenderType(genderList);
    }

    function getIdProofType() {
        let idProofTypeList = idProofType.length > 0
            && idProofType.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setIdProofType(idProofTypeList);
    }

    function getMaritalStatus() {
        let maritalStatusList = maritalStatus.length > 0
            && maritalStatus.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setMaritalStatusType(maritalStatusList);
    }

    function getAccountType() {
        let accountTypesList = accountTypes.length > 0
            && accountTypes.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setAccountType(accountTypesList);
    }

    function getCitizenship() {
        let citizenshipsList = citizenships.length > 0
            && citizenships.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setCitizenshipType(citizenshipsList);
    }

    function getGuardianTypes() {
        let guardianTypesList = guardianTypes.length > 0
            && guardianTypes.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setguardianType(guardianTypesList);
    }
    //#endregion

    const getUserDetails = async () => {
        const response = await fetch("http://localhost:12296/api/Account/getDetails", {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const content = await response.json();
        setEnteredName(content.Name);
        setSelectedGuardianType(3);
        setEnteredGuardianName(content.GuardianName);
        setSelectedGender(content.Gender);
        setSelectedMaritalStatus(content.GenderMaritalStatus);
        setEnteredDob(content.Dob);

        setEnteredContactNo(content.ContactNo);
        setEnteredEmail(content.Email);

        setEnteredAddress(content.Address);
        setSelectedCitizenship(content.CitizenshipType);
        setSelectedCountry(content.Country);
        setSelectedState(content.State);

        setAccountNo(content.AccountId);
        setCustomerId(content.UserId);
        setSelectedAccountType(content.AccountType);
        setEnteredRegistrationDate(content.CreatedDate);
        setEnteredBankName(content.BankName);
        setEnteredBranchName(content.BranchName);
        setSelectedIdProofType(content.IdentityProofType);
        setEnteredIdDocNo(content.IdentityProofDocNo);
        setEnteredReferenceName(content.ReferanceName);
        setEnteredReferenceAcc(content.ReferenceAccountNo);
        setEnteredReferenceAddress(content.ReferenceAddress);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        let formIsValid = false;

        if (nameIsValid &&
            guardianTypeNameIsValid &&
            addressIsValid &&
            emailIsValid &&
            addressIsValid &&
            contactNoIsValid &&
            branchNameIsValid &&
            referenceNameIsValid &&
            referenceAccIsValid &&
            referenceAddressIsValid) {
            formIsValid = true;
        }

        if (formIsValid) {
            fetch("http://localhost:12296/api/Account", {
                method: 'POST',
                body: JSON.stringify({
                    "accountId": enteredAccountNo,
                    "userId": customerIdState,
                    "name": enteredName,
                    "guardianType": parseInt(selectedGuardianTypeState),
                    "guardianName": guardianTypeName,
                    "gender": parseInt(selectedGenderState),
                    "maritalStatus": parseInt(selectedMaritalStatusState ?? 1),
                    "dob": enteredDob,
                    "contactNo": enteredContactNo,
                    "email": enteredEmail,
                    "address": enteredAddress,
                    "citizenshipType": parseInt(selectedCitizenshipState),
                    "country": parseInt(selectedCountryState),
                    "state": parseInt(selectedStateState),
                    "accountType": parseInt(selectedAccountTypeState),
                    "branchName": enteredBranchName,
                    "bankName": enteredBankName,
                    "identityProofType": parseInt(selectedIdProofTypeState),
                    "identityProofDocNo": enteredIdDocNo,
                    "referanceName": enteredReferenceName,
                    "referenceAccountNo": enteredReferenceAcc,
                    "referenceAddress": enteredReferenceAddress,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                if(response.ok){
                    alert('Information updated successfully!');
                }else{
                    alert('Something went wrong, Please try later!');
                }
            });
        }
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='container mt4'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col md12 border-right">
                                <h6>Update Account</h6>
                                <hr />
                            </div>
                        </div>

                        <div className="row MarginTop">
                            <div className="col md12 border-right">
                                <h6>Personal Details</h6>
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Name"
                                        value={enteredName}
                                        onChange={nameChangeHandler}
                                        onBlur={nameBlurHandler}></input>
                                    {nameInputHasError && <p className="error-text">Name required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Gurdian Type</label>
                                    <select name="guardianType" className="form-control"
                                        onChange={e => setSelectedGuardianType(e.target.value)}>
                                        {guardianTypeState}
                                    </select>
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Gurdian Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Gurdian Name"
                                        value={guardianTypeName}
                                        onChange={guardianTypeNameChangeHandler}
                                        onBlur={guardianTypeNameBlurHandler}></input>
                                    {guardianTypeNameHasError && <p className="error-text">Guardian name required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Gender</label>
                                    <select name="genderType" className="form-control"
                                        onChange={e => setSelectedGender(e.target.value)}>
                                        {genderTypeState}
                                    </select>
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Marital Status</label>
                                    <select name="maritalStatusType" className="form-control"
                                        onChange={e => setSelectedMaritalStatus(e.target.value)}>
                                        {maritalStatusTypeState}
                                    </select>
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
                                    ></input>
                                    <Calendar
                                        value={''}
                                        onChange={dobChangeHandler}
                                        className={showCalendar ? "" : "hide"} />
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Citizen Status</label>
                                    <input type="text" value={citizenshipStatusState} readOnly={true} className="form-control" placeholder="Citizen Status"></input>
                                </div>
                            </div>
                        </div>

                        <div className="row MarginTop">
                            <div className="col md12 border-right">
                                <h6>Contact</h6>
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Contact No</label>
                                    <input type="text" className="form-control" placeholder="Enter Contact No"
                                        value={enteredContactNo}
                                        onChange={contactNoChangeHandler}
                                        onBlur={contactNoBlurHandler}></input>
                                    {contactNoHasError && <p className="error-text">Contact no required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Email Id</label>
                                    <input type="text" className="form-control" placeholder="Enter Email Id"
                                        value={enteredEmail}
                                        onChange={emailChangeHandler}
                                        onBlur={emailBlurHandler}></input>
                                    {emailHasError && <p className="error-text">Email required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row MarginTop">
                            <div className="col md12 border-right">
                                <h6>Address</h6>
                                <hr />
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
                                        onChange={e => setSelectedCitizenship(e.target.value)}>
                                        {citizenshipTypeState}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Country</label>
                                    <select name="CountryType" className="form-control"
                                        onChange={e => setSelectedCountry(e.target.value)}>
                                        {countryTypeState}
                                    </select>
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">State</label>
                                    <select name="stateType" className="form-control"
                                        onChange={e => setSelectedState(e.target.value)}>
                                        {stateTypeState}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row MarginTop">
                            <div className="col md12 border-right">
                                <h6>Account/Identification</h6>
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Account Number</label>
                                    <input type="text" readOnly={true} className="form-control" placeholder="Account Number"
                                        value={enteredAccountNo}></input>
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Customer Id</label>
                                    <input type="text" readOnly={true} className="form-control" placeholder="Customer Id"
                                        value={customerIdState}></input>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Account Type</label>
                                    <select name="maritalStatusType" className="form-control"
                                        onChange={e => setSelectedAccountType(e.target.value)}>
                                        {accountTypeState}
                                    </select>
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Registration Date</label>
                                    <input type="text" className="form-control" placeholder="Registration Date"
                                        value={enteredRegistrationDate.split('T')[0]} readOnly={true}></input>
                                    {registrationDateHasError && <p className="error-text">Registration date required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Bank Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Bank Name"
                                        value={enteredBankName}
                                        onChange={bankNameChangeHandler}
                                        onBlur={bankNameBlurHandler}></input>
                                    {bankNameHasError && <p className="error-text">Bank name required!</p>}
                                </div>
                            </div>
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
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Identification Proof Type</label>
                                    <select name="idProofType" className="form-control"
                                        onChange={e => setSelectedIdProofType(e.target.value)}>
                                        {idProofTypeState}
                                    </select>
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Identification Doc No</label>
                                    <input type="text" className="form-control" placeholder="Enter Identification Doc No"
                                        value={enteredIdDocNo}
                                        onChange={idDocNoChangeHandler}
                                        onBlur={idDocNoBlurHandler}></input>
                                    {idDocNoHasError && <p className="error-text">Id Doc no required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Reference: Account Holder Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Reference: Account Holder Name"
                                        value={enteredReferenceName}
                                        onChange={referenceNameChangeHandler}
                                        onBlur={referenceNameBlurHandler}></input>
                                    {referenceNameHasError && <p className="error-text">Reference name required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Reference: Account Holder Acc No.</label>
                                    <input type="text" className="form-control" placeholder="Enter Reference: Account Holder Acc No."
                                        value={enteredReferenceAcc}
                                        onChange={referenceAccChangeHandler}
                                        onBlur={referenceAccBlurHandler}></input>
                                    {referenceAccHasError && <p className="error-text">Reference account required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Reference: Account Holder Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Reference: Account Holder Address"
                                        value={enteredReferenceAddress}
                                        onChange={referenceAddressChangeHandler}
                                        onBlur={referenceAddressBlurHandler}></input>
                                    {referenceAddressHasError && <p className="error-text">Reference address required!</p>}
                                </div>
                            </div>
                            <div className="col md6 border-right">
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
                <div className="clearFooter"></div>
            </div>
        </form>
    )
}