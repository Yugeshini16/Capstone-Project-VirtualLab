import './PopPract.css'
import { FaPlay } from "react-icons/fa";

function PopPract(){
    return(
        <>

            <div className='section2'>
                <h2>Our Popular Courses</h2>

                <div className='items'>
                    
                        <div className='course'>
                            <div className='bg1'>
                                <div className='bg2'>
                                    <div className='img'>
                                        <img src="pictures/01.jpg" alt="course01"/>
                                    </div>
                                </div>
                            </div>

                            <h3>Web Development</h3>
                            <p>Now, it's time to come up with a great slogan to tie all the pieces together.</p>
                            <button className='btnPlay'><FaPlay /></button>
                        </div>

                        <div className='course'>
                            <div className='bg1'>
                                <div className='bg2'>
                                    <div className='img'>
                                        <img src="pictures/01.jpg" alt="course01"/>
                                    </div>
                                </div>
                            </div>

                            <h3>Web Development</h3>
                            <p>Now, it's time to come up with a great slogan to tie all the pieces together.</p>
                            <button className='btnPlay'><FaPlay /></button>
                        </div>

                        <div className='course'>
                            <div className='bg1'>
                                <div className='bg2'>
                                    <div className='img'>
                                        <img src="pictures/01.jpg" alt="course01"/>
                                    </div>
                                </div>
                            </div>

                            <h3>Web Development</h3>
                            <p>Now, it's time to come up with a great slogan to tie all the pieces together.</p>
                            <button className='btnPlay'><FaPlay /></button>
                        </div>
                  
                </div>
           </div>
          
        </>
    )
}

export default PopPract