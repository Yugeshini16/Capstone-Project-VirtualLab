import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass ,faEnvelopeOpen ,faBell} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';


const images = [ 'pictures/pp.png'
];
function Topbar() {
    const {currentUser } = useSelector((state) => state.user);

    return (

        <>
         <div className='content--header'>
        
        <div className='header--activity'>
            <div className='search-box'>
                <input type='text' placeholder='Type to search here...'/>
        
                
                <FontAwesomeIcon icon={faMagnifyingGlass} className='fa' />
            </div>
            <div className='notify1'>
            <FontAwesomeIcon icon={faEnvelopeOpen} className='fa1'/>
            <FontAwesomeIcon icon={faBell}  className='fa1'/>
            <div className='notify'>
            <div className="propic">
            {images.length > 0 && <img src={images[0]} className="profile-pic" />}
            </div>
            <div className='nameofuser'>
            <li>{currentUser.username}</li>
              </div>    
            </div>
        </div>   </div>
    </div>
        </>
      );
}

export default Topbar;