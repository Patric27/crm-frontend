import  { useState } from "react";


import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";


import './entry.style.css';

export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');

const handleOnChange = (e) =>{
    const { name, value } = e.target.value;
   
    switch(name){
        case "email":
            setEmail(value);
            break;

        case "password":
            setPassword(value);
            break;
        

            default:
                break;        
    }
    console.log(name, value);
};  

    const handleOnSubmit = e =>{
        e.preventDefault();

        if (!email || !password) {
            return alert("Fill up all the form");
        }

        console.log(email, password);

    };

    const handleOnResetSubmit = (e) =>{
        e.preventDefault();

        if (!email) {
            return alert("Please Enter the email");
        }
        console.log(email);
    };
    



    const formSwitcher = ( frmType) => {
        setFrmLoad( frmType);
    };

    return  (
        <div className="entry-page bg-info">
            {frmLoad === 'login' && (
                 <LoginForm
                 handleOnChange={handleOnChange}
                 handleOnSubmit={handleOnSubmit}
                 email={email}
                 pass={password}
                 formSwitcher={formSwitcher}
                 />
                 
            )}
            {frmLoad === 'reset' && <ResetPassword
                handleOnChange={handleOnChange}
                handleOnResetSubmit={handleOnResetSubmit}
                email={email} 
                formSwitcher={formSwitcher}
            />}
            
        </div>
    );
};
