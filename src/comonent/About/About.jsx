import React from 'react'
import { useEffect, useState } from "react";
import AboutComp from './abourComp/AboutComp';
import { Link } from 'react-router-dom';

export default function About() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("/posts.json")
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        
      });
  }, []);
  return (
    <div className='bg-black pt-20'>
           <div className='pb-12 p-4 flex flex-col justify-center items-center pt-28 bg-black bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]'>
     <div className='bg-amber-800/30 text-amber-700 border p-3 rounded-4xl'>
    <p>....من نحن</p>
     </div>
    
     <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 my-1.5"> مهمتنا هي  <span class="text-amber-600" > الإعلام والإلهام </span></h1>
    <p class="text-xl text-neutral-400 max-w-2xl mx-auto my-2.5">
        مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.</p>
     </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-2">
  <div className="bg-neutral-900 border border-neutral-500 p-6 rounded-3xl flex flex-col justify-center items-center">
    <i className="fa-solid fa-users text-2xl text-orange-500 mb-2 block"> </i>
    <div className="text-3xl font-bold text-yellow-600 mb-1">
      +2مليون
    </div>
    <div className="text-sm text-neutral-500">قارئ شهرياً
    </div>
  </div>
  <div className="bg-neutral-900 border border-neutral-500 p-6 rounded-3xl flex flex-col justify-center items-center">
    <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-2 block" />
    <div className="text-3xl font-bold gradient-text mb-1 text-yellow-600">
      +500
    </div>
    <div className="text-sm text-neutral-500">مقالة منشورة
    </div>
  </div>
  <div className="bg-neutral-900 border border-neutral-500 p-6 rounded-3xl flex flex-col justify-center items-center">
    <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-2 block"> </i>
    <div className="text-3xl font-bold gradient-text mb-1 text-yellow-600">
      +50
    </div>
    <div className="text-sm text-neutral-500">كاتب خبير
    </div>
  </div>
  <div className="bg-neutral-900 border border-neutral-500 p-6 rounded-3xl flex flex-col justify-center items-center">
    <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 block" />
    <div className="text-3xl font-bold gradient-text mb-1 text-yellow-600">
      +15
    </div>
    <div className="text-sm text-neutral-500">تصنيف
    </div>
  </div>
</div>

<div className="py-20 bg-[#111111] border-y border-[#262626] mt-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
        <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />قيمنا
        <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
      </h2>
      <p className="text-lg text-neutral-400 max-w-2xl mx-auto">المبادئ التي توجه كل ما نقوم بإنشائه
        </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
          <div className="relative">
           <i class="fa-solid fa-bullseye text-orange-600 text-3xl"></i>
             <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">الجودة أولاً
              </h3>
              <p className="text-neutral-400 text-sm">محتوى مدروس ومكتوب بخبرة
                </p>
                </div>
                </div>
                <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                 <div className="relative">
                  <i class="fa-solid fa-bolt text-orange-600 text-3xl"></i>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">تركيز عملي
                    </h3><p className="text-neutral-400 text-sm">أمثلة واقعية يمكنك تطبيقها اليوم
                      </p>
                      </div>
                      </div>
                      <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                       <div className="relative">
                       <i class="fa-solid fa-handshake text-orange-600 text-3xl"></i>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">المجتمع
                          </h3>
                          <p className="text-neutral-400 text-sm">تعلم مع آلاف المصورين
                            </p>
                            </div>
                            </div>
                            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                             <div className="relative">
                              <i class="fa-solid fa-recycle text-orange-600 text-3xl"></i>
                               <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">دائماً محدث
                                </h3>
                                <p className="text-neutral-400 text-sm">أحدث الاتجاهات وأفضل الممارسات
                                  </p>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
  </div>

  <div>
    <div className='flext justify-center items-center pt-28 p-5'>
<div className='flex justify-center items-center '>
   <div className="bg-amber-700 text-white rounded-4xl p-3 mb-4 w-15">فريقنا</div>
   
</div>
     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">تعرف على كتابنا</h2>
      <p className="text-lg text-neutral-400 max-w-2xl mx-auto">فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container m-auto gap-7 pt-18'>
  {posts.length>0 && posts.map((product)=>{return <AboutComp pro ={product.author}/>})}
    </div>


    
  </div>
<div className='bg-linear-240 from-orange-500 to-amber-700 h-96 mt-32'>
<div className="container m-auto">
  <div className='flex flex-col justify-center items-center pt-12'>
<h2 className='text-white text-2xl my-1.5'>لديك أسئلة؟ دعنا نتحدث!</h2>
<p className=' text-white text-xl my-1.5 p-2.5'>

  نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
  <br/> أو تريد فقط إلقاء التحية، لا تتردد في التواصل.


</p>
<div className='mt-12 flex'>
  <div>
    <Link to='/blog'>
<button className='p-6 mx-1.5 text-white border rounded-2xl transition-all duration-300 hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-white hover:text-black hover:border-0'> تصفح المقالات </button>
</Link>
  </div>
 <div>
  <button className='p-6 mx-1.5 text-white border rounded-2xl transition-all duration-300 hover:-translate-x-1.5 hover:-translate-y-1.5 bg-neutral-950 hover:bg-neutral-900'> تواصل معانا</button>

 </div>
</div>
  </div>
</div>

</div>
  
</div>
  )
}
