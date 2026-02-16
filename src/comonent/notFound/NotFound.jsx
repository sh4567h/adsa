import React from 'react'

export default function NotFound() {
  return (
    <div className='bg-black flex justify-center items-center py-40 h-screen'>
        <p className='text-3xl text-white'>
            <span className='text-red-600'><i class="fa-solid fa-bullhorn"></i></span>
            Not Found <br />
            <span className='text-3xl text-amber-700'>
                404 Erorr
            </span>
        </p>
    </div>
  )
}
