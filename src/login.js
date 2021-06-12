import { Button } from '@material-ui/core'
import React from 'react'
import '../src/login.css'
import { auth, provider } from './firebase'

function login() {
 const signIn = () => {
  auth.signInWithPopup(provider).catch((error)=> alert(error.message));
 }

 return (
  <div className="login">
   <div className="login__logo">
    <img src="https://www.macworld.co.uk/cmsdata/features/3654385/messages_ios_9_icon_800home_thumb1200_4-3.jpg" alt="Imessange logo"/>
    <h1>iMessage</h1>
   </div>
   <Button onClick={signIn}>Sign In</Button>
  </div>
 )
}

export default login
