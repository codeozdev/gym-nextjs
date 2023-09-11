'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'>
        <SwiperSlide>
          <div className='bg-[#f9f5ef] p-7 sm:w-1/2 sm:h-[250px] mx-auto rounded-2xl space-y-4'>
            <div className='relative w-32 h-5 sm:w-40 sm:h-12 mb-5'>
              <Image src='/star.png' alt='img' fill />
            </div>
            <p>
              I go into the gym with a plan thanks to this app. I check the
              boxes, I feel complete and know I’ve gotten a good workout in and
              it fits perfectly with my lifestyle
            </p>
            <p className='text-start font-semibold'>Molline</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f9f5ef] p-7 sm:w-1/2 sm:h-[250px] mx-auto rounded-2xl space-y-4'>
            <div className='relative w-32 h-5 sm:w-40 sm:h-12 mb-5'>
              <Image src='/star.png' alt='img' fill />
            </div>
            <p>
              Great workout program to get you comfortable being in the weight
              room! Eases you into it so you are not completely sore after your
              first workouts!
            </p>
            <p className='text-start font-semibold'>Sarah</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f9f5ef] p-7 sm:w-1/2 sm:h-[250px] mx-auto rounded-2xl space-y-4'>
            <div className='relative w-32 h-5 sm:w-40 sm:h-12 mb-5'>
              <Image src='/star.png' alt='img' fill />
            </div>
            <p>
              So easy to use, so organized! Finally a fitness app that doesn’t
              overwhelm me. So grateful!
            </p>
            <p className='text-start font-bold'>Disarias</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f9f5ef] p-7 sm:w-1/2 sm:h-[250px] mx-auto rounded-2xl space-y-4'>
            <div className='relative w-32 h-5 sm:w-40 sm:h-12 mb-5'>
              <Image src='/star.png' alt='img' fill />
            </div>
            <p>
              I love the Slay app! Recipes, guides for home or gym, switch
              options, instructional videos, links to You Tube, challenges..
              it’s got it all in one place. Slay is helping me transform my body
              as well as my habits for life! 💚
            </p>
            <p className='text-start font-semibold'>Kiley</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
