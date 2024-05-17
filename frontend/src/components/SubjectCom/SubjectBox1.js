import './SubjectBox.css';
import {Link} from 'react-router-dom'

function SubjectBox1() {
    return ( 
        <>
        <div className="SubjectBox">
        <Link to='/practical' className='link' style={{textDecoration:'none'}}>
            <div className="SubjectPic">
                <img src="pictures/SubjectNavi_Chemistry.png" id="image-cover" />
            </div>
            
            <h2>Chemistry</h2>
        </Link>
        </div>
        </>
     )
}

export default SubjectBox1