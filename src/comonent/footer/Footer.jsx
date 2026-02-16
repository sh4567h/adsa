import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-black -mt-5 pt-5 pb-6'>
  <div className='bg-neutral-950  pt-10  m-auto border border-t-gray-800 mt-5'>
<div className='container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
<div  className='m-5'>
<Link to='/home' className='flex'>
<div className='bg-linear-180 from-amber-700 to-amber-600 w-5 p-6 h-5 flex justify-center items-center text-white  rounded-2xl'>
    <p >ع</p>
</div>
<p className='text-white ps-3 pt-2 text-xl'>عدسة </p>
</Link >

<p className='text-neutral-600 text-sm'>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>

<div className='mt-8'>

<span className='p-3 rounded-2xl bg-neutral-900 border  text-neutral-500 mx-0.5 transition-all duration-100 ease-in hover:scale-105 hover:border-amber-700'>
    <i class="fa-brands fa-github"></i>
</span>
<span className='p-3 rounded-2xl bg-neutral-900 border  text-neutral-500 mx-0.5 transition-all duration-100 ease-in hover:scale-105 hover:border-amber-700 '>
  <i class="fa-brands fa-x-twitter"></i>
</span>
<span className='p-3 rounded-2xl bg-neutral-900 border  text-neutral-500 mx-0.5 transition-all duration-100 ease-in hover:scale-105 hover:border-amber-700'>
  <i class="fa-brands fa-square-instagram"></i>
</span>
<span className='p-3 rounded-2xl bg-neutral-900 border  text-neutral-500 mx-0.5 transition-all duration-100 ease-in hover:scale-105 hover:border-amber-700'>
   <i class="fa-brands fa-youtube"></i>
</span>


</div>


</div>


<div className='m-5'>
<div className='flex'>
   <span class="w-12 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full m-3 text-amber-100/5">
    ........
  </span>
  <p className='text-white'>
 
  استكشف
</p>
</div>
<ul>
  <li className='my-3 text-neutral-500 transition-all duration-300 hover:-translate-x-2 group hover:text-amber-700'>
    <i class="fa-solid fa-angle-left invisible group-hover:visible py-2.5"></i>
   <a href="#top" className='px-1 py-2.5 rounded-full text-sm font-medium  '> الرئيسية</a>
  </li>
  <li className='my-3 text-neutral-500 transition-all duration-300 hover:-translate-x-2 group hover:text-amber-700'>
     <i class="fa-solid fa-angle-left invisible group-hover:visible py-2.5"></i>
 
    <Link className="px-1.5 py-2.5 rounded-full text-sm font-medium transition-all duration-300" to='/blog'>المدونة</Link>
  
  </li>
  <li className='my-3 text-neutral-500 transition-all duration-300 hover:-translate-x-2 group hover:text-amber-700'>
    <i class="fa-solid fa-angle-left invisible group-hover:visible py-3"></i>
 
    <Link className="px-1 py-2.5 rounded-full text-sm font-medium transition-all duration-300 " to='/about'> من نحن</Link>
  
  </li>
</ul>
</div>

<div className='m-5'>
<div className='flex'>
   <span class="w-12 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full m-3 text-amber-100/5">
    ........
  </span>
  <p className='text-white'>
 
 التصنيفات
</p>
</div>
<ul>
  <li className='my-3 text-neutral-500 transition-all duration-300 hover:-translate-x-2 group hover:text-amber-700'>
    <i class="fa-solid fa-angle-left invisible group-hover:visible py-2.5"></i>
   <a href="#top" className='px-1 py-2.5 rounded-full text-sm font-medium  '> اضاءة</a>
  </li>
  <li className='my-3 text-neutral-500 transition-all duration-300 hover:-translate-x-2 group hover:text-amber-700'>
     <i class="fa-solid fa-angle-left invisible group-hover:visible py-2.5"></i>
 
    <Link className="px-1.5 py-2.5 rounded-full text-sm font-medium transition-all duration-300" to='/blog'> بورتريه</Link>
  
  </li>
  <li className='my-3 text-neutral-500 transition-all duration-300 hover:-translate-x-2 group hover:text-amber-700'>
    <i class="fa-solid fa-angle-left invisible group-hover:visible py-3"></i>
 
    <Link className="px-1 py-2.5 rounded-full text-sm font-medium transition-all duration-300 " to='/about'> مناظر طبيعية</Link>
  
  </li>
    <li className='my-3 text-neutral-500 transition-all duration-300 hover:-translate-x-2 group hover:text-amber-700'>
    <i class="fa-solid fa-angle-left invisible group-hover:visible py-3"></i>
 
    <Link className="px-1 py-2.5 rounded-full text-sm font-medium transition-all duration-300 " to='/about'> تقنيات</Link>
  
  </li>
</ul>
</div>

<div className='m-5'>
<div className='flex'>
   <span class="w-12 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full m-3 text-amber-100/5">
    ........
  </span>
  <p className='text-white'>
 
ابقى على اطلاع
</p>
</div>
<p className='text-sm text-neutral-500 my-5'>
  اشترك للحصول على أحدث المقالات والتحديثات.
</p>

<div className='flex flex-col mb-7'>
      <input type="email" placeholder='أدخل بريدك الالكتروني' className='text-neutral-500 border focus:border-amber-700 w-2/3 mx-4 p-3 rounded-xl my-4' />

 <button className='bg-linear-120 from-amber-600 to-amber-500 p-4 rounded-3xl text-white transition-all duration-1000 ease-in-out hover:scale-110 hover:bg-amber-700' >
    
   اشترك الان

 </button>
  </div>
</div>

  </div>
</div>

    </div>
  )
}
