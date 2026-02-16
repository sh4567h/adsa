import React from 'react'
import { Link } from 'react-router-dom';
export default function InfoHome() {
  return (
   <section className='bg-neutral-950 my-20 py-20'>
<div className="container m-auto">
   <div className='flex flex-col justify-center items-center mb-20'>
      <div className='text-amber-700 border border-amber-700 bg-amber-800/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mx-2 md:mx-4 text-sm md:text-base inline-block '>
       ... تصنيفات
      </div>

      <h2 className='text-white font-bold md:text-5xl sm:text-4xl'>استكشف حسب الموضوع</h2>
      <p className='text-neutral-700 mt-4'>اعثر على محتوى مصمم حسب اهتماماتك</p>
   </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4'>
             <Link to='/blog'>
               <div className='text-white group hover:bg-orange-500 border border-gray-600 rounded-4xl p-3 flex flex-col items-start justify-center text-center hover:scale-105 transition-all'>
                    <span className='text-4xl group-hover:text-white  sm:text-xl text-orange-500 mb-1 bg-amber-700/30 p-4 rounded-3xl'>
                        <i className="fa-solid fa-sun"></i>
                    </span>
                <p className='text-gray-400 text-xl ms-1.5'> الكاتب</p>
                 <p className='text-sm  font-bold mb-2 text-neutral-500-500 ms-1.5'>3 مقالات</p>
                   
                </div>
             
             </Link>                 
                 
              <Link  to='/blog'>
               <div className='text-white group hover:bg-orange-500 border border-gray-600 rounded-4xl p-3 flex flex-col items-start justify-center text-center hover:scale-105 transition-all'>
                    <span className='text-4xl group-hover:text-white sm:text-xl text-orange-500 mb-1 bg-amber-700/30 p-4 rounded-3xl'>
                        <i class="fa-solid fa-user"></i>
                    </span>
                    <p className='text-gray-400 text-xl ms-1.5'> بورتريه</p>
                     <p className='text-sm  font-bold mb-2 text-neutral-500-500 ms-1.5'>3 مقالات</p>
                   
                </div>
              
              
              </Link>
                 
                
                <Link  to='/blog'>
                      
                 <div className='text-white   group hover:bg-orange-500 border border-gray-600 rounded-4xl p-3 flex flex-col items-start justify-center text-center hover:scale-105 transition-all'>
                    <span className='text-4xl group-hover:text-white sm:text-xl text-orange-500 mb-1 bg-amber-700/30 p-4 rounded-3xl'>
                      <i class="fa-solid fa-image"></i>
                    </span>
                    <p className='text-gray-400 text-xl ms-1.5'> مناظر طبيعية</p>
                     <p className='text-sm  font-bold mb-2 text-neutral-500-500 ms-1.5'>2 مقالات</p>
                   
                </div>
                 
                
                </Link>
                <Link to='/blog'>
                 <div className='text-white   group hover:bg-orange-500 duration-500 border border-gray-600 rounded-4xl p-3 flex flex-col items-start justify-center text-center hover:scale-105 transition-all'>
                    <span className='text-4xl group-hover:text-white sm:text-xl text-orange-500 mb-1 bg-amber-700/30 p-4 rounded-3xl'>
                        <i class="fa-solid fa-sliders"></i>
                    </span>
                    <p className='text-gray-400 text-xl ms-1.5'> تقنيات</p>
                     <p className='text-sm  font-bold mb-2 text-neutral-500-500 '>5 مقالات</p>
                   
                </div>
                </Link>
               
                  <Link to='/blog'>
                   <div className='text-white border border-gray-600 rounded-4xl p-3 flex flex-col items-start justify-center text-center hover:scale-105 transition-all
                   group hover:bg-orange-500 duration-500
                   
                   '>
                    <span className='text-4xl sm:text-xl group-hover:text-white text-orange-500 mb-1 bg-amber-700/30 p-4 rounded-3xl'>
                        <i class="fa-solid fa-sun"></i>
                    </span>
                    <p className='text-gray-400 text-xl ms-1.5'> معدات</p>
                     <p className='text-sm  font-bold mb-2 text-neutral-500-500 ms-1.5'>3 مقالات</p>
                   
                </div>
                  
                  </Link>
            </div>
 




</div>

</section>
  )
}
