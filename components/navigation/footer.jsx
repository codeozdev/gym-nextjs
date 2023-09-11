import PaddingContainer from '@/components/layout/padding-container'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='bg-neutral-800 text-white sm:px-7 py-10 sm:py-20'>
      <PaddingContainer>
        <div className='sm:grid sm:grid-cols-3 sm:place-items-center flex flex-col'>
          <div className='flex items-center justify-center sm:flex-col gap-10 sm:gap-0'>
            <Image
              src='/footerIcon.webp'
              alt='footerIcon'
              width={40}
              height={40}
              className='sm:w-[70px] sm:h-[70px] cursor-pointer'
            />
            <div className='sm:mt-5 flex items-center  gap-3 sm:flex-col'>
              <Link
                href='https://www.instagram.com/theslayapp/?hl=en'
                target='_blank'>
                <AiOutlineInstagram size={50} />
              </Link>
              <Link
                href='https://www.youtube.com/c/marifitness'
                target='_blank'>
                <AiOutlineYoutube size={50} />
              </Link>
            </div>
          </div>
          <nav className='my-10 sm:my-0 text-center'>
            <ul className='space-y-4 font-bold'>
              <li>
                <Link
                  href='https://slayapp.com/policies/privacy-policy'
                  target='_blank'
                  className='hover:underline'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='https://slayapp.com/pages/our-consumer-goods'
                  target='_blank'
                  className='hover:underline'>
                  Our Consumer Goods
                </Link>
              </li>
              <li>
                <Link
                  href='https://slayapp.com/pages/ccpa-opt-out'
                  target='_blank'
                  className='hover:underline'>
                  Do not sell my personal information
                </Link>
              </li>
              <li>
                <Link
                  href='https://slayapp.com/pages/acceptable-use-policy'
                  target='_blank'
                  className='hover:underline'>
                  Acceptable use Policy
                </Link>
              </li>
              <li>
                <Link
                  href='https://slayapp.com/pages/terms-and-condition'
                  target='_blank'
                  className='hover:underline'>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href='https://slayapp.com/pages/slay-referrals-program'
                  target='_blank'
                  className='hover:underline'>
                  Referrals Program
                </Link>
              </li>
              <li>
                <Link
                  href='https://slayapp.com/pages/referral-t-cs'
                  target='_blank'
                  className='hover:underline'>
                  Referrals Program T&Cs
                </Link>
              </li>
            </ul>
          </nav>
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
      </PaddingContainer>
    </div>
  )
}
