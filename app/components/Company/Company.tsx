import Image from 'next/image'
import React from 'react'
import CompanyImg from '@/public/images/customer.png'

const Company = () => {
  return (
    <div className='pt-[6rem] pb-[3rem]'>
        <h1 className='mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073e]'>
            Our Partners
        </h1>
        <p className='w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-gray-950 opacity-80'>
            Get to know the companies that we have worked with
        </p>
        <p className='text-center mt-[1.7rem] fon-[500] cursor-pointer text-blue-500'>Explore Details</p>
        <div className="mt-[2rem] text-center w-[80%] mx-auto">
            <Image src={CompanyImg} alt='company'/>
        </div>
    </div>
  )
}

export default Company
