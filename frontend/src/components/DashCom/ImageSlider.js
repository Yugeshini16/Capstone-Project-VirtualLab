import './ImageSlider.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/s1.jpeg'
import img2 from '../../assets/s2.jpg'
import img3 from '../../assets/s3.jpg'

function ImageSlider() {
  return (
    <div className='ContainerLast'>
        <div className="inside">
    <Carousel className=''>
      <Carousel.Item>
      <img style={{height:'350px',width:'900px' ,borderRadius: '20px'}}
        src={img1} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'350px',width:'900px' ,borderRadius: '20px'}}
        src={img2} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'350px',width:'900px' ,borderRadius: '20px'}}
        src={img3} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default ImageSlider;