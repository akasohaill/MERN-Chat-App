import React from 'react'
import { ImSearch } from "react-icons/im";
import MoreUsers from './MoreUsers';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'


const Sidebar = () => {
  const navigate=useNavigate()
  const logOutHandler= async ()=>{
    try {
      const res=await axios.get(`http://localhost:8080/api/v1/user/logout`)
      console.log(res);
      navigate('/login')
      toast.success(res.data.message)
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form action="" className='flex items-center gap-2'>
        <input
          type='text'
          className='input input-bordered rounded-md bg-white'
          placeholder='Search...'
        />
        <button type='submit' className='btn bg-zinc-500'>
          <ImSearch />
        </button>
      </form>
      <div className="divider px-3"></div>
      <MoreUsers />
      <div className='mt-2'>
        <button onClick={logOutHandler} className='btn btn-sm'>LogOut</button>
      </div>
    </div>
  )
}

export default Sidebar
