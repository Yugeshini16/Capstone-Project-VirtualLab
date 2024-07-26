import React from "react";
import './OAuth.css';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase';
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";

function OAuth(){
    const dispatch = useDispatch();
    const handleGoogleClick = async (event) =>{
        event.preventDefault();
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch ("http://localhost:3001/api/auth/google",{
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });
            const data  = await res.json();
            dispatch(signInSuccess(data));
        }
        catch (error){
            console.log('Could not login with google', error);
        }
    }
    return(
        <>
        <p className="textSign">Or</p>
        <button 
        type="button" 
        className="google"
        onClick={handleGoogleClick}>
            <img src="/pictures/google.png"/>
        
        Continue with google
        </button>
        </>
    )
}
export default OAuth