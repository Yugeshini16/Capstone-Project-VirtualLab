import BeforeLastBox from '../SubjectCom/BeforeLastBox';
import DisplayBoX from '../SubjectCom/DisplayBox';
import LastBox from '../SubjectCom/LastBox';
import SubjectBox from '../SubjectCom/SubjectBox';
import SubjectBox1 from '../SubjectCom/SubjectBox1';
import SubjectBox2 from '../SubjectCom/SubjectBox2';
import './SubjectNavigation.css';
import NavBar from '../NavBar';

function SubjectNavigation() {
    return ( 
        <>
        <NavBar/>
        <div className="subNavContainer">  
        
            <div className="SecondSec">
                <DisplayBoX></DisplayBoX>
            </div> 
       
            <div className="SubBox">
                <SubjectBox></SubjectBox> 
                <SubjectBox1></SubjectBox1>
                <SubjectBox2></SubjectBox2>
            </div>

            <div className="ThirdSec">
                <BeforeLastBox></BeforeLastBox>   
            </div> 

            <div className="LastSec">
                <LastBox></LastBox>   
            </div>
         
        </div>

         </>
        
     );
}

export default SubjectNavigation;