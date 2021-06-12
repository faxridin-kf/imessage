import React, {useEffect} from 'react';
import Imessage from './Imessage'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './login'
import {auth} from './firebase'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
     if(authUser) {
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName,

      })
      );
     } else {
      dispatch(logout())
     }
    })
   }, [])

  return (
    <div className="app">
   {user ?  <Login/> :  <Imessage/>}
    </div>
  );
}

export default App;
