import React, { useEffect } from 'react';
import Moment from 'moment';
import Calendar from 'react-calendar';

import useInput from '../../Hooks/useInput';
import DropdownModel from '../../Models/DropdownModel';
import './ApplyLoan.css';

export default function ApplyLoan() {
    let loanType = [
        new DropdownModel("Personal", 1),
        new DropdownModel("Home", 2),
        new DropdownModel("Education", 3)
    ];
    let loanDuration = [
        new DropdownModel("5", 1),
        new DropdownModel("10", 2),
        new DropdownModel("15", 3),
        new DropdownModel("20", 4)
    ];

    const [loanTypeState, setLoanType] = React.useState('');
    const [selectedLoanTypeState, setSelectedLoanType] = React.useState(loanType[0].value);
    const [toggleFormState, setToggleForm] = React.useState(false);

    const [showCalendar, setShowCalendar] = React.useState(false);
    const [showIssueDate, setShowIssueDate] = React.useState(false);
    const [enteredApplyDate, setEnteredApplyDate] = React.useState(new Date());
    const [enteredIssueDate, setEnteredIssueDate] = React.useState(new Date());

    const [loanDurationState, setLoanDuration] = React.useState([]);
    const [selectedLoanDurationState, setSelectedLoanDuration] = React.useState(loanDuration[0].value);
    
    const [enteredInterestRate, setInterestRate] = React.useState(loanDuration[0].value);

    const isNotEmpty = value => value?.trim() !== '';

    function loanTypeChangeHandler(value) {
        setSelectedLoanType(value);
        if (value === '1'
            || value === '2') {
            setToggleForm(false);
            setInterestRate(7);
        } else if (value === '3') {
            setToggleForm(true);
            setInterestRate(5);
        }
    }

    const loanApplyDateChangeHandler = (value) => {
        setEnteredApplyDate(value);
        dateHasError(value);
        setShowCalendar(false);
    }
    const issueDateChangeHandler = (value) => {
        setEnteredIssueDate(value);
        dateHasError(value);
        setShowIssueDate(false);
    }
    const dateHasError = (value) => {
        return value !== undefined;
    }
    const isAmountValid = value => {
        var pattern = new RegExp(/^[1-9\b]+$/);
        return value.trim() !== '' && pattern.test(value);
    };
    //#region useInput
    const {
        value: enteredLoanAmt,
        isValid: loanAmtIsValid,
        hasError: loanAmtInputHasError,
        valueChangeHandler: loanAmtChangeHandler,
        inputBlurHandler: loanAmtBlurHandler,
        setValueHandler: setLoanAmt,
        reset: loanAmtReset } = useInput(isAmountValid);
    // const {
    //     value: enteredInterestRate,
    //     isValid: interestRateIsValid,
    //     hasError: interestRateInputHasError,
    //     valueChangeHandler: interestRateChangeHandler,
    //     inputBlurHandler: interestRateBlurHandler,
    //     setValueHandler: setInterestRate,
    //     reset: interestRateReset } = useInput(isNotEmpty);
    const {
        value: enteredCourseFee,
        isValid: courseFeeIsValid,
        hasError: courseFeeInputHasError,
        valueChangeHandler: courseFeeChangeHandler,
        inputBlurHandler: courseFeeBlurHandler,
        setValueHandler: setCourseFee,
        reset: courseFeeReset } = useInput(isAmountValid);
    const {
        value: enteredCourse,
        isValid: courseIsValid,
        hasError: courseInputHasError,
        valueChangeHandler: courseChangeHandler,
        inputBlurHandler: courseBlurHandler,
        setValueHandler: setCourse,
        reset: courseReset } = useInput(isNotEmpty);
    const {
        value: enteredFatherName,
        isValid: fatherNameIsValid,
        hasError: fatherNameInputHasError,
        valueChangeHandler: fatherNameChangeHandler,
        inputBlurHandler: fatherNameBlurHandler,
        setValueHandler: setFatherName,
        reset: fatherNameReset } = useInput(isNotEmpty);
    const {
        value: enteredFatherOccupation,
        isValid: fatherOccupationIsValid,
        hasError: fatherOccupationInputHasError,
        valueChangeHandler: fatherOccupationChangeHandler,
        inputBlurHandler: fatherOccupationBlurHandler,
        setValueHandler: setFatherOccupation,
        reset: fatherOccupationReset } = useInput(isNotEmpty);
    const {
        value: enteredFatherTotExp,
        isValid: fatherTotExpIsValid,
        hasError: fatherTotExpInputHasError,
        valueChangeHandler: fatherTotExpChangeHandler,
        inputBlurHandler: fatherTotExpBlurHandler,
        setValueHandler: setFatherTotExp,
        reset: fatherTotExpReset } = useInput(isAmountValid);
    const {
        value: enteredFatherComExp,
        isValid: fatherComExpIsValid,
        hasError: fatherComExpInputHasError,
        valueChangeHandler: fatherComExpChangeHandler,
        inputBlurHandler: fatherComExpBlurHandler,
        setValueHandler: setFatherComExp,
        reset: fatherComExpReset } = useInput(isAmountValid);
    const {
        value: enteredRationCardNo,
        isValid: rationCardNoIsValid,
        hasError: rationCardNoInputHasError,
        valueChangeHandler: rationCardNoChangeHandler,
        inputBlurHandler: rationCardNoBlurHandler,
        setValueHandler: setRationCardNo,
        reset: rationCardNoReset } = useInput(isNotEmpty);
    const {
        value: enteredFatherAnnIncome,
        isValid: fatherAnnIncomeIsValid,
        hasError: fatherAnnIncomeInputHasError,
        valueChangeHandler: fatherAnnIncomeChangeHandler,
        inputBlurHandler: fatherAnnIncomeBlurHandler,
        setValueHandler: setFatherAnnualIncome,
        reset: fatherAnnIncomeReset } = useInput(isAmountValid);
    const {
        value: enteredAnnIncome,
        isValid: annIncomeIsValid,
        hasError: annIncomeInputHasError,
        valueChangeHandler: annIncomeChangeHandler,
        inputBlurHandler: annIncomeBlurHandler,
        setValueHandler: setAnnualIncome,
        reset: annIncomeReset } = useInput(isAmountValid);
    const {
        value: enteredCompanyName,
        isValid: companyNameIsValid,
        hasError: companyNameInputHasError,
        valueChangeHandler: companyNameChangeHandler,
        inputBlurHandler: companyNameBlurHandler,
        setValueHandler: setCompanyName,
        reset: companyNameReset } = useInput(isNotEmpty);
    const {
        value: enteredDesignation,
        isValid: designationIsValid,
        hasError: designationInputHasError,
        valueChangeHandler: designationChangeHandler,
        inputBlurHandler: designationBlurHandler,
        setValueHandler: setDesignation,
        reset: designationReset } = useInput(isNotEmpty);
    const {
        value: enteredTotExp,
        isValid: totExpIsValid,
        hasError: totExpInputHasError,
        valueChangeHandler: totExpChangeHandler,
        inputBlurHandler: totExpBlurHandler,
        setValueHandler: setTotExp,
        reset: totExpReset } = useInput(isAmountValid);
    const {
        value: enteredCompanyExp,
        isValid: companyExpIsValid,
        hasError: companyExpInputHasError,
        valueChangeHandler: companyExpChangeHandler,
        inputBlurHandler: companyExpBlurHandler,
        setValueHandler: setCompanyExp,
        reset: companyExpReset } = useInput(isAmountValid);
    //#endregion

    useEffect(() => {
        getLoanType();
        getLoanDuration();
        setInterestRate(7);
        //getLoanDetails();
    }, []);

    function getLoanType() {
        let loanTypeList = loanType.length > 0
            && loanType.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setLoanType(loanTypeList);
    }

    function getLoanDuration() {
        let loanDurationTypeList = loanDuration.length > 0
            && loanDuration.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setLoanDuration(loanDurationTypeList);
    }

    const formSubmissionHandler = async (event) => {
        event.preventDefault();

        let formIsValid = false;

        if (true) {
            formIsValid = true;
        }

        if (formIsValid) {
            let result = await fetch("http://localhost:12296/api/Loan", {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    "LoanId": 1,
                    "LoanType": parseInt(selectedLoanTypeState),
                    "LoanAmount": parseInt(enteredLoanAmt),
                    "LoanApplyDate": enteredApplyDate,
                    "LoanIssueDate": enteredIssueDate,
                    "Duration": parseInt(selectedLoanDurationState),
                    "Course": enteredCourse,
                    "CourseFee": parseInt(enteredCourseFee),
                    "FatherName": enteredFatherName,
                    "FatherOccupation": enteredFatherOccupation,
                    "FatherTotalExp": parseInt(enteredFatherTotExp),
                    "FatherExpInCurrentComp": parseInt(enteredFatherComExp),
                    "RationCardNo": enteredRationCardNo,
                    "AnnualIncome": parseInt(enteredAnnIncome),
                    "CompanyName": enteredCompanyName,
                    "Designation": enteredDesignation,
                    "TotalExp": parseInt(enteredTotExp),
                    "ExpInCurrentComp": parseInt(enteredCompanyExp)
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // .then(() => {
            //     //autoLoginUser();
            // });

            result = await result.json();

            alert('Loan applied successfully!');
        }
    };

    const getLoanDetails = async () => {
        let res = await fetch("http://localhost:12296/api/Loan/GetLoanDetail", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        
        res = await res.json();
        setSelectedLoanType(res.LoanType);
        setLoanAmt(res.LoanAmount);
        // setEnteredApplyDate(res.LoanApplyDate);
        // setEnteredIssueDate(res.LoanIssueDate);
        // setLoanDuration(res.Duration);
        // setAnnualIncome(res.AnnualIncome);
        // setCompanyName(res.CompanyName);
        // setDesignation(res.Designation);
        // setTotExp(res.TotalExp);
        // setCompanyExp(res.ExpInCurrentComp);
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='container mt4'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col md12 border-right">
                                <h6>Apply Loan</h6>
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Loan Type</label>
                                    <select name="loanType" className="form-control"
                                        //onChange={e => setSelectedLoanType(e.target.value)}
                                        onChange={e => loanTypeChangeHandler(e.target.value)}
                                    >
                                        {loanTypeState}
                                    </select>
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Loan Amount</label>
                                    <input type="text" className="form-control" placeholder="Enter Loan Amount"
                                        value={enteredLoanAmt}
                                        onChange={loanAmtChangeHandler}
                                        onBlur={loanAmtBlurHandler}></input>
                                    {loanAmtInputHasError && <p className="error-text">Loan Amount required!</p>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Loan Apply Date</label>
                                    <input type="text" className="form-control" placeholder="Enter DOB"
                                        value={Moment(enteredApplyDate).format('DD/MM/YYYY')}
                                        onFocus={() => setShowCalendar(true)}
                                        readOnly
                                    ></input>
                                    <Calendar
                                        value={''}
                                        onChange={loanApplyDateChangeHandler}
                                        className={showCalendar ? "" : "hide"} />
                                    {/* <input type="text" className="form-control" placeholder="Enter Loan Apply Date"
                                        value={enteredApplyDate}
                                        onChange={applyDateChangeHandler}
                                        onBlur={applyDateBlurHandler}></input>
                                    {applyDateInputHasError && <p className="error-text">Loan apply date required!</p>} */}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Loan Issue Date</label>
                                    <input type="text" className="form-control" placeholder="Enter DOB"
                                        value={Moment(enteredIssueDate).format('DD/MM/YYYY')}
                                        onFocus={() => setShowIssueDate(true)}
                                        readOnly
                                    ></input>
                                    <Calendar
                                        value={''}
                                        onChange={issueDateChangeHandler}
                                        className={showIssueDate ? "" : "hide"} />
                                    {/* <input type="text" className="form-control" placeholder="Enter Loan Issue Date"
                                        value={enteredIssueDate}
                                        onChange={issueDateChangeHandler}
                                        onBlur={issueDateBlurHandler}></input>
                                    {issueDateInputHasError && <p className="error-text">Loan issue date required!</p>} */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Rate of Interest</label>
                                    <input type="text" className="form-control" placeholder="Rate of Interest"
                                        readOnly={true}
                                        value={enteredInterestRate}
                                        //onChange={interestRateChangeHandler}
                                        //onBlur={interestRateBlurHandler}
                                        ></input>
                                    {/* {interestRateInputHasError && <p className="error-text">Interest rate required!</p>} */}
                                </div>
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group">
                                    <label className="mb-1">Duration of the Loan</label>
                                    <select name="loanDuration" className="form-control"
                                        onChange={e => setSelectedLoanDuration(e.target.value)}>
                                        {loanDurationState}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: toggleFormState ? 'block' : 'none' }}>
                            <div className="row">
                                <div className="col md12 border-right">
                                    <h6> Education Loan </h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Course Fee</label>
                                        <input type="text" className="form-control" placeholder="Enter Course Fee"
                                            value={enteredCourseFee}
                                            onChange={courseFeeChangeHandler}
                                            onBlur={courseFeeBlurHandler}></input>
                                        {courseFeeInputHasError && <p className="error-text">Course Fee required!</p>}
                                    </div>
                                </div>
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Course</label>
                                        <input type="text" className="form-control" placeholder="Enter Course"
                                            value={enteredCourse}
                                            onChange={courseChangeHandler}
                                            onBlur={courseBlurHandler}></input>
                                        {courseInputHasError && <p className="error-text">Course required!</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Father Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Father Name"
                                            value={enteredFatherName}
                                            onChange={fatherNameChangeHandler}
                                            onBlur={fatherNameBlurHandler}></input>
                                        {fatherNameInputHasError && <p className="error-text">Father name required!</p>}
                                    </div>
                                </div>
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Father Occupation</label>
                                        <input type="text" className="form-control" placeholder="Enter Father Occupation"
                                            value={enteredFatherOccupation}
                                            onChange={fatherOccupationChangeHandler}
                                            onBlur={fatherOccupationBlurHandler}></input>
                                        {fatherOccupationInputHasError && <p className="error-text">Father Occupation required!</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Father's Total Experience</label>
                                        <input type="text" className="form-control" placeholder="Enter Father's Total Experience"
                                            value={enteredFatherTotExp}
                                            onChange={fatherTotExpChangeHandler}
                                            onBlur={fatherTotExpBlurHandler}></input>
                                        {fatherTotExpInputHasError && <p className="error-text">Father Total Exp required!</p>}
                                    </div>
                                </div>
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Father's Exp with current company</label>
                                        <input type="text" className="form-control" placeholder="Enter Father's Exp with current company"
                                            value={enteredFatherComExp}
                                            onChange={fatherComExpChangeHandler}
                                            onBlur={fatherComExpBlurHandler}></input>
                                        {fatherComExpInputHasError && <p className="error-text">Father Com Exp required!</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Ration Card No.</label>
                                        <input type="text" className="form-control" placeholder="Enter Ration Card No."
                                            value={enteredRationCardNo}
                                            onChange={rationCardNoChangeHandler}
                                            onBlur={rationCardNoBlurHandler}></input>
                                        {rationCardNoInputHasError && <p className="error-text">Ration card no required!</p>}
                                    </div>
                                </div>
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Annual Income</label>
                                        <input type="text" className="form-control" placeholder="Enter Annual Income"
                                            value={enteredFatherAnnIncome}
                                            onChange={fatherAnnIncomeChangeHandler}
                                            onBlur={fatherAnnIncomeBlurHandler}></input>
                                        {fatherAnnIncomeInputHasError && <p className="error-text">Annual income required!</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: !toggleFormState ? 'block' : 'none' }}>
                            <div className="row">
                                <div className="col md12 border-right">
                                    <h6> Personal/Home Loan </h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Annual Income</label>
                                        <input type="text" className="form-control" placeholder="Enter Annual Income"
                                            value={enteredAnnIncome}
                                            onChange={annIncomeChangeHandler}
                                            onBlur={annIncomeBlurHandler}></input>
                                        {annIncomeInputHasError && <p className="error-text">Annual income required!</p>}
                                    </div>
                                </div>
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Company Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Company Name"
                                            value={enteredCompanyName}
                                            onChange={companyNameChangeHandler}
                                            onBlur={companyNameBlurHandler}></input>
                                        {companyNameInputHasError && <p className="error-text">Company name required!</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Designation</label>
                                        <input type="text" className="form-control" placeholder="Enter Designation"
                                            value={enteredDesignation}
                                            onChange={designationChangeHandler}
                                            onBlur={designationBlurHandler}></input>
                                        {designationInputHasError && <p className="error-text">Designation required!</p>}
                                    </div>
                                </div>
                                <div className="col md6 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Total Experience</label>
                                        <input type="text" className="form-control" placeholder="Enter Total Experience"
                                            value={enteredTotExp}
                                            onChange={totExpChangeHandler}
                                            onBlur={totExpBlurHandler}></input>
                                        {totExpInputHasError && <p className="error-text">Total exp required!</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col md12 border-right">
                                    <div className="form-group">
                                        <label className="mb-1">Experience with current company</label>
                                        <input type="text" className="form-control" placeholder="Enter Experience with current company"
                                            value={enteredCompanyExp}
                                            onChange={companyExpChangeHandler}
                                            onBlur={companyExpBlurHandler}></input>
                                        {companyExpInputHasError && <p className="error-text">Company exp required!</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col md6 border-right">
                            </div>
                            <div className="col md6 border-right">
                                <div className="form-group MarginTop">
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