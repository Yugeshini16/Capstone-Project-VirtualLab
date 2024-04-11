import React, { useState, useRef } from 'react';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { data } from '../../assets/data';

const Quiz = () => {
    const Navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);
    const optionRefs = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add('correct');
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add('wrong');
                setLock(true);
                optionRefs[question.ans - 1].current.classList.add('correct');
            }
        }
    };

    const next = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true);
                return;
            }
            setIndex(prev => prev + 1);
            setQuestion(data[index + 1]);
            setLock(false);
            optionRefs.forEach(ref => {
                ref.current.classList.remove('wrong');
                ref.current.classList.remove('correct');
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        optionRefs.forEach(ref => {
            ref.current.classList.remove('wrong');
            ref.current.classList.remove('correct');
        });
    };

    return (
        <>
            <div className='fulldiv'>
                <div className='title1'>
                    <h1 className='heading1'>Let’s Start Quiz</h1>
                    <hr className='hr1' />
                </div>
            </div>
            <div className='container'>
                <h5>ALL THE BEST!</h5>
                <hr />
                {result ? (
                    <>
                        <h2>You have completed the quiz!</h2>
                        <h3>Your score: {score} out of {data.length}</h3>
                        <Button onClick={reset}>Reset</Button>{' '}
                        <Button onClick={() => Navigate('/Review')}>Review Answers</Button>
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
};

export default Quiz;
