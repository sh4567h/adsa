import React from 'react'

export default function CompHome(props) {

    const {author , category ,content ,date,excerpt,featured ,id,image ,readTime, slug,tags,title} =props.pro
    const {avatar,name,role}=author
  return (
   <div className='grid grid-cols-1 md:grid-cols-2 border-2 border-gray-600 bg-neutral-900 rounded-lg overflow-hidden group hover:border-amber-700'>
  <div className="overflow-hidden ">
    <img className=' w-full h-full object-cover transition delay-150 duration-1000 ease-in-out hover:-translate-y-1 hover:scale-115' src={`${image}`} alt={title} />
  </div>
  <div className="p-4 md:p-6">
    <div className='my-3 md:my-5'>
      <span className='text-amber-700 border border-amber-700 bg-amber-800/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mx-2 md:mx-4 text-sm md:text-base inline-block'>
        {category}
      </span>
       <span className='text-neutral-500 mx-2 md:mx-4 text-sm md:text-base'>{readTime}</span>
     
      
      <h2 className='text-2xl md:text-3xl lg:text-3xl text-white my-4 md:my-7 font-bold group-hover:text-amber-700'>
        {title}
      </h2>
      
      <p className='text-neutral-500 text-base md:text-xl lg:text-xl my-4 md:my-7 leading-relaxed'>
        {excerpt}
      </p>
    </div>
    <div className='flex flex-col lg:mt-30 sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-x-24'>
      <div className='flex items-center gap-3'>
        <div className='w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden'>
          <img className='w-full h-full object-cover' src={`${avatar}`} alt={name} />
        </div>
        <div>
          <p className='text-white font-medium'>{name}</p>
          <p className='text-neutral-600 text-sm'>{date}</p>
        </div>
      </div>
      <div className='self-end sm:self-auto'>
        <p className='text-amber-700 text-nowrap flex items-center cursor-pointer hover:text-amber-600 transition-colors'>
          اقرأ المقال 
          <i className="fa-solid fa-arrow-left-long px-1.5 py-1.5 text-lg"></i>
        </p>
      </div>
    </div>
  </div>
</div>
  )
}
