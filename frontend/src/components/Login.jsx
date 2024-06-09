import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser } from '../redux/userSlice'


const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const onSubmitHandler =async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/login`, user,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
        navigate('/')
        dispatch(setAuthUser(res.data))
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
    }
    setUser({
      username: "",
      password: ""
    })
  }
  return (
    <div className="min-w-96 mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className='label p-2'>
              <span className='font-medium text-black'>Username </span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='w-full input input-bordered h-10 bg-white'
              type="text"
              placeholder='Enter Your Username Please'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='font-medium text-black'>Password </span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='w-full input input-bordered h-10 bg-white'
              type="password"
              placeholder='Enter Your Password Please'
            />
          </div>
          <p className='text-center'>Create a new account?
            <Link className='text-blue-700 font-medium' to={'/register'}>
              SignUp
            </Link></p>
          <div>
            <button type='submit' className='btn btn-sm btn-block mt-2 border border-slate-700 '>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
