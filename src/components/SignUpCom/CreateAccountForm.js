import React, { useState } from 'react';
import './CreateAccountForm.css'
import Button from 'react-bootstrap/Button';


function CreateAccountForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [stream, setStream] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Submit the form data to the backend here
    console.log({
      firstName,
      lastName,
      email,
      stream,
      password,
    });

    // Clear the form after successful submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setStream("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
    <div className="containerSign">
        
        <div className="header">
           <a href='/'> <img src='pictures/VirtualLab Logo.png'></img></a> 
        </div>    
        
        <div className="create-account-form">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
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
                    type="text"
                    id="stream"
                    name="stream"
                    placeholder="Stream"
                    value={stream}
                    onChange={(event) => setStream(event.target.value)}
                />
            </div>
            <div className="form-group">
                
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                />
            </div>
            <Button id='getnbtn' as="input" type="submit" value="Get Started" />
        </form>
        <p id='last'>
            Already have an account? <a href="/login">Log in</a>
        </p>
        </div>
       
    </div>

    </>
  );
}

export default CreateAccountForm;
