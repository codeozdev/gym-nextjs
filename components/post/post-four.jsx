'use client'

import PaddingContainer from '@/components/layout/padding-container'
import { data } from '@/data/data'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { GiCornerFlag } from 'react-icons/gi'
import { AiOutlineGold, AiOutlineRise } from 'react-icons/ai'
import { CiDumbbell, CiApple } from 'react-icons/ci'
import Link from 'next/link'

export default function PostFour() {
  const [currentCategory, setCurrentCategory] = useState('Guides')
  const [filteredData, setFilteredData] = useState([])

  const filterData = (product) => {
    setCurrentCategory(product)
  }

  useEffect(() => {
    const filtered = data.filter((item) => item.name === currentCategory)
    setFilteredData(filtered)
  }, [currentCategory])

  return (
    <div className='sm:px-7 my-10'>
      <div className='bg-[#f8f3ec] py-10 sm:py-20 rounded-xl'>
        <PaddingContainer>
          <div>
            <h1 className='text-2xl text-center sm:text-5xl font-bold font-ubuntu mb-5 sm:mb-16'>
              Navigate your transformation with confidence
            </h1>
            <div className='flex sm:gap-40 flex-col sm:flex-row'>
              <div className='flex sm:flex-col gap-3 sm:mt-10 '>
                <button
                  className='text-xs sm:text-base rounded-full bg-orange-400 hover:bg-orange-600 w-14 h-14 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-white'
                  onClick={() => filterData('Guides')}>
                  <GiCornerFlag className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]' />
                  Guides
                </button>
                <button
                  className='text-xs sm:text-base rounded-full bg-orange-400 hover:bg-orange-600 w-14 h-14 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-white'
                  onClick={() => filterData('Trainers')}>
                  <AiOutlineGold className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]' />
                  Trainers
                </button>
                <button
                  className='text-xs sm:text-base rounded-full bg-orange-400 hover:bg-orange-600 w-14 h-14 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-white '
                  onClick={() => filterData('Workouts')}>
                  <CiDumbbell className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]' />
                  Workouts
                </button>
                <button
                  className='text-xs sm:text-base rounded-full bg-orange-400 hover:bg-orange-600 w-14 h-14 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-white '
                  onClick={() => filterData('Progress')}>
                  <AiOutlineRise className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]' />
                  Progress
                </button>
                <button
                  className='text-xs sm:text-base rounded-full bg-orange-400 hover:bg-orange-600 w-14 h-14 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-white '
                  onClick={() => filterData('Recipes')}>
                  <CiApple className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]' />
                  Recipes
                </button>
              </div>
              <div className='flex items-center justify-center'>
                {filteredData.map((item, index) => (
                  <div key={index}>
                    <div className='items-center justify-center w-full hidden sm:flex'>
                      {item.image.map((img, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={img}
                          alt={`img${imgIndex}`}
                          width={350}
                          height={50}
                        />
                      ))}
                    </div>
                    {/*Mobil Image*/}
                    <div className='sm:hidden'>
                      <Image
                        src={item.image[0]}
                        width={350}
                        height={100}
                        alt='img'
                      />
                    </div>
                    <div className='space-y-3'>
                      <p className='text-base text-neutral-600'>{item.name}</p>
                      <h1 className='text-xl sm:text-4xl font-bold font-ubuntu'>
                        {item.title}
                      </h1>
                      <p className='text-neutral-500 sm:text-lg font-ubuntu'>
                        {item.description}
                      </p>
                      <Link
                        href='https://subscribe.slayapp.com/register'
                        target='_blank'>
                        <button className='mt-5 bg-[#ff8f4b] hover:bg-orange-500 p-2 sm:py-3 sm:px-8 rounded-full text-white font-medium w-full sm:w-fit'>
                          Join Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PaddingContainer>
      </div>
    </div>
  )
}
