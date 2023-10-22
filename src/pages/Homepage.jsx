import React from 'react'
import Mail from '../components/Mail'

const Homepage = () => {
  return (
    <div className='w-full h-full p-10 '>
        <div className='flex'>
        <div className='px-4 text-gray-600 font-semibold'>Filter By:</div>
        <div className='px-2 text-gray-600 font-semibold'>Unread</div>
        <div className='px-2 text-gray-600 font-semibold'>Read</div>
        <div className='px-2 text-gray-600 font-semibold'>Favourites</div>
        </div>
        
        <Mail/>
    </div>
  )
}

export default Homepage