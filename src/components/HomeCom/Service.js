import MiddleBox from './MiddleBox';
import './Service.css';
import Button from 'react-bootstrap/Button';

function Service() {
    return ( 
        <>
        <div className="containerW">
            <div className="whead">
                <h1>Why you want to choose us?</h1>
                <div className="un"></div>
            </div>

            <div className="slidebar">
                <MiddleBox></MiddleBox>
              
            </div>
            <div className="last">

                <div className="getstarted">
                <Button id='getbtn' as="input" type="submit" value="Get Started Now" />

                </div>
            </div>
            <div className='end'></div>
        </div>
        </>
     )
}

export default Service