import React, { useState } from "react";
import "./CreateAccountForm.css";
import Button from "react-bootstrap/Button";

function CreateAccountForm() {
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Stream, setStream] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({});

  //set loading 
  const[error, setError]= useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Form validation logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // Set form data before making the fetch call
    const formData = {
      username: Username,
      email: email,
      Stream: Stream,
      password: password,
    };
  
    try {
      setLoading (true);
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if(data.success==false){
        setError(true);
        return;
      }

  
      // Clear the form after successful submission
      setUserName("");
      setEmail("");
      setStream("");
      setPassword("");
      setConfirmPassword("");
      setFormData({}); // Clear form data state as well
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <>
      <div className="containerSign">
        <div className="header">
          <a href="/">
            {" "}
            <img src="pictures/VirtualLab Logo.png"></img>
          </a>
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
            <Button disabled={loading} id="getnbtn" as="input" type="submit" value={loading ? 'loading': 'Sign Up'} />
          </form>
          <p id="last">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
        <p >{error && 'Something went wrong'}</p>
      </div>
    </>
  );
}

export default CreateAccountForm;