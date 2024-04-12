import Form from "../LoginCom/Form";
import './Login.css';
import SignRightSide from '../LoginCom/SignRightSide'

function Login() {
    return ( 
        <>
        <div className="clmn">
        <SignRightSide/>

      <div className="contSign">

            <Form/> 
           
       </div>
       </div>
        </>
     );
}

export default Login;