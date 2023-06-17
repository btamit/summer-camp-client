import React from 'react';
import useAuth from '../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className='text-5xl text-center font-bold'>Welcome back,{user.email} </h2>
        </div>
    );
};

export default UserHome;