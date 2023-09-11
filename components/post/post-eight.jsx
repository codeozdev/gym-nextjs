import PaddingContainer from '@/components/layout/padding-container'

export default function PostEight() {
  return (
    <div className='sm:px-7 my-10'>
      <div className='bg-[#f8f3ec] py-10 sm:py-20 rounded-xl'>
        <PaddingContainer>
          <div className='flex items-center justify-center flex-col'>
            <h1 className='text-2xl text-center sm:text-5xl font-bold font-ubuntu mb-5'>
              Sign up to our mailing list
            </h1>
            <p className='sm:w-[440px] text-center text-neutral-500 font-ubuntu'>
              Sign up to be the first to hear about Slay offers, new launches
              and news
            </p>
            <div className='sm:w-1/3 mt-5 flex flex-col items-center'>
              <input
                type='text'
                placeholder='Email'
                className='w-full p-3 rounded-full'
              />
              <button className=' mt-5 bg-[#342926] hover:bg-orange-950 p-2 sm:py-3 sm:px-8 rounded-full text-white font-medium w-fit self-center'>
                Sign Up
              </button>
            </div>
          </div>
        </PaddingContainer>
      </div>
    </div>
  )
}
