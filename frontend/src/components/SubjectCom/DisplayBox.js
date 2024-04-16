import React, { useState, useEffect } from 'react';
import './DisplayBox.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function DisplayBox() {
  const images = [
    
    'pictures/SubjectNavi_slideshow01.jpg',
    'pictures/SubjectNavi_slideshow02.jpg',
    'pictures/SubjectNavi_slideshow03.jpg',
    'pictures/SubjectNavi_slideshow04.jpg',
    'pictures/SubjectNavi_slideshow05.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(true); 
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsLoading(false); 
      }, 1000); 
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []); 

  const [circleColors, setCircleColors] = useState(
    new Array(5).fill('white')
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCircleColors((prevColors) =>
        prevColors.map((color, index) => (index === 2 ? 'red' : color))
      );
    }, 3000); 

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div className="display-container">
      <img
        src={images[currentImageIndex]}
        id="Image"
        onLoad={() => setIsLoading(false)} 
        onError={() => setIsLoading(false)} 
      />
      {isLoading && (
        <div className="loading-indicator">
          <FontAwesomeIcon icon={faCircleNotch} className="loading" />
        </div>
      )}
      <div className="dot-container">
        <ul>
          {circleColors.map((color, index) => (
            <li key={index}>
              {isLoading && index === currentImageIndex ? (
                <FontAwesomeIcon icon={faCircle} className="loading" />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  style={{ fill: color }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DisplayBox;
