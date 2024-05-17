import './Home.css'
import Button from 'react-bootstrap/Button';
import AboutUs from '../HomeCom/AboutUs'
import Service from '../HomeCom/Service';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Video from '../HomeCom/Video';

function Home() {
    return ( 
        <>
            <NavBar/>
            
            <div className="containerH">
                <div className="leftcontent">
                    <div className="picture">
                        <img src="/public/pictures/HeaderImage.png" alt="Children doing " />
                    </div>
                </div>
                <div className="rightcontent">

                    <h2 >A way to go more by</h2>
                    <h2 >diving into the </h2>
                    <h2 >experimental world</h2>

                    <h3>"A way to go more by diving into the </h3>
                    <h3>experimental world"</h3>

                    <Button id='signbtn' as="input" type="submit" value="Sign Up" />
                    
                </div>

            </div>
            <AboutUs/>
            <Service/>
            <Footer/>
        </>
     );
}

export default Home