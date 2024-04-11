import './DashContent.css'
import Circle from './Circle';
import ImageSlider from './ImageSlider';
const course = [
  
    {
    title: "Physics",
    duration:'2 Hours',

  },

  {
    title: "Chemistry",
    duration:'2 Hours',
    
  },
  
  {
    title: "Biology",
    duration:'2 Hours',
    
  },
  
  {
    title: "Information Technology",
    duration:'2 Hours',
  },

  
  
]

function Dashcontent() {
    return (
        <>
        <div className="containerDash">
        <div className="text-center00">
        <div className="text-center0">
          <h1 className="display-4">Dashboard</h1>
          <p className="lead">Your Progress</p>
    
        </div>
        <div className='helpBox'>
          <p>Hi, I'm here to help you!</p>
            <img src='pictures/proflile.png' className='pp'></img>
          
          </div>
        </div>
        <div className='card-container'>
          {course.map((item) => (
            <div className="card">
          
              <div className="card--title">
                <h2>{item.title}</h2>
                <div className="underline">
                <Circle/>
    
                </div>
               
              </div>
    
            </div>
          
          ))}
           
           </div></div>
           <ImageSlider/>
        
        </>
      )
}

export default Dashcontent;