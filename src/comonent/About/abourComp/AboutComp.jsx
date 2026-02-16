import React from 'react'

export default function AboutComp(props) {
     const {avatar,name,role}=props.pro
     
  return (
    <div className='flex flex-col rounded-2xl justify-center items-center bg-neutral-900 border border-neutral-600 p-6 text-center group hover:border-orange-500/30 transition-all duration-300'>
 <div className='rounded-full group-hover:ring-orange-500/30 transition-all '>
    <img src={`${avatar}`} alt={name}  className='w-full rounded-full'/>
 </div>

<div>
    <h2 className='text-white text-lg font-bold'>{name}</h2>
    <p className='text-amber-700 font-medium mb-4' >{role}</p>
</div>
<div className='flex  '>
    <span className='mx-1 w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors'><i class="fa-brands fa-linkedin"></i></span>
        <span className='mx-1 w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors'><i class="fa-brands fa-x-twitter"></i></span>
          <span className='mx-1 w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors'><i class="fa-brands fa-github"></i></span>
</div>


    </div>
  )
}

