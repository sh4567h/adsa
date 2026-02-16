import {useState} from 'react'
import{Link , NavLink} from 'react-router-dom'
 import Logo from '../../../public/logo.png'

export default function Nav() {
 const [open, setOpen] = useState(false)
  
  return (
    <div>

        
 <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> 
<nav className="fixed top-0 left-0 right-0  bg-neutral-900 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 z-20">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
   
      <div className="flex flex-1 gap-x-50 md:items-center md:justify-start md:gap-x-40 lg:gap-x-80">
        <div className="flex shrink-0 items-center">
          <div className='me-2.5 rounded-full w-10'> 
            <img src={Logo} alt="logo" className='w-full rounded-full' />
          </div>
          <span>
            <p className='font-bold text-white text-2xl'>عدسة</p> 
            <p className='text-amber-800'> عالم التصوير الفوتوغرافي</p>
          </span>
        </div>
     <div className="hidden md:flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626] ">
  <NavLink className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300  text-white" to='home'>الرئيسية</NavLink>
  <NavLink className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-white" to='blog'>المدونة</NavLink>
  <NavLink className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-white text-nowrap" to='about' >من نحن</NavLink>
      </div>
         <div>
     <div className='hidden md:flex bg-amber-700 rounded-full p-2.5 text-white  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
      <Link className=" rounded-full text-sm font-medium  " to='blog'> ابدأ القراءة</Link>
 
     </div>

    <div>
        <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-amber-800 text-white px-4 py-2 rounded-lg flex items-end"
        aria-expanded={open}
        aria-label="تبديل القائمة"
      >
        {open ? '✕' : '☰'} 
      </button>
    </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-neutral-900 text-white border-2 border-neutral-700 rounded-lg mt-2 shadow-lg ">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              to="/home"
              className="block px-3 py-2 rounded hover:bg-amber-700 transition"
              onClick={() => setOpen(false)} 
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/blog"
              className="block px-3 py-2 rounded hover:bg-amber-700 transition"
              onClick={() => setOpen(false)}
            >
              المدونة
            </NavLink>
            <NavLink
              to="/about"
              className="block px-3 py-2 rounded hover:bg-amber-700 transition"
              onClick={() => setOpen(false)}
            >
              من نحن
            </NavLink>
          </div>
        </div>
      )}

        </div>
      

      </div>
      
    </div>
  </div>
 
</nav>






    </div>
  )
}
