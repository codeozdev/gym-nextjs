import PaddingContainer from '@/components/layout/padding-container'
import Image from 'next/image'
import Link from 'next/link'

export default function PostTwo() {
  return (
    <div className='w-screen'>
      <PaddingContainer>
        <div className='flex flex-col sm:flex-row items-center w-full gap-5 sm:gap-10 my-10'>
          <div className='sm:w-1/2 sm:space-y-7'>
            <h2 className='text-center text-2xl sm:text-start sm:text-5xl font-semibold tracking-tight mb-2 font-ubuntu'>
              Get the full SLAY experience!
            </h2>
            <Image
              src='/1.webp'
              alt='img'
              width={700}
              height={500}
              className='object-cover bg-center my-10 sm:hidden'
            />
            <p className='text-center sm:text-start font-ubuntu sm:max-w-[500px] leading-relaxed text-neutral-600'>
              Build confidence, sculpt your body & feel amazing with Mari{`'`}s
              NEW Strength & Sculpt guide. This 8-week program is available for
              both home & gym in all fitness levels, including beginner,
              intermediate, & advanced. Build strength, develop confidence &
              transform your body in 8 weeks with our new Strength & Sculpt
              guide!
            </p>

            <Link href='https://subscribe.slayapp.com/register' target='_blank'>
              <button className='uppercase mt-5 bg-[#ff8f4b] hover:bg-orange-500 p-2 sm:py-3 sm:px-4 rounded-full text-white font-medium w-full sm:w-fit'>
                Start Today
              </button>
            </Link>
          </div>
          <div className='max-w-full h-full'>
            <Image
              src='/1.webp'
              alt='img'
              width={700}
              height={500}
              className='object-cover bg-center hidden sm:block'
            />
          </div>
        </div>
      </PaddingContainer>
    </div>
  )
}
