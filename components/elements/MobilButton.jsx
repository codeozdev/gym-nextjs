'use client'

import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import { AiOutlineUser, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import Link from 'next/link'

export default function EffectHamburgerIcon() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex z-50'>
      {!nav ? (
        <HiMenuAlt3
          onClick={handleNav}
          className='cursor-pointer z-50 md:hidden'
          size={25}
        />
      ) : (
        <IoCloseSharp
          onClick={handleNav}
          className='cursor-pointer z-50 md:hidden'
          size={25}
        />
      )}
      <div
        className={
          nav
            ? 'fixed ease-in duration-300 inset-0 w-full h-screen bg-white flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }>
        <div className='flex flex-col justify-between h-full text-lg font-semibold'>
          <ul className='space-y-5 mt-40 flex items-center  flex-col text-2xl'>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'https://shop.slayapp.com'}>Shop</Link>
            </li>
            <li>
              <Link href={'https://bloomnu.com/'}>Supplements</Link>
            </li>
            <li>
              <Link href={'https://slayapp.zendesk.com/hc/en-gb'}>Support</Link>
            </li>
          </ul>
          <div className='bg-neutral-100 flex justify-between items-center'>
            <Link
              href='https://subscribe.slayapp.com/register'
              className='flex items-center gap-2 p-5'>
              <AiOutlineUser size={25} />
              Login
            </Link>
            <div className='flex items-center gap-2 p-5'>
              <Link href='https://m.youtube.com/c/marifitness'>
                <AiFillYoutube size={25} />
              </Link>
              <Link href='https://www.instagram.com/theslayapp/?hl=en'>
                <AiFillInstagram size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
