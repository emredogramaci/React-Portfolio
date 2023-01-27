import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{ width: "50px" }} />
        </div>

    {/* Menu */}
        <ul className='hidden md:flex'>
            <li className='hover:bg-orange-600 rounded-full'>
                <Link to="home" smooth={true} duration={500}>
                    Anasayfa
                </Link>
            </li>
            <li className='hover:bg-orange-600 rounded-full'>
                <Link to="about" smooth={true} duration={500}>
                    Hakkımda
                </Link>
            </li>
            <li className='hover:bg-orange-600 rounded-full'>
                <Link to="skills" smooth={true} duration={500}>
                    Yeteneklerim
                </Link>
            </li>
            <li className='hover:bg-orange-600 rounded-full'>
                <Link to="work" smooth={true} duration={500}>
                    Yaptıklarım
                </Link>
            </li>
            <li className='hover:bg-orange-600 rounded-full'>
                <Link to="contact" smooth={true} duration={500}>
                    İletişim
                </Link>
            </li>
        </ul>

    {/* Burger Menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

    {/* Mobile Menu */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Anasayfa
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    Hakkımda
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Yeteneklerim
                </Link>
            </li>
            
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Yaptıklarım
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    İletişim
                </Link>
            </li>
        </ul>

    {/* Social */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-3xl'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/emredogramaci/'> LinkedIn <FaLinkedin size={30} /> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-3xl'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/emredogramaci'> GitHub <FaGithub size={30} /> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700 rounded-r-3xl'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='mailto:emredogramaci91@gmail.com'> Email <HiOutlineMail size={30} /> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700 rounded-r-3xl'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='/'> Özgeçmiş <BsFillPersonLinesFill size={30} /> </a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar