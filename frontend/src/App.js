import React from 'react';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import SubjectNavigation from './components/pages/SubjectNavigation';
import Login from './components/pages/Login';
import PracticalNav from './components/pages/PracticalNav';
import PracticalTheory from './components/pages/PracticalTheory';
import PracticalSteps from './components/pages/PracticalSteps';
import Quiz from './components/pages/quiz'
import Review from './components/pages/review'

function App() {
  return (
   <>
   <Router>
      <switch>
        <Routes>
        <Route path='/' exact element={<Home/>}>
        </Route>
        <Route path='/SignUp' exact element={<SignUp/>}>
        </Route>
        <Route path='/Dashboard' exact element={<Dashboard/>}>
        </Route>
        <Route path='/Subjects' exact element={<SubjectNavigation/>}>
        </Route>
        <Route path='/Login' exact element={<Login/>}>
        </Route>
        <Route path='/practical' exact element={<PracticalNav/>}>
        </Route>
        <Route path='/singlePratical' exact element={<PracticalTheory/>}>
        </Route>
        <Route path='/PracticalSteps' exact element={<PracticalSteps/>}>
        </Route>
        <Route path='/quiz' exact element={<Quiz/>}>
        </Route>
        <Route path='/Review' exact element={<Review/>}>
        </Route>
        
        </Routes>
     
      </switch>
   </Router>
   </>
  )
}

export default App
//made changes