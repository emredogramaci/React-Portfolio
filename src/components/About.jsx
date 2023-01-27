import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen text-gray-300 bg-[#0a192f] '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Hakkımda</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Merhaba, ben Emre. Hoşgeldiniz.
                    </p>
                </div>
                <div>
                    <p>
                        Uzun süredir yazılım teknolojileri ile ilgilenmekteyim. Amatör olarak ilgilendiğim bu alanda kariyer yapmak üzere aktif olarak iş aramaktayım. Sol bölümde bulunan menüden özgeçmişimi indirebilir
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About