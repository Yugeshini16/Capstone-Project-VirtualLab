import './quiz.css';
import Review from './review.js';
import { data } from '../../assets/data';
import React, { useRef, useState } from 'react';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Quiz() {
    const navigate = useNavigate()

  const gotToNewPage=()=>{
    navigate("/Review");
  }
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);

    const option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }
    };

    const next = () => {
        if (index === data.length - 1) {
            setResult(true);
            return;
        }
        setIndex(prevIndex => prevIndex + 1);
        setQuestion(data[index + 1]);
        setLock(false);
        option_array.forEach(option => {
            option.current.classList.remove("wrong");
            option.current.classList.remove("correct");
        });
    };
    

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    };
    

    return (
        <>
            <div className='fulldiv'>
                <div className='title1'>
                    <h2 className='heading1'>Let’s Start the Quiz</h2>
                    <hr className='hr1'></hr>
                    
                </div>
            </div>
            <div className='container'>
                <h3>ALL THE BEST!</h3>
                <hr />
                {result ? (
                    <>
                        <div className='results'>
                            <Row>
                                <Col span={24}><h4>Grade 12 - Semester 2 - Practical No.03</h4></Col>
                            </Row>
                            <Row>
                                <Col className='profpic' span={6}><img src="pictures/user.jpg" alt=""/></Col>
                                <Col className='profdesc' span={12}>
                                    <Row>
                                        <Col className='name' span={24}><h5>John Smith</h5></Col>
                                    </Row>
                                    <Row>
                                        <Col className='emal' span={24}><h5>johnSmith@gmail.com</h5></Col>
                                    </Row>
                                    <Row>
                                        <Col className='f-resu' span={24}>
                                            <h2>You Scored {score} out of {data.length} </h2>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={5}><img className='medalpic' src="pictures/medal.jpg" alt="medalpic"/></Col>
                            </Row>
                            <div className='f-result'>
                                <Row>
                                    <Col className='col' span={8}><h5>96</h5> <br/> <h4>Scored</h4></Col>
                                    <Col className='col' span={8}><h5>78</h5> <br/> <h4>Percentage</h4></Col>
                                    <Col className='col' span={8}><h5>8</h5> <br/> <h4>Rank</h4></Col>
                                </Row>
                            </div>
                            <br/><br/>

                            <div className='buttons'>
                                <button onClick={reset}>Reset</button> {' '}
                                    <a href='/Review'> 
                                        <Button> Done </Button>
                                    </a>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h2>{index + 1}. {question.question}</h2>
                        <ul>
                            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
                            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
                            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
                            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
                        </ul>
                        <button onClick={next}>Next</button>
                        <div className='index'>{index + 1} of {data.length} Questions</div>
                    </>
                )}
            </div>
        </>
    );
}

export default Quiz;
