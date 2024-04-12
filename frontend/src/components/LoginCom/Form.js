import React, { useState } from 'react';
import './Form.css'
import Button from 'react-bootstrap/Button';
import { First } from 'react-bootstrap/esm/PageItem';


function CreateAccountForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    
    console.log({
      
      email,
      password,
    });

    
   
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
    <div className="containerSign">
        
        <div className="header">
            <img src=''></img> 
        </div>    
        
        <div className="create-account-form">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
            
            
            <div className="form-group">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
         
            
            <div className="form-group">
                <input
                    type="password"
                    id="confirmPassword"
                    name="Password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                />
            </div>
            <input type="checkbox" value={First} /> Remember Me
            <p className='Remember'><a href='#'>Forgot Password?</a></p>
            <Button id='getnbtn' as="input" type="submit" value="Log In" />
            
        </form>
        <p id='last'>
            Don't have an acoount? <a href="#">Sign Up</a>
        </p>
        </div>
       
    </div>

    </>
  );
}

export default CreateAccountForm;
