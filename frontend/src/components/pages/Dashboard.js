import DashboardLeftSide from '../DashCom/DashboardLeftSide';
import Dashcontent from '../DashCom/DashContent';
import Topbar from '../DashCom/Topbar';

import './Dashboard.css'


function Dashboard() {
    return ( 
        <div className="ContainerDashboard">

                 
           
              <Topbar/> 
              <div className="right"> 
              <Dashcontent/> 
              

             </div> 
     <div className="left">
      <DashboardLeftSide/>
        </div>
        </div>
     );
}

export default Dashboard;