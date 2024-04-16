import React, { useState } from 'react';
import './CreateAccountForm.css'
import Button from 'react-bootstrap/Button';


function CreateAccountForm() {
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Stream, setStream] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Form validation logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // Constructing FormData object
    const formData = new FormData();
    formData.append('username', Username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('Stream', Stream);
    
// Iterate over FormData entries using forEach
formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  
  // Or, iterate over FormData entries using a for...of loop
  for (const entry of formData.entries()) {
    console.log(`${entry[0]}: ${entry[1]}`);
  }
    
    // Sending the form data to the backend
    try {
        const res = await fetch('http://localhost:3001/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(formData),
          
      });
      const data = await res.json();
      console.log(data);
      
      // Clear the form after successful submission
      setUserName("");
      setEmail("");
      setStream("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
                    name="username"
                    placeholder="Username"
                    value={Username}
                    onChange={(event) => setUserName(event.target.value)}
                    required
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
                    name="Stream"
                    placeholder="Stream"
                    value={Stream}
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
