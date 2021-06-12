import React, {useEffect, useState} from 'react'
import {Avatar, IconButton, Button} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import './Sidebar.css'
import RateReviewOutlinedIcon  from '@material-ui/icons/RateReviewOutlined'
import SidebarChat from './SidebarChat'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import db, { auth } from './firebase'
function Sidebar() {
   const user = useSelector(selectUser);
   const [chats, setChats] = useState([]);

   useEffect(() => {
      // db.collection('chats').onSnapshot((snapshot => (
      //    setChats (
      //       snapshot.docs.map((doc)=>({
      //          id: doc.id,
      //          data: doc.data(),
      //       }))
      //    )
      // )))
      db.collection('chats').onSnapshot((snapshot) =>(
         setChats(
            snapshot.docs.map((doc)=>({
               id:doc.id,
               data: doc.data(),
            }))
         )
      ))
      // ozgartirdim
   }, [])


      const addChat = () => {
         const chatName = prompt('Введите имя чата');

         if (chatName) {
            db.collection('chats').add({
               chatName: chatName,
            });
         }
      };
 return (
  <div className='Sidebar'>
   <div className='sidebar__header'>
<Avatar onClick={() => auth.signOut()} 
// login qilgandan kegin togrilayman rasimni
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGPomLvDR7O4uzkMVArtsBTc2gpQZw4YZAg&usqp=CAU' className='sidebar__avatar'/>
<Button className='sidebar__Logoutbtn' onClick={() => auth.signOut()}>LogOut</Button>
<div className='sidebar__input'>

 <SearchIcon/>
 <input type='text' placeholder="Search" />
</div>
<IconButton variant='outlined' className='sidebar__inputButton'>
 <RateReviewOutlinedIcon onClick={addChat} />
</IconButton>
   </div>
   <div className='sidebar__chats'>
      {/* {chats.map(({id, data: {chatName} })=>{
    <SidebarChat key={id} id={id} chatName={chatName}/>
      })} */}
      
      {chats.map(({id, data: { chatName } }) => (
         <SidebarChat key={id} id={id} chatName={chatName} />
      ) )}
      {/* ozgartirdim */}
   </div>
  </div>
 )
}

export default Sidebar
