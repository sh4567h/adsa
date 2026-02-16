import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Hidden() {


    const location = useLocation()
    const { author, category, content, date, excerpt, featured, id, image, readTime, slug, tags, title } = location.state
    const { avatar, name, role } = author
    const lines = content.split("\n");
    return (
        <div className="bg-black">
            <div className=''>
                <img src={`${image}`} alt={title} className='w-full h-125 bg-cover bg-center opacity-60' />

                <div className='absolute bg-neutral-800/60 top-20 right-1.5 p-2 rounded-3xl'>

                    <span className='text-white'>
                        <Link to='/home'>
                            <i className="fa-solid fa-house"></i></Link>
                    </span>
                    <span className='text-neutral-500'><i class="fa-solid fa-angle-left"></i></span>
                    <span className='text-white' >
                        <Link to='/blog'>
                            المدونة
                        </Link>
                    </span>
                    <span className='text-neutral-500'><i class="fa-solid fa-angle-left"></i></span>
                    <span className='text-amber-700'>
                        {category}

                    </span>
                </div>

                <div className='absolute top-40 right-7  lg:right-40'>
                    <span className='bg-amber-700 text-white p-2 rounded-3xl mx-2'>
                        {category}
                    </span>
                    <span className='text-neutral-500 mx-2'>
                        <i class="fa-regular fa-calendar me-1"></i>
                        {date}
                    </span>

                    <span className='text-neutral-500 mx-2 text-sm'>
                        <i class="fa-regular fa-clock"></i>
                        {readTime}
                    </span>

                    <h2 className='text-3xl my-2 md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl'> {title}</h2>

                    <div className='flex bg-neutral-800 border border-neutral-600 w-fit rounded-2xl '>
                        <div className='rounded-4xl mx-2  w-15 p-2'>
                            <img className='w-full rounded-4xl' src={`${avatar}`} alt={name} />
                        </div>
                        <div className='p-2'>
                            <p className='text-white'>{name}</p>
                            <p className='text-neutral-600 text-sm'>{role}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container m-auto grid grid-cols-1 lg:grid-cols-12 relative gap-2.5' >

                <div className="space-y-6 pt-5 lg:col-span-7">
                    <div>
                        {lines.map((line, index) => {
                            if (line.startsWith("#")) {
                                const title = line.replace(/^\s*/, "");

                                return (
                                    <h2
                                        key={index}
                                        className="flex items-center gap-3 text-2xl font-bold text-white mt-8"
                                    >
                                        <span className="bg-orange-500 p-2 rounded-lg">
                                            <i class="fa-solid fa-camera"></i>
                                        </span>
                                        <span id={title}>{title}</span>


                                    </h2>
                                );
                            }
                            return (
                                <p key={index} className="text-neutral-600 leading-8">
                                    {line}
                                </p>
                            );
                        })}
                    </div>

                    <div>
                    <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
      <i className="fa-solid fa-tags text-orange-500" />
    </div>
    <h3 className="font-bold text-white">الوسوم</h3>
  </div>
  <div className="flex flex-wrap gap-2">
    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
      #{tags[0]}
    </span>
    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
      #{tags[1]}
    </span>
    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
      #{tags[2]}
    </span>
  </div>
</div>

                    </div>

               <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
    <img alt={name} className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20" src={`${avatar}`}/>
    <div className="text-center sm:text-right flex-1">
      <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">كاتب المقال
      </span>
      <h3 className="text-xl font-bold text-white mt-1">{name}
      </h3><p className="text-neutral-500 text-sm mb-3">{role}
      </p>
      <p className="text-neutral-400 text-sm leading-relaxed">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
      </p>
    </div>
  </div>
</div>




                </div>

                <div className=' py-7 left-0 lg:col-span-4'>
                    <div className='sticky top-5'>
                        <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                                    <i className="fa-solid fa-list text-orange-500" />
                                </div>
                                <h3 className="font-bold text-white">محتويات المقال</h3>
                            </div>
                            <nav className="space-y-2">
                                <div className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group">
                                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                                        1
                                    </span>
                                    <span className="text-sm">لماذا الساعة الذهبية؟</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group">
                                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                                        2
                                    </span>
                                    <span className="text-sm">التحضير المسبق
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group">
                                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">3
                                    </span>
                                    <span className="text-sm">إعدادات الكاميرا
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group">
                                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                                        4</span>
                                    <span className="text-sm">التكوين الفني</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group">
                                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                                        5</span>
                                    <span className="text-sm">الخلاصة
                                    </span>
                                </div>
                            </nav>
                        </div>

                        <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626] my-7">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                                    <i className="fa-regular fa-clock text-orange-500 text-xl mb-2" />
                                    <p className="text-white font-bold">{'{'}readTime{'}'}</p>
                                    <p className="text-neutral-500 text-xs">وقت القراءة</p>
                                </div>
                                <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                                    <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2" />
                                    <p className="text-white font-bold text-sm">{'{'}date{'}'}</p>
                                    <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                                </div>
                            </div>
                        </div>

                     <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
  <div className="text-center">
    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <i className="fa-solid fa-envelope text-orange-500 text-xl" />
    </div>
    <h3 className="font-bold text-white mb-2">لا تفوّت جديدنا</h3>
    <p className="text-neutral-400 text-sm mb-4">اشترك للحصول على أحدث المقالات</p>
    <link className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center" to="/blog" />تصفح المزيد
  </div>
</div>

                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
