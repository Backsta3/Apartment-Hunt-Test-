import React from 'react';
import './Registration.css';

const Registration = () => {
    return (
        <div className="loginContainer">
            <form className=" loginForm">
                <h4>Create an account</h4>
                <br />
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="First Name" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Last Name" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Username or Email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                </div>
                <br/>
                <div className="lgnBtnContainer">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            <hr />
            <div className="socialBtnContainer">
                <button type="button" className="btn btn-light socialBtn fbBtn">Continue with Facebook</button>
                <button type="button" className="btn btn-light socialBtn gBtn"> Continue with Google</button>
            </div>
        </div>
    );
};

export default Registration;