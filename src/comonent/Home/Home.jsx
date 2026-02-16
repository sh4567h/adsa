import React from 'react'



import { useEffect, useState } from "react";
import CompHome from './homeCopmonent/CompHome'
import { Link } from 'react-router-dom';
import Copmonent from '../comp/Component';
import Welcome from './welcome/Welcome';
import InfoHome from './infoHome/InfoHome';
export default function Home() {

const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch("/posts.json")
    .then(res => res.json())
    .then(data => {
      setPosts(data.posts);
      
    });
}, []);
// 
 


 console.log('posts' ,posts)
  return (
    


<div id='top' className='bg-black bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)]bg-[size:60px_60px] min-h-screen'>
    <div className='my-16 mb-28'>
        <div className='grid grid-cols-12 px-4 sm:px-6 lg:px-8 py-8'>
        <div className='hidden sm:block sm:col-span-1 md:col-span-3'></div>
        
      
        <Welcome/>
        
       
        <div className='hidden sm:block sm:col-span-1 md:col-span-3'></div>

     
    </div>
    </div>


    <div>
    <InfoHome/>
</div>
<div className="container m-auto grid gap-y-6">
    <div>
   <div className='text-amber-700 border border-amber-700 bg-amber-800/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mx-2 md:mx-4 text-sm md:text-base inline-block'>
       ... مميز
      </div>
   <div className='flex justify-between' >
    <div >
         <h2 className='text-white  text-5xl my-2 '>مقالات مختارة</h2>
    <p className='text-neutral-500 text-xs'>
        محتوى منتقى لبدء رحلة تعلمك
    </p>
    </div>
    <div>
        <Link className='bg-amber-700  p-4 rounded-4xl text-white'   to="/plog">
         عرض الكل 
       <i class="fa-solid fa-angle-left"></i> 
        </Link>
    </div>



   </div>

    </div>
   
  <div className="container m-auto grid gap-y-6">
 
   {posts.length > 0 && <CompHome pro={posts[0]} />}
    {posts.length > 0 && <CompHome pro={posts[1]} />}
     {posts.length > 0 && <CompHome pro={posts[2]} />}

</div>
</div>




<div>





   <div className='my-16 py-20 container m-auto '>
   <div>
    <div className='text-amber-700 border border-amber-700 bg-amber-800/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mx-2 md:mx-4 text-sm md:text-base inline-block'>
       ... 
الأحدث
      </div>
   <div className='flex justify-between' >
    <div >
         <h2 className='text-white  text-5xl my-3'>
          أحدث المقالات

         </h2>
    <p className='text-neutral-500 text-xs my-4'>
       محتوى جديد طازج من المطبعة
    </p>
    </div>
    <div>
        <Link className='bg-amber-700  p-4 rounded-4xl text-white'   to="/plog">
        عرض جميع المقالات
       <i class="fa-solid fa-angle-left"></i> 
        </Link>
    </div>
   </div>

    </div>

 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-3 gap-y-5'>

    {posts.length>0 &&  <Copmonent pro ={posts[3]}/>}
     {posts.length>0 &&  <Copmonent pro ={posts[4]}/>}
 {posts.length>0 &&  <Copmonent pro ={posts[5]}/>}
  

 </div>

   </div>



   
</div>
 
 <section className='bg-black pb-20 '>
 
  <div className='bg-neutral-900 border border-neutral-600 p-7 rounded-2xl container m-auto w-100 lg:w-1/2 shadow-2xl shadow-amber-800'>

 <div className='flex  justify-center items-center  my-6'>
    <div className='bg-linear-60 from-amber-800 to-amber-600 text-white p-4 text-4xl rounded-2xl'>

    <i class="fa-solid fa-envelope"></i>
 </div>
 </div>
 <h2 className='text-4xl text-white text-center mb-3'>

     اشترك في
    
    <span className='text-amber-500 mx-2'> نشرتنا الإخبارية  </span>
 </h2>
 <p className='text-neutral-600 px-2'>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
  <form action="" className='my-9 '>

  <div className='flex mb-7'>
      <input type="email" placeholder='أدخل بريدك الالكتروني' className='text-neutral-500 border focus:border-amber-700 w-2/3 mx-4 p-3 rounded-xl' />

 <button className='bg-linear-120 from-amber-600 to-amber-500 p-4 rounded-3xl text-white transition-all duration-1000 ease-in-out hover:scale-110 hover:bg-amber-700' >
    
   اشترك الان

 </button>
  </div>

 <div className='grid grid-cols-3 md:grid-cols-4'>
    <div className='mx-4 flex'>
        <div className='w-8'>
        <img className='w-fullm rounded-full' src={posts.length>0 && `${posts[9].author.avatar}`} alt={posts.length>0 &&posts[9].author.role} />
    </div>
    <div className='w-8'>
        <img className='w-full rounded-full' src={posts.length>0 &&`${posts[10].author.avatar}`} alt={posts.length>0 &&posts[10].author.role} />
    </div>
    <div className='w-8'>
        <img className='w-full rounded-full' src={posts.length>0 &&`${posts[11].author.avatar}`} alt={posts.length>0 &&posts[11].author.role} />
    </div>
    </div>
   <div>
    <p className='text-gray-500 text-sm mx-4'>
 
 انضم لـ 

 <span className='text-white'> +10,000 
</span> 

مصور
   </p>
   </div>

 <div>
    <p className='text-gray-500 text-sm mx-4'>

بدون إزعاج

</p>
 </div>


<div className='flex justify-center items-center w'>
    <p className='text-amber-600 text-sm md:mx-4'>
إلغاء الاشتراك في أي وقت

</p>
</div>

 </div>
  </form>
  
  
  </div>
 
 
 </section>

</div>
  )
}
