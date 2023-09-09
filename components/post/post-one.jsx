import PaddingContainer from '@/components/layout/padding-container'
import Link from 'next/link'
import Image from 'next/image'

export default function PostOne() {
  return (
    <PaddingContainer>
      <div className='flex flex-col sm:flex-row items-center sm:gap-20 sm:my-20'>
        <h1 className='my-10  text-2xl sm:text-9xl font-bold text-center flex-1 px-5 sm:px-0'>
          Your fitness journey starts with
          <span className='text-[#ff8f4b]'> Slay.</span>
        </h1>
        <div className=''>
          <div className='flex flex-row sm:flex-col gap-20 sm:gap-0 mb-5 sm:mb-0'>
            <div>
              <p className='text-xl sm:text-4xl font-extrabold animate-pulse text-red-500'>
                235,000+
              </p>
              <p className='text-sm sm:text-xl font-medium text-neutral-700 sm:mt-3 sm:mb-10'>
                Downloads
              </p>
            </div>

            <div>
              <p className='text-xl sm:text-4xl font-extrabold '>500,000+</p>
              <p className='text-sm sm:text-xl font-medium text-neutral-700 s:mt-3 sm:mb-5'>
                Workouts Completed
              </p>
            </div>
          </div>
          <div className='flex flex-row sm:flex-col gap-5 sm:gap-0'>
            <Link
              href='https://apps.apple.com/gb/app/slay-by-mari/id1524686854'
              target='_blank'
              className=''>
              <Image
                src='/apple.png'
                alt='apple'
                width={150}
                height={50}
                className='mb-5 sm:w-[200px]'
              />
            </Link>
            <Link
              href='https://play.google.com/store/apps/details?id=com.bloomnu.slay&hl=en_GB&gl=US&pli=1'
              target='_blank'>
              <Image
                src='/google.webp'
                alt='apple'
                width={150}
                height={50}
                className='sm:w-[200px]'
              />
            </Link>
          </div>
        </div>
      </div>
    </PaddingContainer>
  )
}
