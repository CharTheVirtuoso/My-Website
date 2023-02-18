import React from 'react'

export const EduItem = ({year,title,description}
) => {
  return (
    <ol className='flex flex-col md:flex-row relative py-5'>
        <li className='mb--10 ml-9'>
            <div className='absolute w-3 h-3 bg-red-800 rounded-full mt-1.5 left-2.5 border-gray-500'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='text-lg font-semibold text-stone-300'>{title}</span>
                <span className='my-1 text-sm font-normal leading-none text-stone-300'>{year}</span>
                    
                </p>
                <p className='my-2 text-base font-bold text-stone-400'>{description}</p>
            
        </li>
    </ol>
  )
}
