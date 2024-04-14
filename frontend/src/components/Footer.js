import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (  
        <>
        <div className="footerl">
            <div className="fcontent">
                <div className="footcontent">
                    
                    <h2>Here's a message from us!</h2>
                    <p>Hey Champ!
                    <br/>Dive into interactive experiments,
                    <br/>test your knowledge with quizzes,
                    <br/>receive personalized feedback,
                    <br/>and explore the endless possibilities of our virtual lab.
                    <br/>Join us on this exciting journey of discovery and learning.</p>
                </div>
                <div className="socialmedia">
                    <ul type="">
                        <li><FontAwesomeIcon icon={faFacebook} className=' text-3xl' /></li>
                        <li><FontAwesomeIcon icon={faTwitter}  className=' text-3xl' /></li>
                        <li><FontAwesomeIcon icon={faInstagram}  className=' text-3xl'/></li>
                        <li><FontAwesomeIcon icon={faInstagram}  className=' text-3xl'/></li>
                    </ul>
                </div>
               
            </div>  


            <div className="fcontent">
                <h2>Support</h2>
                <p>Help</p>
                <p>Review</p>
            </div>
            <div className="fcontent">
                <h2>Support</h2>
                <p>Help</p>
                <p>Review</p>
            </div>
            <div className="fcontent">
                <h2>Support</h2>
                <p>Help</p>
                <p>Review</p>
                <p>Review</p>
            </div>

            
                
      
        </div>
        </>
    );
}

export default Footer;