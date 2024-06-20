import React from 'react'
import ButtonRed from '../Button/ButtonRed';
import ButtonBlue from '../Button/ButtonBlue';

interface Props{
    bg:string;
    price:string;
    num:string;
    plan:string;
}

const PriceCard = ({bg,price,num,plan}:Props) => {
    const large=num=="2"?"lg:scale-110 scale-100 z-[100]":""
  return (
    <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
      <div className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md`}>
        <p className='text-[28px] text-white font-[500] mb-[1.5rem]'>{plan}</p>
        <h1 className='text-[20px] text-white'>
            <span className='text-[30px] text-yellow-300 font-bold'>Ksh.{price} </span>
            lifetime
        </h1>
      </div>
      <div className="p-4 mt-[1rem] text-center">
        <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
            Full Access Library
        </p>

        <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
            Full Access Library
        </p>

        <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
            Full Access Library
        </p>

        <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
            Full Access Library
        </p>

        <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
            Full Access Library
        </p>
        <div className="pt-[1.5rem] mb-[1.5rem] text-center">
            {num!="2" && <ButtonRed text="Choose Plan"/>}
            {num=="2" && <ButtonBlue text="Choose Plan"/>}
        </div>
      </div>
    </div>
  )
}

export default PriceCard
