import React, { useEffect,useState } from 'react';
import './DashboardQuizz.css';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'antd';
import { Flex, Progress } from 'antd';

const quizData = [
  { 
    title: 'PHYSICS', 
    practicals: [
      { name: 'Practical Name 1', score: 7, rank: 1, medal: 70 }, // 7/10
      { name: 'Practical Name 2', score: 5, rank: 2, medal: 50 }  // 5/10
    ], 
    completedPercent: 50 
  },
  { 
    title: 'CHEMISTRY', 
    practicals: [
      { name: 'Practical Name', score: 8, rank: 1, medal: 80 }  // 8/10
    ], 
    completedPercent: 50 
  },
  { 
    title: 'BIOLOGY', 
    practicals: [
      { name: 'Practical Name', score: 6, rank: 1, medal: 60 }  // 6/10
    ], 
    completedPercent: 50 
  },
  { 
    title: 'INFORMATION SYSTEM', 
    practicals: [
      { name: 'Practical Name', score: 9, rank: 1, medal: 90 }  // 9/10
    ], 
    completedPercent: 50 
  }
];

const getMedalImage = (score) => {
  if (score > 80) {
      return <img src="/gold.png" alt="Gold Medal" width="60" />;
  } else if (score > 70 && score <= 80) {
      return <img src="/silver.png" alt="Silver Medal" width="60" />;
  } else if (score >= 50 && score <= 70) {
      return <img src="/bronze.png" alt="Bronze Medal" width="60" />;
  } else {
      return <span>No Medal</span>;
  }
};

const QuizCard = ({ title, practicals, completedPercent }) => (
  <Card className='Card' style={{ width: '550px', height: 'auto' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {practicals.map((practical, index) => (
        <div key={index}>
          <br />
          <Card.Subtitle className="mb-2 text-muted" style={{ marginLeft: '20px' }}>{practical.name}</Card.Subtitle>
          <Card.Text className='cardText'>
            <Row>
              <Col>
                Score: {practical.score} <br />
              </Col>
              <Col className='RightCol'>
                {getMedalImage(practical.medal)}
              </Col>
            </Row>
          </Card.Text>
        </div>
      ))}
    </Card.Body>
  </Card>
);

function DashboardQuizz() {

  const [QuizData, setQuizData] = useState([]);
  const userID = '661feaf6361ab29bad028f9d'

  async function fetchQuizData(userID) {
    try {
        const response = await fetch("http://localhost:3001/api/quizDashboard", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userID:userID }) // Adjust as needed
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const quizDashData = await response.json();
        return quizDashData;
    } catch (error) {
        console.error('Error fetching progress data:', error);
        return null; // Handle the error appropriately in your application
    }
}

  useEffect(() => {
    const fetchAndUpdateQuizData = async () => {
        const dashData = await fetchQuizData(userID);
        if (dashData) {
            setQuizData(dashData);
        } else {
            console.error('Failed to fetch or update progress data');
        }
    };

    fetchAndUpdateQuizData();
}, [userID]);

  return (
    <div>
      <div className='title1'>
        <h2 className='heading1'>Summary of your Quizzes</h2>
        <hr className='hr1'></hr>
      </div>
      <br />
      <div className='CardDiv'>
        {QuizData.map((quiz, index) => (
          <React.Fragment key={index}>
            <QuizCard {...quiz} />
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default DashboardQuizz;
