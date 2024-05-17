import './Nav2.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Nav2() {
    return ( 
        <>
        <div className='os'>
            
        
        <div className="nav-link">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/streams">Streams</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><FontAwesomeIcon icon={faUser} /></li>
          </ul>
        </div>
        
        </div>
        </>
     );
}

export default Nav2;