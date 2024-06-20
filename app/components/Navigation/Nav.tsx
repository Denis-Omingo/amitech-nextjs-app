import Link from 'next/link'
import React from 'react'
import ButtonBlue from '../Button/ButtonBlue'
import ButtonRed from '../Button/ButtonRed'
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid';

interface Props {
    openNav:()=>void;
    
}

const Nav = ({openNav}:Props) => {
    
  return (
    <div className='h-[12vh] bg-white shadow-md'>
        <div className='w-[85%] flex items-center justify-between mx-auto h-[12vh]'>
            <h1 className='text-[16px] md:text-[25px] font-bold text-slate-800'>
                <span className='text-[27px] md:text-[40px] text-red-600'>A</span>
                mitech.
            </h1>
            <ul className='hidden lg:flex items-center space-x-10'>
                <li className='text-[17px] cursor-pointer text-red-500'>
                    <Link href='/'>Home</Link>
                </li>

                <li className='text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200'>
                    <Link href='/about'>About</Link>
                </li>

                <li className='text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200'>
                    <Link href='/services'>Services</Link>
                </li>

                <li className='text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200'>
                    <Link href='/customer'>Customer</Link>
                </li>

                <li className='text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200'>
                    <Link href='/blog'>Blog</Link>
                </li>
            </ul>
            <div className="flex items-center space-x-2 md:space-x-5">
               <Link href='/login'>
                    <ButtonBlue text="Login"/>
               </Link>
                <Link href="/sign-up">
                    <ButtonRed text="Sign Up"/>
                </Link>
                <Bars3BottomRightIcon onClick={openNav} className='w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Nav
