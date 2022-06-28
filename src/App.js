import { onAuthStateChanged } from 'firebase/auth';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes,  BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { login, logout } from './features/userSlice';
import { auth } from './firebase';
import Homescreen from './screens/Homescreen';
import Loginscreen from './screens/Loginscreen';


function App() {
  const user = null;

  const dispatch = useDispatch();
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
          dispatch(login({
            uid: user.uid,
            email: user.email
          }))
      }
      else{
        dispatch(logout)
      }
    })
  
    return unsubscribe;
  }, [])
  
  return (
     <Router>
        {!user ? (
        <Loginscreen />
      ) : (
      <Routes>
        <Route exact path='/' element={<Homescreen />} />
      </Routes>
      )}
     </Router>    
  )
}

export default App;