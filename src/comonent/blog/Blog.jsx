import React, { useState , useEffect } from 'react'
import Copmonent from '../comp/Component';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      fetch("/posts.json")
        .then(res => res.json())
        .then(data => {
          setPosts(data.posts);
          
        });
    }, []);

   const [currentButton , setCurrentButton] =useState('الكل')
   function handelButton(typeButton){

 setCurrentButton(typeButton)
   }
   const [currentSearch , setCurrentSearch] =useState('')
 function handelSearch(value){
 setCurrentSearch(value)

 }
 function filteredPosts() {
  return posts.filter((post) => {
    const matchCategory =
      currentButton === "الكل" ||
      post.category === currentButton;
    const matchSearch = post.title
      .toLowerCase()
      .includes(currentSearch.toLowerCase());

  
    return matchCategory && matchSearch;
  });
}
 
 
  return (
    <div className=' min-h-screen'>
        
         <div className='pb-12 flex flex-col justify-center items-center pt-28 bg-black bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]'>
     <div className='bg-amber-800/30 text-amber-700 border p-3 rounded-4xl'>
    <p>....مدونتنا</p>
     </div>
     <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">استكشف <span class="text-amber-700">مقالاتنا</span></h1>
    <p class="text-xl text-neutral-400 max-w-2xl mx-auto">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
     </div>
     <div className='bg-neutral-950 py-16 '>
         <div className=" border border-b-neutral-800 pb-7">

     <div className='grid grid-cols-1 md:grid-cols-2 container m-auto  '>
      <div >
        <input type="text" onInput={(e)=>handelSearch(e.target.value)} placeholder='ابحث في المقالات  ...'  className='p-3 rounded-3xl text-neutral-600 border border-neutral-600 w-75 hover:border-amber-700 outline-none focus:border-amber-700 outline-none'/>
      </div>
    <div className='grid grid-cols-4 md:grid-cols-6 gap-2 '>

 <button onClick={()=>handelButton('الكل')} className={currentButton ==='الكل' ? 'bg-amber-700 text-white rounded-3xl ' :'bg-neutral-900 text-neutral-600 border rounded-3xl hover:border-amber-700 outline-none'}>
 الكل
 </button>
<button onClick={()=>handelButton("إضاءة")} className={currentButton ==="إضاءة" ? 'bg-amber-700 text-white rounded-3xl ' :'bg-neutral-900 text-neutral-600 border rounded-3xl hover:border-amber-700 outline-none'}>
اضاءة
 </button>

<button onClick={()=>handelButton("بورتريه")}  className={currentButton ==="بورتريه" ? 'bg-amber-700 text-white rounded-3xl ' :'bg-neutral-900 text-neutral-600 border rounded-3xl hover:border-amber-700 outline-none'}>
بورتريه
 </button>
<button onClick={()=>handelButton("مناظر طبيعية")} className={currentButton ==="مناظر طبيعية"? 'bg-amber-700 text-white rounded-3xl ' :'bg-neutral-900 text-neutral-600 border rounded-3xl hover:border-amber-700 outline-none'}>
مناظر طبيعية
 </button>

 <button onClick={()=>handelButton('تقنيات')} className={currentButton ==='تقنيات' ? 'bg-amber-700 text-white rounded-3xl ' :'bg-neutral-900 text-neutral-600 border rounded-3xl hover:border-amber-700 outline-none'}>
تقنيات
 </button>

 <button onClick={()=>handelButton('معدات')} className={currentButton ==='معدات'? 'bg-amber-700 text-white rounded-3xl ' :'bg-neutral-900 text-neutral-600 border rounded-3xl hover:border-amber-700 outline-none'}>
معدات
 </button>
    </div>
     </div>
    </div>

    <div >

 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container m-auto  mt-20">
  {filteredPosts().length >0  &&filteredPosts().map((post) => (
    <div key={post.id} className="border p-4">
     <Copmonent pro ={post}/>
    </div>
  ))}
</div>

    </div>
     </div>
  
    </div>
  )
}
