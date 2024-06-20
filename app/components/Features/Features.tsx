import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard';
import Icon1 from '@/public/images/icon1.png';
import Icon2 from '@/public/images/icon2.png';
import Icon3 from '@/public/images/icon3.png';
import Icon4 from '@/public/images/icon4.png';
import Icon5 from '@/public/images/icon5.png';
const Features = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <SectionHeading 
        headingMini="Ideal Solution For You" 
        headingPrimary="Explore Ultimate Features"
        />
        <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center'>
            <FeatureCard title="Email Subscription" image={Icon1.src} description="Receive tailored updates and exclusive insights with our agency's email subscription service. Stay connected."/>
            </div>

            <div data-aos='zoom-in' data-aos-delay='200' data-aos-anchor-placement='top-center'>
            <FeatureCard title="Email Subscription" image={Icon2.src} description="Receive tailored updates and exclusive insights with our agency's email subscription service. Stay connected."/>
            </div>

            <div data-aos='zoom-in' data-aos-delay='400' data-aos-anchor-placement='top-center'>
            <FeatureCard title="Email Subscription" image={Icon3.src} description="Receive tailored updates and exclusive insights with our agency's email subscription service. Stay connected."/>
            </div>

            <div data-aos='zoom-in' data-aos-delay='600' data-aos-anchor-placement='top-center'>
            <FeatureCard title="Email Subscription" image={Icon4.src} description="Receive tailored updates and exclusive insights with our agency's email subscription service. Stay connected."/>
            </div>

            <div data-aos='zoom-in' data-aos-delay='800' data-aos-anchor-placement='top-center'>
            <FeatureCard title="Email Subscription" image={Icon5.src} description="Receive tailored updates and exclusive insights with our agency's email subscription service. Stay connected."/>
            </div>

            <div data-aos='zoom-in' data-aos-delay='1000' data-aos-anchor-placement='top-center'>
            <FeatureCard title="Email Subscription" image={Icon2.src} description="Receive tailored updates and exclusive insights with our agency's email subscription service. Stay connected."/>
            </div>
        </div>
        
    </div>
  )
}

export default Features
