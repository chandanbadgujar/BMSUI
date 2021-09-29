import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='section footer bg-dark text-white'>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className="col-md-4">
                            Bank Address
                            <hr />
                            <div>
                                BMS
                            </div>
                        </div>
                        <div className="col-md-4">
                            Quick Links
                            <hr />
                            <div><Link className="nav-link active" to="/">Home</Link></div>
                            <div><Link className="nav-link active" to="/register">Register</Link></div>
                            <div><Link className="nav-link active" to="/update-account">Update Account</Link></div>
                            <div><Link className="nav-link active" to="/login">Login</Link></div>
                        </div>
                        <div className="col-md-4">
                            Products
                            <hr />
                            <div>Home Loan</div>
                            <div>Personal Loan</div>
                            <div>Education Loan</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
