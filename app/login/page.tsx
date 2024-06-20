"use client"

import React, { useState } from 'react';
import ButtonRed from '../components/Button/ButtonRed';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import ButtonBlue from '../components/Button/ButtonBlue';

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-[2rem] mb-[2rem]'>
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col items-center lg:flex-row w-full lg:w-2/3 max-w-4xl">
        <div data-aos="fade-in-top" className="w-3/5 p-5 ">
          <div className="text-left font-bold">
            <span className='text-red-500'>A</span>mitech
          </div>
          <div className="py-10">
            <h2 className='text-3xl font-bold text-blue-600 mb-2'>
              Sign in to your account
            </h2>
            <div className="border-2 w-10 border-blue-600 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaFacebookF className="text-sm" />
              </a>

              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaLinkedinIn className="text-sm" />
              </a>

              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaGoogle className="text-sm" />
              </a>
            </div>
            <p className='text-gray-400 my-3'>or use sign in with email</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
              <input type='email' placeholder="Email" name='email' className='bg-gray-100 outline-none text-sm flex-1'  />
                <FaRegEnvelope className='text-gray-400 m-2' />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <input type={showPassword ? 'text' : 'password'} placeholder="password" name='password' className='bg-gray-100 outline-none text-sm flex-1' />
                <button onClick={togglePasswordVisibility} className='text-gray-400 m-2'>
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
              <div className="flex w-64 mb-5">
                <label className='flex items-center text-sm'>
                  <input type="checkbox" name="remember" className='mr-1' />
                  Remember me
                </label>
                <a href="#" className='text-sm ml-3 hover:text-yellow-500'>Forgot Password</a>
              </div>
              <a href="/">
                <ButtonBlue text="Login" />
              </a>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-bottom" data-aos-delay='200' className="w-full lg:w-2/5 bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className='text-3xl font-bold mb-2'>Hello, Friend</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className='mb-2'>Don't have an account? Sign up below!</p>
          <a href='/sign-up'>
            <ButtonRed text='Sign Up' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
