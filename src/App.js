 // App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import AdminPanel from './AdminPanel';
import Login from './Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/admin" component={AdminPanel} />
          {/* Other routes can go here */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 {/*
import './App.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count+1);
  };

  const decrement = () => {
    setCount(count-1);
  };

  return (
          <div>  
          
        
         <Header/>
          <Body/>
         
         <Footer count={count} increment={increment} decrement={decrement}  />   
         </div>


  );
}

export default App;
*/}