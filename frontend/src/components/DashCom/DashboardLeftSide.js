import './DashboardLeftSide.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ChatCom/chatbot';
import Chatbot from '../ChatCom/chatbot';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function DashboardLeftSide({ setCurrentContent }) {
    const [showChatbot, setShowChatbot] = useState(false);

    const handleToggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };
    return (
        <>
            <div className="menu">
                <div className="logo">
                    <Link to='/'><img src="/pictures/VirtualLab Logo.png" /></Link>
                </div>

                <div className='search-box1'>
                    <input type='text' placeholder='search here...' />
                </div>
                <div className="menubelowsearch">
                    <p>Menu</p>
                </div>

                <div className='Dash1 active'>
                    <a href='/Dashboard'>Dashboard</a>
                </div>

                <div className="menu--list">
                    <div className='item' onClick={() => setCurrentContent('profile')}>
                        Profile
                    </div>

                    <div className='item' onClick={() => setCurrentContent('dashboardQuiz')}>
                        Quizzes
                    </div>

                    <div className='item' onClick={() => setCurrentContent('dashboard')}>
                        Experiments
                    </div>

                    <div className='item' onClick={handleToggleChatbot}>
                        AI chat
                        {showChatbot && <Chatbot/>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLeftSide;
