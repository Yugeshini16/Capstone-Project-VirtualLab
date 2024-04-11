import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 100;

      setPrevScrollPos(currentScrollPos);
      setIsNavVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`pic ${isNavVisible ? '' : 'nav-hidden'}`}>
      <img src="/pictures/logo.png" className='logoImg'/>

      <div className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a className="" href="/Subjects">Subjects</a></li>
          <li><a href="/SignUp">SignUp</a></li>
          <li><a className="Login" href="/Login">Login</a></li>
          <li><a href='/Dashboard'><FontAwesomeIcon icon={faUser} /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
