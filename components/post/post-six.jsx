import PaddingContainer from '@/components/layout/padding-container'
import { data } from '@/data/results-image'
import Image from 'next/image'
import Link from 'next/link'

export default function PostSix() {
  return (
    <div className='sm:px-7 my-10'>
      <div className='bg-[#f8f3ec] py-10 sm:py-20 rounded-xl'>
        <PaddingContainer>
          <div className='flex flex-col'>
            <h1 className='text-2xl text-center sm:text-5xl font-bold font-ubuntu mb-5'>
              Results that speak for themselves...
            </h1>
            <div className='grid grid-cols-6 gap-3'>
              <Image
                src={data[0].image}
                alt='img'
                width={500}
                height={500}
                className='row-start-1 rounded-lg'
              />
              <Image
                src={data[1].image}
                alt='img'
                width={500}
                height={500}
                className='row-start-2 rounded-lg'
              />

              <Image
                src={data[2].image}
                alt='img'
                width={500}
                height={500}
                className='w-full h-full object-fill bg-red-500 row-span-2 col-span-2 rounded-lg'
              />

              <Image
                src={data[3].image}
                alt='img'
                width={500}
                height={500}
                className='col-start-4 rounded-lg'
              />
              <Image
                src={data[4].image}
                alt='img'
                width={500}
                height={500}
                className='col-start-4 rounded-lg'
              />

              <Image
                src={data[5].image}
                alt='img'
                width={500}
                height={500}
                className='w-full h-full object-fill col-start-5 row-start-1 row-span-2 col-span-2 rounded-lg'
              />
            </div>
            <Link
              href='https://subscribe.slayapp.com/register'
              target='_blank'
              className='flex items-center justify-center'>
              <button className=' mt-5 bg-[#342926] hover:bg-orange-950 p-2 sm:py-3 sm:px-8 rounded-full text-white font-medium w-fit self-center'>
                Transform Now
              </button>
            </Link>
          </div>
        </PaddingContainer>
      </div>
    </div>
  )
}
