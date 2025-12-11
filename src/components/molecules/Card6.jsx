import Image from 'next/image'
import React from 'react'
import { IoDownload } from 'react-icons/io5'


const Card6 = ({ 
  title, 
  subjectTag, 
  pages, 
  size, 
  uploaded, 
  downloads, 
  cardBgColor, 
  iconBgColor, 
  tagBgColor, 
  tagTextColor 
}) => {
  return (
    
    <div className={`p-8 rounded-xl shadow-lg border border-gray-200 ${cardBgColor}`}>
      
     
      <div className='flex gap-8 items-start mb-4'>
        
        <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${iconBgColor}`}>
          <Image
            src='/img/Recent.png' 
            height={24}
            width={24}
            alt='Document Icon'
          />
        </div>
        
        
        <div>
         
          <button className={`font-inter text-[12px] font-medium px-2 py-0.5 rounded-full mb-1 ${tagBgColor} ${tagTextColor}`}>
            {subjectTag}
          </button>
          
          <p className="font-inter font-medium text-[18px] leading-[24px] text-[#1E293B]">
            {title}
          </p>
        </div>
      </div>
      
     
      <div className='space-y-3 mb-6'>
        
        <div className='flex justify-between'>
          <p className="font-inter font-normal text-[14px] leading-[20px] text-[#64748B]">Pages:</p>
          <h2 className="font-inter font-medium text-[14px] leading-[20px] text-[#1E293B]">{pages}</h2>
        </div>
        
       
        <div className='flex justify-between'>
          <p className="font-inter font-normal text-[14px] leading-[20px] text-[#64748B]">Size:</p>
          <h2 className="font-inter font-medium text-[14px] leading-[20px] text-[#1E293B]">{size}</h2>
        </div>
        
       
        <div className='flex justify-between'>
          <p className="font-inter font-normal text-[14px] leading-[20px] text-[#64748B]">Uploaded:</p>
          <h2 className="font-inter font-medium text-[14px] leading-[20px] text-[#1E293B]">{uploaded}</h2>
        </div>
        
       
        <div className='flex justify-between'>
          <p className="font-inter font-normal text-[14px] leading-[20px] text-[#64748B]">Downloads:</p>
          <h2 className="font-inter font-medium text-[14px] leading-[20px] text-[#1E293B]">{downloads}</h2>
        </div>
      </div>

      
      <button className='w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[var(--color-accent-orange)] text-white font-medium text-[16px] hover:bg-orange-600 transition-colors'>
        <IoDownload className='text-[18px]'/>
        Download PDF
      </button>
    </div>
  )
}

export default Card6