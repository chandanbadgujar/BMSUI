import React, { useEffect } from 'react';

import useInput from '../../Hooks/useInput';
import  './ApplyLoan.css';

export default function ApplyLoan() {
    const isNotEmpty = value => value.trim() !== '';

    function loanTypeChangeHandler() {
        setToggleForm(!toggleFormState);
    }

    // const {
    //     value: enteredLoanType,
    //     isValid: loanTypeIsValid,
    //     hasError: loanTypeInputHasError,
    //     valueChangeHandler: loanTypeChangeHandler,
    //     inputBlurHandler: loanTypeBlurHandler,
    //     reset: loanTypeReset } = useInput(isNotEmpty);
    const {
        value: enteredLoanAmt,
        isValid: loanAmtIsValid,
        hasError: loanAmtInputHasError,
        valueChangeHandler: loanAmtChangeHandler,
        inputBlurHandler: loanAmtBlurHandler,
        reset: loanAmtReset } = useInput(isNotEmpty);
    const {
        value: enteredApplyDate,
        isValid: applyDateIsValid,
        hasError: applyDateInputHasError,
        valueChangeHandler: applyDateChangeHandler,
        inputBlurHandler: applyDateBlurHandler,
        reset: applyDateReset } = useInput(isNotEmpty);
    const {
        value: enteredIssueDate,
        isValid: issueDateIsValid,
        hasError: issueDateInputHasError,
        valueChangeHandler: issueDateChangeHandler,
        inputBlurHandler: issueDateBlurHandler,
        reset: issueDateReset } = useInput(isNotEmpty);
    const {
        value: enteredInterestRate,
        isValid: interestRateIsValid,
        hasError: interestRateInputHasError,
        valueChangeHandler: interestRateChangeHandler,
        inputBlurHandler: interestRateBlurHandler,
        reset: interestRateReset } = useInput(isNotEmpty);
    const {
        value: enteredDuration,
        isValid: durationIsValid,
        hasError: durationInputHasError,
        valueChangeHandler: durationChangeHandler,
        inputBlurHandler: durationBlurHandler,
        reset: durationReset } = useInput(isNotEmpty);
    const {
        value: enteredCourseFee,
        isValid: courseFeeIsValid,
        hasError: courseFeeInputHasError,
        valueChangeHandler: courseFeeChangeHandler,
        inputBlurHandler: courseFeeBlurHandler,
        reset: courseFeeReset } = useInput(isNotEmpty);
    const {
        value: enteredCourse,
        isValid: courseIsValid,
        hasError: courseInputHasError,
        valueChangeHandler: courseChangeHandler,
        inputBlurHandler: courseBlurHandler,
        reset: courseReset } = useInput(isNotEmpty);
    const {
        value: enteredFatherName,
        isValid: fatherNameIsValid,
        hasError: fatherNameInputHasError,
        valueChangeHandler: fatherNameChangeHandler,
        inputBlurHandler: fatherNameBlurHandler,
        reset: fatherNameReset } = useInput(isNotEmpty);
    const {
        value: enteredFatherOccupation,
        isValid: fatherOccupationIsValid,
        hasError: fatherOccupationInputHasError,
        valueChangeHandler: fatherOccupationChangeHandler,
        inputBlurHandler: fatherOccupationBlurHandler,
        reset: fatherOccupationReset } = useInput(isNotEmpty);
    const {
        value: enteredFatherTotExp,
        isValid: fatherTotExpIsValid,
        hasError: fatherTotExpInputHasError,
        valueChangeHandler: fatherTotExpChangeHandler,
        inputBlurHandler: fatherTotExpBlurHandler,
        reset: fatherTotExpReset } = useInput(isNotEmpty);
    const {
        value: enteredFatherComExp,
        isValid: fatherComExpIsValid,
        hasError: fatherComExpInputHasError,
        valueChangeHandler: fatherComExpChangeHandler,
        inputBlurHandler: fatherComExpBlurHandler,
        reset: fatherComExpReset } = useInput(isNotEmpty);
    const {
        value: enteredRationCardNo,
        isValid: rationCardNoIsValid,
        hasError: rationCardNoInputHasError,
        valueChangeHandler: rationCardNoChangeHandler,
        inputBlurHandler: rationCardNoBlurHandler,
        reset: rationCardNoReset } = useInput(isNotEmpty);
    const {
        value: enteredFatherAnnIncome,
        isValid: fatherAnnIncomeIsValid,
        hasError: fatherAnnIncomeInputHasError,
        valueChangeHandler: fatherAnnIncomeChangeHandler,
        inputBlurHandler: fatherAnnIncomeBlurHandler,
        reset: fatherAnnIncomeReset } = useInput(isNotEmpty);
    const {
        value: enteredAnnIncome,
        isValid: annIncomeIsValid,
        hasError: annIncomeInputHasError,
        valueChangeHandler: annIncomeChangeHandler,
        inputBlurHandler: annIncomeBlurHandler,
        reset: annIncomeReset } = useInput(isNotEmpty);
    const {
        value: enteredCompanyName,
        isValid: companyNameIsValid,
        hasError: companyNameInputHasError,
        valueChangeHandler: companyNameChangeHandler,
        inputBlurHandler: companyNameBlurHandler,
        reset: companyNameReset } = useInput(isNotEmpty);
    const {
        value: enteredDesignation,
        isValid: designationIsValid,
        hasError: designationInputHasError,
        valueChangeHandler: designationChangeHandler,
        inputBlurHandler: designationBlurHandler,
        reset: designationReset } = useInput(isNotEmpty);
    const {
        value: enteredTotExp,
        isValid: totExpIsValid,
        hasError: totExpInputHasError,
        valueChangeHandler: totExpChangeHandler,
        inputBlurHandler: totExpBlurHandler,
        reset: totExpReset } = useInput(isNotEmpty);
    const {
        value: enteredCompanyExp,
        isValid: companyExpIsValid,
        hasError: companyExpInputHasError,
        valueChangeHandler: companyExpChangeHandler,
        inputBlurHandler: companyExpBlurHandler,
        reset: companyExpReset } = useInput(isNotEmpty);

    const [loanTypeState, setLoanType] = React.useState('');
    const [selectedLoanTypeState, setSelectedLoanType] = React.useState('');
    const [toggleFormState, setToggleForm] = React.useState(false);

    useEffect(() => {
        getLoanType();
    }, []);

    function getLoanType() {
        const loanType = [
            { label: "Personal", value: 1 },
            { label: "Home", value: 2 },
            { label: "Education", value: 3 }
        ];

        let loanTypeList = loanType.length > 0
            && loanType.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.label}</option>
                )
            }, this);

        setLoanType(loanTypeList);
    }

    return (
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
                                    onChange={e => setSelectedLoanType(e.target.value)}
                                    value={selectedLoanTypeState}
                                    onChange={loanTypeChangeHandler}
                                    //onBlur={loanTypeBlurHandler}
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
                                <input type="text" className="form-control" placeholder="Enter Loan Apply Date"
                                    value={enteredApplyDate}
                                    onChange={applyDateChangeHandler}
                                    onBlur={applyDateBlurHandler}></input>
                                {applyDateInputHasError && <p className="error-text">Loan apply date required!</p>}
                            </div>
                        </div>
                        <div className="col md6 border-right">
                            <div className="form-group">
                                <label className="mb-1">Loan Issue Date</label>
                                <input type="text" className="form-control" placeholder="Enter Loan Issue Date"
                                    value={enteredIssueDate}
                                    onChange={issueDateChangeHandler}
                                    onBlur={issueDateBlurHandler}></input>
                                {issueDateInputHasError && <p className="error-text">Loan issue date required!</p>}
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
                                    onChange={interestRateChangeHandler}
                                    onBlur={interestRateBlurHandler}></input>
                                {interestRateInputHasError && <p className="error-text">Interest rate required!</p>}
                            </div>
                        </div>
                        <div className="col md6 border-right">
                            <div className="form-group">
                                <label className="mb-1">Duration of the Loan</label>
                                <input type="text" className="form-control" placeholder="Enter Duration of the Loan"
                                    value={enteredDuration}
                                    onChange={durationChangeHandler}
                                    onBlur={durationBlurHandler}></input>
                                {durationInputHasError && <p className="error-text">Duration required!</p>}
                            </div>
                        </div>
                    </div>
                    
                    <div style={{display: toggleFormState ? 'block' : 'none'}}>
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

                    <div className="row">
                        <div className="col md6 border-right">
                        </div>
                        <div className="col md6 border-right">
                            <div className="form-group">
                                <button type="button" className="btn btn-outline-primary shadow w-100">Save</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="clearFooter"></div>
        </div>
    )
}