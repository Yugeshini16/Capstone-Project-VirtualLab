import { FaPlay } from "react-icons/fa";
import './PracticalFooter.css'


function PracticalFooter(){
    return(
        <>
        <div className="footer">
            <div className="btns">
                <button className="Widebtn">See Courses</button>
                <a href="/PracticalSteps"><button className="playbtn"><FaPlay/> Start Practical</button></a>
            </div>
        </div>
        </>
    )
}

export default PracticalFooter