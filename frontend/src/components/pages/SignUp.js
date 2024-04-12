import CreateAccountForm from '../SignUpCom/CreateAccountForm';
import './SignUp.css';
import SignRightSide from '../SignUpCom/SignRightSide';

function SignUp() {
    return ( 
        <>

        
      <div className="contSign">
      <div className="flexy">
          <SignRightSide></SignRightSide> 
      <CreateAccountForm></CreateAccountForm> 

       </div>
       </div>
        </>
     )
}

export default SignUp