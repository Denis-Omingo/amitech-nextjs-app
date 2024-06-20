import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <SectionHeading headingMini='Website Deals' headingPrimary='Check our pricing plans that fit your need'/>
      <div className="w-[80%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div data-aos='fade-right' data-aos-anchor-placement='top-center'>
            <PriceCard bg="bg-[#81124a]" price="14,999" num="1" plan="Starter"/>
        </div>
        <div data-aos='fade-up' data-aos-delay='200' data-aos-anchor-placement='top-center'>
            <PriceCard bg="bg-[#22840c]" price="30,000" num="2" plan="Premium Pack"/>
        </div>
        <div data-aos='fade-left' data-aos-delay='400' data-aos-anchor-placement='top-center'>
            <PriceCard bg="bg-[#112c60]" price="45,000" num="3" plan="Ultimate"/>
        </div>
      </div>
    </div>
  )
}

export default Price
