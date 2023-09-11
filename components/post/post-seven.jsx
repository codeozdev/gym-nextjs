import PaddingContainer from '@/components/layout/padding-container'
import Image from 'next/image'
import SwiperSlider from '@/components/elements/SwiperSlider'
import Link from 'next/link'

export default function PostSeven() {
  return (
    <div className='py-5 sm:py-20 w-full h-full'>
      <PaddingContainer>
        <div className='flex flex-col sm:flex-row items-center gap-10'>
          <Image
            src='/marifriends.webp'
            alt='img'
            width={700}
            height={700}
            className='object-cover'
          />
          <div className='space-y-5 flex flex-col'>
            <h1 className='text-2xl sm:text-5xl font-extrabold self-center text-center sm:text-start items-center'>
              Want to join the SLAY community?
            </h1>
            <p className='font-ubuntu text-center sm:text-start text-sm sm:text-base'>
              Join the Slay Facebook community, with over 60,000 women just like
              you, supporting each other in their transformation journeys.
            </p>
            <Link
              href='https://www.facebook.com/groups/fitwithmarigroup'
              target='_blank'>
              <button className='mt-5 bg-[#342926] hover:bg-orange-950 p-2 sm:py-3 sm:px-8 rounded-full text-white font-medium w-fit self-center sm:self-start'>
                Join Group
              </button>
            </Link>
          </div>
        </div>
        <div className='mt-5 sm:mt-20'>
          <h1 className='text-2xl sm:text-5xl font-extrabold text-center px-5 sm:px-0'>
            235,000+ transformations and counting!
          </h1>
          <SwiperSlider />
        </div>
      </PaddingContainer>
    </div>
  )
}
