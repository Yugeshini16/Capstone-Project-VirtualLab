import './SubjectBox.css';
import {Link} from 'react-router-dom'

function SubjectBox2() {
    return ( 
        <>
        <div className="SubjectBox">
        <Link to='/practical' className='link' style={{textDecoration:'none'}}>
            <div className="SubjectPic">
                <img src="pictures/SubjectNavi_Physics.jpeg" id="image-cover" />
            </div>
         
            <h2>Physics</h2>
        </Link>  
        </div>
        </>
     )
}

export default SubjectBox2