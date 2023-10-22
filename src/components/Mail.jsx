import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useUserData from '../hooks/useUserData';

const Mail = () => {
    
    useUserData();

    const userDetails = useSelector((store) => store.user?.userItems[0]?.list);

    if (!userDetails || userDetails.length === 0) {
        return <div>Refresh the page</div>;
    }

    return (
        <div className='m-2 p-2'>
            {userDetails.map((userItem) => (
                <Link key={userItem.id} to={`/mail/${userItem.id}`}>
                    <div className='my-2 py-2 bg-[#f4f5f9] flex gap-3 text-[#636363] rounded-lg border-2 border-[#cfd2dc] px-5 active:border-[#E54065] focus:border-[#E54065]' >
                        <div className='bg-[#E54065] h-max px-3 py-1 rounded-full text-white font-semibold'>F</div>
                        <div>
                            <p className='text-sm flex gap-1'>From:  <h2 className='font-semibold'>{userItem.from.name}</h2> <span className='font-semibold'>{userItem.from.email}</span></p>
                            <p className='text-sm'>Subject: <span className='font-semibold'>{userItem.subject}</span></p>
                            <p className='text-sm'>{userItem.short_description}</p>
                            <p className='text-xs font-semibold'>{new Date(userItem.date).toLocaleString()}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Mail;
