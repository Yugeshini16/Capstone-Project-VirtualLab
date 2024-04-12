import './DashboardLeftSide.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function DashboardLeftSide() {
    return ( 
        <>
        <div className="menu">
      <div className="logo">
        <img src="/pictures/VirtualLab Logo.png"  />
      </div>

      <div className='search-box1'>
        <input type='text' placeholder='search here...' />
        {/* <BiSearch className='icon' /> */}



      </div> 
      <div className="menubelowsearch"> <p>Menu</p></div>
     
      <div className='Dash1'>
        <p>Dashboard </p>
        </div>

      
      <div className="menu--list">
        <a href="#" className='item'>
          <img src="/pictures/Profile_Icon.svg"></img>
          Profile
        </a>

        <a href="#" className='item'>
          <img src="/pictures/Quiz_Icon.svg"></img>
          Quizzes
        </a>

        <a href="#" className='item'>
          <img src="/pictures/Experiments_Icon.svg"></img>

          Experiments
        </a>

        <a href="#" className='item'>
          <img src="/pictures/Ai_chat_icon.svg"></img>

          AI chat
        </a>

      </div>

    </div>
        </>
     );
}

export default DashboardLeftSide;