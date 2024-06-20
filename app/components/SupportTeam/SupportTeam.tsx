import React from 'react'
import Icon1 from '@/public/images/icon1.png'
import Icon2 from '@/public/images/icon2.png'
import Supportteam from '@/public/images/supportteam.jpg'
import Image from 'next/image'

const SupportTeam = () => {
  return (
    <div className='pt-[7rem] pb-[3rem]'>
       <div className="w-[80%] mx-auto  items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div className="">
            <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>
                Do you need assistance? Our support team is ready to help
            </h1>
            <p className='text-gray-500 opacity-90 text-[17px] mt-[1rem]'>Get help from a friendly support team at Amitech. 
                Customer saisfaction is always our top priority.
                 Feel free to drop us a message about your issue.
                 Thank you for trusting us.
                 </p>

            <div className="flex items-center space-x-6 mt-[2rem]">
                <Image src={Icon1} alt='icon' width={60} height={60}/>
                <div className="">
                    <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Email client support</h1>
                    <p className='md:w-[100%] w-[90%] opacity-85 text-black'>support@amitech-kenya.com</p>
                </div>
            </div>

            <div className="flex items-center space-x-6 mt-[2rem]">
                <Image src={Icon2} alt='icon' width={60} height={60}/>
                <div className="">
                    <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Call or Whatsapp </h1>
                    <p className=' w-[90%] opacity-85 text-black'>+254 113 890 709</p>
                </div>
            </div>

        </div>
        <div data-aos='fade-left' data-aos-anchor-placement='top-center'>
            <Image src={Supportteam} alt='support'/>
        </div>
       </div>
    </div>
  )
}

export default SupportTeam
