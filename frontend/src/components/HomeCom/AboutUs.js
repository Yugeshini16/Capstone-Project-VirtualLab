import React from 'react'
import './AboutUs.css'


function About() {
    return (
        <>
        <div className="containerA">
            <div className="heade"></div>

            <div className="bigbox">
            
              <div className="minibox">
                <div className="partA">
                   <img src='pictures/Flask_alt-1.svg' className='minipics'></img> 
                </div>

                <div className="partB">
                    <p>100+</p>
                    <p>PRACTICALS</p>
                </div>
              </div>

              <div className="minibox">
                <div className="partA">
                  <img src='pictures/ai 1(1).svg' className='minipics'></img> 
                </div>

                <div className="partB">
                    <p>AI</p>
                    <p >ASSISTANCE</p>
                </div>
              </div>

              <div className="minibox">

                <div className="partA">
                  <img src='/pictures/graduation-hat-02.svg' className='minipics'></img> 
                </div>

                <div className="partB">
                    <p>SELF</p>
                    <p>EVALUATION</p>
                </div>
              </div>

            </div>

          <div className="AU">
            <h2>About Us</h2>
            <div className="under"></div>
          </div>

          <div className="contentBox">
            <p>We are a team who was struggled at our A/Ls and trying to assist our </p>
            <p>fellow sisters and brothers in order to study the practicals effectively </p>
            <p>using a virtual lab system. </p>
            <p>Here, A text to Image model, AI chat-bot and NLP are being implemented </p>
            <p>to make you all aware of the experimental lessons .</p>
          </div>

        </div>
        </>
      )
}

export default About