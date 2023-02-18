import React from 'react'
import { EduItem } from './EduItem';

const data = [
    {
        year: '[ 2015 ]',
        title: 'G.C.E. Ordinry Level',
        description: "I have completed my G.C.E. Ordinary Level in 2015 in with eight A's, one B. "
    },
    {
        year: '[ 2016-2018 ]',
        title: 'G.C.E. Advanced Level',
        description: "I have completed my G.C.E. Advanced Level in 2018 in Biological stream (Biology , Chemistry, Physics) with two B's and a C."
    },
    {
        year: '[ 2021-2024 ]',
        title: 'B.Sc. in IT specializing Software Engineering',
        description: "I am currently pursuing my B.Sc. in IT specializing Software Engineering in third year at Sri Lanka Institute of Information Technology. I have been selected to the Dean's list and awarded a full scholarship for my accademic excellence in year 2021"
    },

]

function Education() {
  return (
    <div id='education' className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 max-w-[-140px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-extrabold text-center  text-red-800'>Education</h1>
        {data.map((item,idx)=>(
            <EduItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            description={item.description} />
        ))}
    </div>
  )
}

export default Education