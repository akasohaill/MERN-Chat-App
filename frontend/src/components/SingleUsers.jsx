import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice';


const SingleUsers = ({ user }) => {
    const dispatch = useDispatch();
    const { selectedUser, onlineUsers } = useSelector(store => store.user)
    const isOnline = onlineUsers?.includes(user._id);
    const selectedUserHandler = (user) => {
        dispatch(setSelectedUser(user))
    }

    return (
        <>
            <div onClick={() => selectedUserHandler(user)} className={`${selectedUser?._id === user?._id ? 'bg-zinc-800 text-black' : ''} flex gap-2 items-center cursor-pointer rounded text-white hover:bg-zinc-800 p-2`}>
                <div className={`avatar ${isOnline ? "online" : " "} `}>
                    <div className='w-12 rounded-full'>
                        <img src={user?.profilePhoto} />
                    </div>
                </div>
                <div className='flex flex-1 flex-col'>
                    <div className='flex jusify-between gap-2'>
                        <p>{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default SingleUsers
