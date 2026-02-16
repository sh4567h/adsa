import React from 'react'
import{Link } from 'react-router-dom'
 
export default function Copmonent(props) {
const arts =props.pro
    const {author , category ,content ,date,excerpt,featured ,id,image ,readTime, slug,tags,title} =props.pro
  const {avatar,name,role}=author


  return (
   
  <article className="gold-hour-card bg-neutral-900 rounded-4xl overflow-hidden border border-white/40 transition-all  group hover:border-amber-700">
     <div className="w-full bg-neutral-700 relative flex">
       <img src={`${image}`} className='w-full transition delay-150 duration-1000 ease-in-out hover:-translate-y-1 hover:scale-115' alt= {title} />
       
       <span className="absolute top-4 right-4 md:top-6 md:right-6 text-xs md:text-sm font-bold text-white bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/20">
         {category}
      </span>
       
    </div>
    <div className="p-5 md:p-8 lg:p-10 space-y-5 md:space-y-6">
       <div className="flex flex-wrap items-center gap-3 text-neutral-600 text-sm md:text-base font-medium  pb-4 md:pb-5">
        <span className="flex items-center gap-1.5 px-4 py-2 rounded-full">
          <i className="fa-regular fa-clock"></i>
         {readTime}
        </span>
        <span className="flex items-center gap-1.5  px-4 py-2 rounded-full">
          <i className="fa-regular fa-calendar-days"></i>
         {date}
        </span>
      </div>
       <h1 className="text-2xl  font-extrabold text-white leading-tight tracking-tight group-hover:text-amber-700">
       {title}
        </h1>
        <p className="text-neutral-600  text-sm leading-relaxed font-light">
       {excerpt}
      </p>
       <div className="flex items-center justify-between flex-wrap gap-4 pt-3 md:pt-4 border-t border-gray-400 mt-6 md:mt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12  rounded-full  flex items-center justify-center border-0 text-white font-bold text-lg shadow-md">
          <img className=' rounded-full' src={`${avatar}`} alt= {role} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm md:text-base">{name}</span>
            <span className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
            {role}
            </span>
          </div>
        </div>
        <Link to='/hidden' state={arts} className="bg-amber-700/30 border border-amber-700 hover:bg-amber-700 rounded-4xl  text-amber-700 text-sm md:text-base px-5 py-2 font-medium transition flex items-center gap-2 shadow-sm">
          <i className="fa-solid fa-angle-left"></i>

        </Link>
      </div>
    </div>
  </article>
  
  )
}
