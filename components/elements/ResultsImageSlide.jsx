'use client'

import { useState, useEffect } from 'react'
import { data } from 'data/results-image'

export default function ResultsImageSlide() {
  const [currentSlide, setCurrentSide] = useState(0)

  //slayt islemi
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000,
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='w-full sm:w-0 sm:hidden'>
      <div className='bg-white px-3 py-14 text-center rounded-lg hover:scale-105 duration-200 ease-in transition flex flex-col items-center justify-center'>
        <h2 className='text-xl font-extrabold mb-5'>
          {data[currentSlide].title}
        </h2>
        <p className='text-4xl font-bold'> {data[currentSlide].price}</p>
        <span className='text-xs text-neutral-500'>
          {' '}
          {data[currentSlide].perPrice}
        </span>
        <button className='mt-5 bg-[#ff8f4b] px-7 py-2 rounded-lg text-white w-fit'>
          Subscribe
        </button>
      </div>
    </div>
  )
}
