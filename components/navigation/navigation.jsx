import Link from 'next/link'
import Image from 'next/image'
import PaddingContainer from '@/components/layout/padding-container'
import NavbarButton from '@/components/elements/MobilButton'

export default function Navigation() {
  return (
    <PaddingContainer>
      <div className='flex items-center justify-between p-5'>
        <Link href='/'>
          <Image
            src='/logo.webp'
            alt='logo'
            width={40}
            height={40}
            className='sm:w-[70px] sm:h-[70px] cursor-pointer'
          />
        </Link>
        <nav>
          <ul className='flex items-center gap-4 sm:gap-12 text-xs sm:text-lg text-neutral-700'>
            <li>
              <Link href='/' className='underline text-black hidden sm:inline'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href={'https://shop.slayapp.com/'}
                target='_blank'
                className='hover:underline hover:text-black hidden sm:inline'>
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={'https://bloomnu.com/'}
                target='_blank'
                className='hover:underline hover:text-black hidden sm:inline'>
                Supplements
              </Link>
            </li>
            <li>
              <Link
                href={'https://slayapp.zendesk.com/hc/en-gb'}
                target='_blank'
                className='hover:underline hover:text-black hidden sm:inline'>
                Support
              </Link>
            </li>
            <li>
              <Link
                href={'https://subscribe.slayapp.com/register'}
                target='_blank'
                className='bg-[#ff8f4b] hover:bg-orange-500 p-2 sm:py-3 sm:px-4 rounded-full text-white font-medium'>
                Join Now
              </Link>
            </li>
            <NavbarButton />
          </ul>
        </nav>
      </div>
    </PaddingContainer>
  )
}
