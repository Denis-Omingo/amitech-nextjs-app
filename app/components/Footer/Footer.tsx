import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[3rem] pb-[3rem] '>
        <div className="w-[80%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start">
            <div className="md:mx-auto mx-0">
                <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">Company</h1>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>About</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Affiliate</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Careers & Culture</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Blog</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Press</p>
            </div>
            <div className="md:mx-auto mx-0">
                <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">My Account</h1>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Press Inquiries</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Social Media</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>B-Roll</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Permissions</p>            
        </div>

        <div className="md:mx-auto mx-0">
                <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]"> Our Information</h1>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Return Policies</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Privacy Policy</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Terms & Conditions</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Site Map</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Office Hours</p>            
            
        </div>

        <div className="md:mx-auto mx-0">
                <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">About Us</h1>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Customer Support</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Services</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>The Team</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Popular Campaigns</p> 
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Copyright</p>            
           
        </div>
        </div>
        <div className="w-[80%] mx-auto mt-[1rem] text-[15px] opacity-80">Copyright 2024 by Amitech Solutions</div>
    </div>
  )
}

export default Footer
