import React from "react";
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from "react";

 
export const LoginForm = ({handleOnChange, handleOnSubmit,password, formSwitcher}) =>{

    const [email, setEmail] = useState('');

     

    return(
        <div className="wrapper d-flex align-items-center justify-content-center w-100">
            <div className="login">
                <h2 className="text-info mb-3">Client Login</h2>
                <form className="needs-validation">
                    <div className="form-group was-validated mb-2">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" onChange={e => setEmail (e.target.value)}name="email" value={email} onSubmit={handleOnSubmit} required></input>
                        <div className="invalid-feedback">
                            Please Enter your email
                        </div>
                    </div>
                    <div className="form-group was-validated mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={handleOnChange}  name="password" value={password} required></input>
                        <div className="invalid-feedback">
                            Please Enter your password
                        </div>
                    </div>
                    <div className="form-group form-check mb-2">
                        <input type="checkbox" className="form-check-input"></input>
                        <label htmlFor="check" className="form-check-label">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-success w-100 mt-2">Log In</button>

                    <div className="mb-2">
                        <a href="#!" onClick={() => formSwitcher('reset')}>Forget Password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
LoginForm.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    formSwitcher: PropTypes.func.isRequired,
};