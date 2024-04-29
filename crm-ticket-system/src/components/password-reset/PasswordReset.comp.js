import React from "react";
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
 
export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher}) =>{

    const [email, setEmail] = useState('');

    return(
        <div className="wrapper d-flex align-items-center justify-content-center w-100">
            <div className="login">
                <h2 className="text-info mb-3"> Reset Password</h2>
                <form className="needs-validation">
                    <div className="form-group was-validated mb-2">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control"  onChange={e => setEmail (e.target.value)}name="email" value={email} onSubmit={handleOnResetSubmit} required></input>
                        <div className="invalid-feedback">
                            Please Enter your email
                        </div>
                    </div>
                    
                    <div className="form-group form-check mb-2">
                        <input type="checkbox" className="form-check-input"></input>
                        <label htmlFor="check" className="form-check-label">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-success w-100 mt-2">Reset Password</button>

                    <div className="mb-2">
                        <a href="#!" onClick={() => formSwitcher('login')}>Login Now</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
ResetPassword.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    formSwitcher: PropTypes.func.isRequired,
};