import React from 'react'

export const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1 className='py-4 text-4xl font-bold text-center text-red-700' >Contact Me</h1>
        <form action='https://getform.io/f/4bf4de8b-4972-4331-b3e5-25a44fef4158' method='POST' encType='multipart/form-data'>
            <div className=' grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm font-bold py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' placeholder='Enter your name' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm  font-bold py-2'>Contact Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='number' placeholder='Enter your number' />
                </div>
                </div>
                <div className='flex flex-col py-2' >
                    <label className='uppercase text-sm  font-bold py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' placeholder='Enter your email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm font-bold  py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' placeholder='Enter your subject' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm font-bold  py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message' placeholder='Enter your message' />
                </div>
            
            <button className='bg-red-900 text-white mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
        </form>
    </div>
  )
}
