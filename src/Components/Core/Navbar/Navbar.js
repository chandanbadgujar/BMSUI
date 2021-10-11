import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";

//class Navbar extends Component {
export default function Navbar(props) {
    //const [redirect, setRedirect] = React.useState(false);
    let menu;

    function setUserName() {
        props.setUserName('');
    }

    const logout = async () => {
        await fetch("http://localhost:12296/api/Auth/logout", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        }).then(() => {
            setUserName();
            setMenu();
        });
    }

    // props.setName = () => {

    // }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         menu: ''
    //     }
    // }

    function setMenu() {
        if (props.name !== '') {
            menu = (
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link active" to="/register">Register</Link>
                </li> */}
                    <li className="nav-item">
                        <Link className="nav-link active" to="/update-account">Update Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/apply-loan">Apply Loan</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/login" onClick={logout}>Logout</Link>
                    </li>
                </ul>
            );
        } else {
            menu = (<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/register">Register</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link active" to="/update-account">Update Account</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/apply-loan">Apply Loan</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link active" to="Login">Login</Link>
                </li>
            </ul>)
        }
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {menu}
            </div>
        );
    }

    // if(redirect) {
    //     return <Redirect to="/login" />;
    // }

    //render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Bank Management System</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {setMenu()}
            </div>
        </nav>
    );
}
//}
