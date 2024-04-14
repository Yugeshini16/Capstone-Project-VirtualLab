import './Home.css'
import Button from 'react-bootstrap/Button';
import AboutUs from '../HomeCom/AboutUs'
import Service from '../HomeCom/Service';
import NavBar from '../NavBar';
import Footer from '../Footer';

function Home() {
    return ( 
        <>
            <NavBar/>
            <div className="containerH">
                <div className="leftcontent">
                    <div className="picture">
                        <img src="/public/pictures/HeaderImage.png" alt="Children doing experiments" />
                    </div>
                </div>
                <div className="rightcontent">
                    <h1 className='H'>A way to go more by</h1>
                    <h1 className='H'>diving into the </h1>
                    <h1 className='H'>experimental world.....</h1>
                    <h2 >"A way to go more by diving into the </h2>
                    <h2>experimental world"</h2>
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