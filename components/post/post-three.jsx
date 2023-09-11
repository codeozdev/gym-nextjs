import PaddingContainer from '@/components/layout/padding-container'
import PriceElement from '@/components/elements/PriceElement'
import Link from 'next/link'

export default function PostThree() {
  return (
    <div className='sm:px-7 my-10'>
      <div className='bg-[#f8f3ec] py-10 sm:py-20 rounded-xl'>
        <PaddingContainer>
          <div className='flex flex-col sm:flex-row items-center w-full gap-5 sm:gap-10'>
            <div className='sm:w-1/2 sm:space-y-7'>
              <h2 className='text-center text-2xl sm:text-start  sm:text-5xl font-semibold tracking-tight mb-2 font-ubuntu'>
                Begin YOUR transformation today
              </h2>
              <ul className='sm:list-disc marker:text-orange-500 marker:text-2xl space-y-4 sm:space-y-0'>
                <li className='text-xs sm:text-base text-center sm:text-start font-ubuntu sm:max-w-[500px] leading-relaxed text-neutral-600'>
                  Get exclusive access to the same transformation methods and
                  workouts I used in my own 90lb weight loss journey
                </li>
                <li className='text-xs sm:text-base text-center sm:text-start font-ubuntu sm:max-w-[500px] leading-relaxed text-neutral-600'>
                  Receive training routines built around YOU with programs from
                  world-class transformation experts to help you build strength,
                  burn fat and grow in confidence
                </li>
                <li className='text-xs sm:text-base text-center sm:text-start font-ubuntu sm:max-w-[500px] leading-relaxed text-neutral-600'>
                  Record every milestone in your fitness journey so you never
                  forget how far you{`'`}ve come.
                </li>
              </ul>
            </div>
            <div className='max-w-full h-full sm:grid grid-cols-3 gap-5 hidden'>
              <div className='bg-white px-3 py-14 text-center rounded-lg hover:scale-105 duration-200 ease-in transition'>
                <h2 className='text-xl font-extrabold mb-5'>Bi-Annual</h2>
                <p className='text-4xl font-bold'>$53.99</p>
                <span className='text-xs text-neutral-500'>$0.30 per day</span>
                <Link
                  href='https://subscribe.slayapp.com/register'
                  target='_blank'>
                  <button className='mt-5 bg-[#ff8f4b] px-7 py-2 rounded-lg text-white'>
                    Subscribe
                  </button>
                </Link>
              </div>
              <div className='bg-white px-3 py-14 text-center rounded-lg hover:scale-105 duration-200 ease-in transition relative'>
                <h2 className='text-xl font-extrabold mb-5'>Year</h2>
                <p className='text-4xl font-bold'>$83.99</p>
                <span className='text-xs text-neutral-500'>$0.23 per day</span>
                <Link
                  href='https://subscribe.slayapp.com/register'
                  target='_blank'>
                  <button className='mt-5 bg-[#ff8f4b] px-7 py-2 rounded-lg text-white'>
                    Subscribe
                  </button>
                </Link>
                <p className='absolute -top-3 text-white left-10 bg-[#ff8f4b] rounded-full px-4 py-1'>
                  Best Value
                </p>
              </div>
              <div className='bg-white px-3 py-14 text-center rounded-lg hover:scale-105 duration-200 ease-in transition'>
                <h2 className='text-xl font-extrabold mb-5'>Monthly</h2>
                <p className='text-4xl font-bold'>$9.99</p>
                <span className='text-xs text-neutral-500'>$0.33 per day</span>
                <Link
                  href='https://subscribe.slayapp.com/register'
                  target='_blank'>
                  <button className='mt-5 bg-[#ff8f4b] px-7 py-2 rounded-lg text-white'>
                    Subscribe
                  </button>
                </Link>
              </div>
            </div>
            <PriceElement />
          </div>
        </PaddingContainer>
      </div>
    </div>
  )
}
