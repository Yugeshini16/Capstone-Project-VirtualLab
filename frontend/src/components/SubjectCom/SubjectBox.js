import './SubjectBox.css';
import {Link} from 'react-router-dom'

function SubjectBox() {
    return ( 
        <>
        <div className="SubjectBox">
            
            <Link to='/practical' className='link' style={{textDecoration:'none'}}>
            <div className="SubjectPic">
                <img src="pictures/SubjectNavi_Biology.jpg" id="image-cover" />
            </div>
            <h2> Biology </h2>
            </Link>
        </div>
        </>
     )
}

export default SubjectBox