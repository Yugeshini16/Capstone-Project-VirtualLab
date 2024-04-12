import { FaPlay } from "react-icons/fa";
import '../PracticalTheoryCom/PracticalFooter.css'


function PracticalFooter(){
    return(
        <>
        <div className="footer">
            <div className="btns">
                <button className="Widebtn">View Theory</button>
                <a href="/quiz"><button className="playbtn"><FaPlay/> Start Quiz</button></a>
            </div>
        </div>
        </>
    )
}

export default PracticalFooter