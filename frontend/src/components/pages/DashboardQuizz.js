import React from 'react';
import './DashboardQuizz.css';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'antd';
import { Flex, Progress } from 'antd';

const quizData = [
  { title: 'PHYSICS', practicalNames: ['Practical Name 1', 'Practical Name 2'], percent: 50 },
  { title: 'CHEMISTRY', practicalNames: ['Practical Name'], percent: 50 },
  { title: 'BIOLOGY', practicalNames: ['Practical Name'], percent: 50 },
  { title: 'INFORMATION SYSTEM', practicalNames: ['Practical Name'], percent: 50 },
];

const QuizCard = ({ title, practicalNames, percent }) => (
  <Card className='Card' style={{ width: '550px', height: 'auto' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {practicalNames.map((name, index) => (
        <div key={index}>
          <br />
          <Card.Subtitle className="mb-2 text-muted" style={{ marginLeft: '20px' }}>{name}</Card.Subtitle>
          <Card.Text className='cardText'>
            <Row>
              <Col>
                Score <br />
                Rank
              </Col>
              <Col className='RightCol'>
                <Flex align="center" wrap gap={30}>
                  <Progress type="circle" percent={percent} size={50} />
                </Flex>
              </Col>
            </Row>
          </Card.Text>
        </div>
      ))}
    </Card.Body>
  </Card>
);

function DashboardQuizz() {
  return (
    <div>
      <div className='title1'>
        <h2 className='heading1'>Summary of your Quizzes</h2>
        <hr className='hr1'></hr>
      </div>
      <br />
      <div className='CardDiv'>
        {quizData.map((quiz, index) => (
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
