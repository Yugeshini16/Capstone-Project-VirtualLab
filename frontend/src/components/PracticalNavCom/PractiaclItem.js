import './PracticalItem.css';
import {Link} from 'react-router-dom';

function PracticalItem() {
    return(
        <>
           <div className='section'>
                <h2>Practicals</h2>

                <div className='items'>
                    <div className='listDown'>
                        
                        <Link to='/singlePratical' className='link' style={{textDecoration:'none'}}>
                            <img src="pictures/01.jpg" alt="1st practical">

                            </img>

                            <h4 className="head">
                                Physical quantities without units
                            </h4>

                            <p className="info">
                            Appreciates that all physical quantities consist of a numerical 
                            magnitude with or without a unit. Uses the prefixes and their symbols 
                            to indicate multiples and submultiples
                            </p>

                            <button  className='btn'>Learn More</button>
                        </Link>
                    </div>

                    <div className='listDown dwn'>
                        <img src="pictures/01.jpg" alt="1st practical">

                        </img>

                        <h4 className="head ">
                            Physical quantities without units
                        </h4>

                        <p className="info">
                            Appreciates that all physical quantities consist of a numerical 
                            magnitude with or without a unit. Uses the prefixes and their symbols 
                            to indicate multiples and submultiples
                        </p>

                        <button  className='btn'>Learn More</button>
                    </div>

                    <div className='listDown dwn'>
                        <img src="pictures/01.jpg" alt="1st practical">

                        </img>

                        <h4 className="head">
                            Physical quantities without units
                        </h4>

                        <p className="info">
                            Appreciates that all physical quantities consist of a numerical 
                            magnitude with or without a unit. Uses the prefixes and their symbols 
                            to indicate multiples and submultiples
                        </p>

                        <button  className='btn'>Learn More</button>
                    </div>

                    <div className='listDown'>
                        <img src="pictures/01.jpg" alt="1st practical"> 
                        </img>

                        <h4 className="head">
                            Physical quantities without units
                        </h4>

                        <p className="info">
                            Appreciates that all physical quantities consist of a numerical 
                            magnitude with or without a unit. Uses the prefixes and their symbols 
                            to indicate multiples and submultiples
                        </p>

                        <button  className='btn'>Learn More</button>
                    </div>

                </div>
           </div>
          
        </>
    )
}


export default PracticalItem