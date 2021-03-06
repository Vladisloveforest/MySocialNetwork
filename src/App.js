import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';





function App(props) {
  
  return (
    
    <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        {/* <Route path='/profile' component={Profile} />
         
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} /> */}
        <Route path='/dialogs' render={ () => {return <DialogsContainer store={props.store} />}} />
        <Route path='/profile/:userId?' render={ () => {return <ProfileContainer store={props.store} />}} />
        <Route path='/users' render={ () => {return <UsersContainer store={props.store} />}} />
        <Route path='/login' render={ () => { return <Login />} } />
    </div>
    
  );
}






export default App;
