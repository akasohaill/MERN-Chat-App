import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../src/components/Home'
import SignUp from '../src/components/SignUp'
import Login from '../src/components/Login'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import io from 'socket.io-client'
// import { setSocket } from './redux/socketSlice'
// import { setOnlineUsers } from './redux/userSlice'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/register',
    element:<SignUp/>
  },
  {
    path:'/login',
    element:<Login/>
  },
])


function App() {
  // const {authUser} = useSelector(store=>store.user);
  // const {socket} = useSelector(store=>store.socket);
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   if(authUser){
  //     const socketio = io('http://localhost:8080', {
  //         query:{
  //           userId:authUser._id
  //         }
  //     });
  //     dispatch(setSocket(socketio));

  //     socketio?.on('getOnlineUsers', (onlineUsers)=>{
  //       dispatch(setOnlineUsers(onlineUsers))
  //     });
  //     return () => socketio.close();
  //   }else{
  //     if(socket){
  //       socket.close();
  //       dispatch(setSocket(null));
  //     }
  //   }

  // },[authUser]);
 

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
