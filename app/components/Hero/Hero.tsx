import React from 'react'
import ButtonBlue from '../Button/ButtonBlue'
import ButtonRed from '../Button/ButtonRed';
import HeroImg from '@/public/images/hero.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-[70vh] lg:h-[88vh] md:h-[75vh] flex items-center flex-col justify-center'>
        <div className="grid  grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
            <div className="col-span-2">
                <h1 data-aos="fade-right" className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>Exploring Innovative Paths to Business Success</h1>
                <p data-aos="fade-left"data-aos-delay="200" className='md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]'>
                    Unlock your business potential with our cutting-edge software solutions. 
                    Our expert team leverages innovative technologies to drive growth, streamline operations, and enhance efficiency. 
                    Partner with us to explore new paths to success and stay ahead in a competitive market.
                    </p>
                    <div data-aos='zoom-in' data-aos-delay='400' className="flex items-center space-x-4 md:space-x-6">
                        <ButtonBlue text='Get Started'/>
                        <ButtonRed text='Explore Features'/>
                    </div>
            </div>
            <div data-aos='fade-left' data-aos-delay='600' className="col-span-3 hidden sm:block">
                <Image src={HeroImg}alt='Hero'/>
            </div>
        </div>
    </div>
  )
}

export default Hero
