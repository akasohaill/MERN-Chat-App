import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


const SignUp = () => {

  const navigate=useNavigate()
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })
  const checkboxHandler = (gender) => {
    setUser({ ...user, gender })
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
      if(res.data.success){
        navigate('/login')
        toast.success(res.data.message)
      }

    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    })
  }

  return (
    <div className="min-w-96 mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Signup</h1>
        <form action="" onSubmit={onSubmitHandler}>
          <div>
            <label className='label p-2'>
              <span className='font-medium text-black'>Full Name </span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className='w-full input input-bordered h-10 bg-white'
              type="text"
              placeholder='Enter Your Full Name Please'
            />
          </div>
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
          <div>
            <label className='label p-2'>
              <span className='font-medium text-black'>Confirm Password </span>
            </label>
            <input value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className='w-full input input-bordered h-10 bg-white'
              type="Confirm Password"
              placeholder='Again Enter Your Password Please'
            />
          </div>
          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input
                checked={user.gender === 'male'}
                onChange={() => checkboxHandler('male')}
                type="checkbox"
                defaultChecked
                className="checkbox mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input
                checked={user.gender === 'female'}
                onChange={() => checkboxHandler('female')}
                type="checkbox"
                defaultChecked
                className="checkbox mx-2" />
            </div>
          </div>

          <p className='text-center'>Already have an account?
            <Link className='text-blue-700 font-medium' to={'/login'}>
              Login
            </Link></p>
          <div>
            <button type='submit' className='btn btn-sm btn-block mt-2 border border-slate-700 '>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
