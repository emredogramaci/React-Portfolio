import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <div>
    <div className='bg-[#0a192f] flex justify-center items-center'>
        <footer className='flex justify-between items-center text-gray-300'>
            Emre Doğramacı © 2023
        </footer>
    </div>
            <div className='md:hidden bg-[#0a192f] text-gray-300 flex justify-center'>
              <ul className='sm:flex justify-between items-center py-2'>
                <li className='flex items-center bg-blue-600 rounded p-2 m-1'>
                  <a className='flex justify-between items-center' href="https://www.linkedin.com/in/emredogramaci/"> <FaLinkedin size={30} /> LinkedIn</a>
                  </li>
                <li className='flex items-center bg-[#333333] rounded p-2 m-1'>
                  <a className='flex justify-between items-center' href="https://github.com/emredogramaci"> <FaGithub size={30} /> GitHub</a>
                  </li>
                <li className='flex items-center bg-green-700 rounded p-2 m-1'>
                  <a className='flex justify-between items-center' href="mailto:emredogramaci91@gmail.com"> <HiOutlineMail size={30} /> EMail</a>
                  </li>
                <li className='flex items-center bg-red-700 rounded p-2 m-1'>
                  <a className='flex justify-between items-center' href="/"> <HiOutlineMail size={30} /> Özgeçmiş</a>
                  </li>
              </ul>
            </div>
            </div>
  )
}

export default Footer