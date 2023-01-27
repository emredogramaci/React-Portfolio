import React from 'react'
import { data } from '../data/data.js'

const Work = () => {
    const project = data;
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600'>Yaptıklarım</p>
                <p className='py-6'>/ Yaptığım işler.</p>
            </div>

            {/* Grid Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Card Item */}
                {project.map((item,index) => ( 
                    <div key={index} style={{backgroundImage: `url(${item.image})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                {item.name}
                            </span>
                            <div>
                                <a href={item.live}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href={item.github}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Kod</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    </div>
  );
};

export default Work