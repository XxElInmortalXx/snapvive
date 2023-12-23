import React from 'react'
import Link from 'next/link'

function HeaderHome() {
  const toogleDarkMode = () => {
    const html = document.querySelector('html')
    html.classList.toggle('dark')
  }
  return (
    <header className="py-4 shadow-md dark:shadow-neutral-800 font-black">
      <nav className='w-[90%] mx-auto flex justify-between items-center'>
        <Link
          href={{ pathname: '/home' }}
          className="block text-3xl text-left"
        >
          SnapVibe
        </Link>

        <button className='text-3xl md:hidden'>
          <i className="ri-menu-line"></i>
        </button>

        <form className='w-full hidden md:flex md:max-w-80'>
          <input type="text" placeholder="Search users" className='w-full rounded-l-full p-2 px-4 border border-r-0 border-indigo-950 dark:bg-neutral-800 dark:border-neutral-700 font-medium' />
          <button className='py-2 px-4 bg-indigo-500 dark:border-neutral-700 dark:bg-neutral-700 text-white rounded-r-full border border-indigo-950'><i className="ri-search-line"></i></button>
        </form>

        <ul className='hidden md:flex md:gap-4 md:text-2xl'>
          <li>
            <Link
              href={{ pathname: '/messages' }}
              className="block"
            >
              <i className="ri-message-line"></i>
            </Link>
          </li>
          <li>
            <Link
              href={{ pathname: '/notifications' }}
              className="block"
            >
              <i className="ri-notification-4-line"></i>
            </Link>
          </li>
          <li>
            <Link
              href={{ pathname: '/info' }}
              className="block"
            >
              <i className="ri-question-line"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderHome