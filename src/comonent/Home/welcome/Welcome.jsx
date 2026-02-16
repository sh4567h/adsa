import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className='col-span-12 sm:col-span-10 md:col-span-6'>
           
            <div className='flex items-center justify-center mb-8'>
                <div className='border border-amber-700 bg-orange-800/20 flex justify-center items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-3 m-2 rounded-4xl text-white text-sm sm:text-base'>
                    <p>مرحباً بك في عدسة</p>
                </div>
            </div>
            
          
            <div className='flex flex-col items-center justify-center text-white text-center mb-12'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight tracking-tight'>
                    اكتشف <span className='text-amber-600'>فن </span><br className='hidden sm:block' /> 
                    التصوير الفوتوغرافي
                </h1>
                <p className='font-medium sm:font-black text-center text-gray-400 sm:text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0'>
                    انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
                </p>
            </div>
            <div className='flex justify-center mb-12'>
                <div >
                  <Link class="bg-linear-210 from-orange-500 to-amber-600 p-5 mx-1.5 rounded-2xl text-white group" to="/blog" ><span>استكشف المقالات</span>
                <i class="fa-solid fa-arrow-left mx-1"></i>
                </Link>
                 <Link class=" p-5  rounded-2xl text-neutral-700 border group mx-1.5" to="/about" ><span> استكشف المزيد</span>
                <i class="fa-solid fa-arrow-left mx-1"></i>
                </Link>
                  </div>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4'>
                <div className='text-white border border-gray-600 rounded-4xl p-3 flex flex-col items-center justify-center text-center hover:scale-105 transition-all'>
                    <p className='text-4xl sm:text-xl text-orange-500 mb-1'>
                        <i className="fa-solid fa-pen-fancy"></i>
                    </p>
                    <p className='text-2xl sm:text-2xl font-bold mb-2 text-orange-500'>6</p>
                    <p className='text-gray-400 text-sm'> الكاتب</p>
                </div>
                 
                 
                <div className='text-white border border-gray-600 rounded-4xl p-3 flex flex-col items-center justify-center text-center hover:scale-105 transition-all'>
                    <p className='text-4xl sm:text-xl text-orange-500 mb-1'>
                        <i className="fa-solid fa-folder-open"></i>
                    </p>
                    <p className='text-4xl sm:text-xl font-bold mb-2 text-orange-500'>4</p>
                    <p className='text-gray-400 text-sm'> تصنيفات</p>
                </div>
                
                      
                <div className='text-white border border-gray-600 rounded-4xl p-3  flex flex-col items-center justify-center text-center hover:scale-105 transition-all'>
                    <p className='text-2xl sm:text-xl text-orange-500 mb-1'>
                       <i className="fa-solid fa-users"></i>
                    </p>
                    <p className='text-2xl sm:text-sm font-bold mb-2 text-orange-500'>+10ألف </p>
                    <p className='text-gray-400 text-sm'>قارئ</p>
                </div>
                
               <div className='text-white border border-gray-600 rounded-4xl  p-3 flex flex-col items-center justify-center text-center hover:scale-105 transition-all'>
                    <p className='text-2xl sm:text-xl text-orange-500 mb-1'>
                        <i className="fa-solid fa-newspaper"></i>
                    </p>
                    <p className='text-4xl sm:text-xl font-bold mb-2 text-orange-500'>+50</p>
                    <p className='text-gray-400 text-sm'> مقالة</p>
                </div>
            </div>
        </div>
  )
}
