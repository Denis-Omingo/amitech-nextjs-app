import { XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react';

interface Props {
  nav:boolean;
  closeNav:()=>void;
  
}

const MobileNav = ({closeNav,nav}:Props) => {
  const navOpenStyle=nav?"translate-x-0":"translate-x-[-100%]";

  return  <div className={` ${navOpenStyle} transform transition-all duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#6d096b]`}>
    <XMarkIcon onClick={closeNav} className='w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]'/>
    <ul className='relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center space-x-10'>

                <li className='text-[25px] cursor-pointer text-yellow-300'>
                    <Link href='/'>Home</Link>
                </li>

                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href='/about'>About</Link>
                </li>

                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href='/services'>Services</Link>
                </li>

                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href='/customer'>Customer</Link>
                </li>

                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href='/blog'>Blog</Link>
                </li>
            </ul>
  </div>
}

export default MobileNav
