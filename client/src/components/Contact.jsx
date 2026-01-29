import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='w-full bg-gradient-to-b from-black via-[#12001f] to-[#0b0014] 
    py-20 px-6 text-white'>
      <div className='flex flex-col gap-3 items-center justify-center'>
        <h2 className='text-4xl md:text-5xl font-bold'>Contact <span className='text-violet-400'>Me</span></h2>
        <p className='text-gray-400'>Have a project idea or want to collaborate? Let's talk.</p>
        <div className=' w-full sm:w-[500px] bg-white/5 backdrop-blur-md border border-white/10
        rounded-xl p-8 shadow-lg flex flex-col gap-6'>
          <h4 className='text-white'>Send a Message</h4>
          <div className='flex flex-col'>
            <label htmlFor="name" className='text-sm font-medium text-gray-300 mb-1'>Name</label>
            <input type="text" placeholder='your name' id="name" className='w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-violet-500'/>
          </div >
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-sm font-medium text-gray-300 mb-1'>Email</label>
            <input type="email" placeholder='you@gmail.com' id="email" className='w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-violet-500'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="msg" className='text-sm font-medium text-gray-300 mb-1'>Message</label>
            <textarea type="text" placeholder='say something' className='w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-violet-500' rows={5} ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
