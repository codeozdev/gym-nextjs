import PaddingContainer from '@/components/layout/padding-container'
import Image from 'next/image'
import Link from 'next/link'

export default function PostFive() {
  return (
    <div className='py-5 sm:py-20'>
      <PaddingContainer>
        <div>
          <h1 className='text-2xl text-center sm:text-5xl font-bold font-ubuntu mb-5'>
            Choose a trainer to suit your goals
          </h1>
          <p className='text-sm px-4 sm:px-0 sm:text-base text-center text-neutral-600 font-ubuntu'>
            SLAY is the home for some of the world{`'`}s greatest transformation
            experts. Our trainers will guide you to move, grow and transform
            while avoiding any of the common roadblocks people face on their
            journey of growth!
          </p>
        </div>
        <div className='flex flex-col gap-5 sm:gap-20 mt-16'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-5'>
            <div>
              <h1 className='text-center sm:text-start text-3xl sm:text-4xl font-bold font-ubuntu'>
                Move with{' '}
                <span className='animate-pulse text-fuchsia-500 uppercase'>
                  Mari
                </span>
              </h1>
              <div className='flex gap-2 sm:gap-5 items-center justify-center sm:justify-start text-sm'>
                <p className='mt-5 bg-amber-400 hover:bg-orange-500 p-1 sm:py-1 sm:px-5 rounded text-white '>
                  Strength
                </p>
                <p className='mt-5 bg-red-500 hover:bg-orange-500 p-1 sm:py-1 sm:px-5 rounded text-white  '>
                  Power
                </p>
                <p className='mt-5 bg-amber-400 hover:bg-orange-500 p-1 sm:py-1 sm:px-5 rounded text-white  '>
                  Transform
                </p>
              </div>
              <div className='space-y-5 mt-8 sm:mt-10 text-neutral-700 font-ubuntu sm:w-[650px] text-sm sm:text-base text-center sm:text-start'>
                <p>
                  Hi, I’m Mari, the Founder of the Slay App, and I’m here to
                  help you transform your fitness and become the best version of
                  you.
                </p>
                <p>
                  I hit rock bottom both mentally and physically and was ready
                  to make a change in my life. I decided to take ownership of my
                  health, lost over 90 lbs, and finally found self-love. I fell
                  in love with fitness and nutrition and was inspired to help
                  others do the same.
                </p>
                <p>
                  I’m here to help you build strength, step outside your comfort
                  zone, and become the best version of you!
                </p>
                <Link
                  href='https://subscribe.slayapp.com/register'
                  target='_blank'>
                  <button className=' mt-5 bg-[#ff8f4b] hover:bg-orange-500 p-2 sm:py-3 sm:px-8 rounded-full text-white font-medium w-fit'>
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
            <Image src='/mari.webp' alt='img' width={500} height={500} />
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-between gap-5'>
            <div>
              <h1 className='text-center sm:text-start text-3xl sm:text-4xl font-bold font-ubuntu'>
                Push Yourself with{' '}
                <span className='animate-pulse text-green-500 uppercase'>
                  Paulina
                </span>
              </h1>
              <div className='flex gap-2 sm:gap-5 items-center justify-center sm:justify-start text-sm'>
                <p className='mt-5 bg-amber-400 hover:bg-orange-500 p-1 sm:py-1 sm:px-5 rounded text-white '>
                  Sweat
                </p>
                <p className='mt-5 bg-red-500 hover:bg-orange-500 p-1 sm:py-1 sm:px-5 rounded text-white  '>
                  Shred
                </p>
                <p className='mt-5 bg-amber-400 hover:bg-orange-500 p-1 sm:py-1 sm:px-5 rounded text-white  '>
                  Tone
                </p>
              </div>
              <div className='space-y-5 mt-8 sm:mt-10 text-neutral-700 font-ubuntu sm:w-[650px] text-sm sm:text-base text-center sm:text-start'>
                <p>
                  Hi, I’m Paulina, your HIIT Trainer. Get ready to sweat and
                  challenge yourself with explosive & athletic movements.
                </p>
                <p>
                  My journey started when I was a young kid. I always knew I
                  wanted to be a fitness trainer, which sparked my interest in
                  studying Physical Science at university. After graduating in
                  Poland, I became a professional trainer, and moved to the US.
                  I have been training for over 8 years now, and I can’t see
                  myself doing anything else, it’s my passion.
                </p>
                <p>
                  I’m here to help motivate you and push you one step further
                  than you thought was possible.
                </p>
                <Link
                  href='https://subscribe.slayapp.com/register'
                  target='_blank'>
                  <button className=' mt-5 bg-[#ff8f4b] hover:bg-orange-500 p-2 sm:py-3 sm:px-8 rounded-full text-white font-medium w-fit'>
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
            <Image src='/paulina.webp' alt='img' width={500} height={500} />
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-between gap-5'>
            <div>
              <h1 className='text-center sm:text-start text-3xl sm:text-4xl font-bold font-ubuntu'>
                Train with{' '}
                <span className='animate-pulse text-blue-500 uppercase'>
                  Tiffani
                </span>
              </h1>
              <div className='flex gap-2 sm:gap-5 items-center justify-center sm:justify-start text-sm'>
                <p className='mt-5 bg-amber-400 hover:bg-orange-500 p-1 sm:py-1 sm:px-5 rounded text-white '>
                  Strengthen
                </p>
                <p className='mt-5 bg-red-500 hover:bg-orange-500 p-1 sm:py-1 sm:px-5 rounded text-white  '>
                  Tone
                </p>
                <p className='mt-5 bg-amber-400 hover:bg-orange-500 p-1 sm:py-1 sm:px-5 rounded text-white  '>
                  Sculpt
                </p>
              </div>
              <div className='space-y-5 mt-8 sm:mt-10 text-neutral-700 font-ubuntu sm:w-[650px] text-sm sm:text-base text-center sm:text-start'>
                <p>
                  Hey, it’s Tiffani, your Pilates Trainer. No matter what
                  fitness level you’re at, I’m here to challenge you.
                </p>
                <p>
                  I’ve been in athletics for most of my life. I ran track and
                  field in college, and I continued my journey professionally. I
                  ran in 3 Olympic trials and made my first USA team in 2019,
                  where I ran in Europe vs USA.
                </p>
                <p>
                  I incorporate all these experiences in my guide, so whether
                  you want to stretch, find a deeper mind-body connection, or
                  feel your legs shaking, I have a workout for you.
                </p>
                <Link
                  href='https://subscribe.slayapp.com/register'
                  target='_blank'>
                  <button className=' mt-5 bg-[#ff8f4b] hover:bg-orange-500 p-2 sm:py-3 sm:px-8 rounded-full text-white font-medium w-fit'>
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
            <Image src='/tiff.webp' alt='img' width={500} height={500} />
          </div>
        </div>
      </PaddingContainer>
    </div>
  )
}
