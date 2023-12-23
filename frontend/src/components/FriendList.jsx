import Image from 'next/image'
import React from 'react'
import user from '../assets/img/p1.jpeg'
import Link from 'next/link'

function FriendList() {
  return (
    <section
      className='hidden md:w-full md:block md:col-span-2 md:col-start-4 md:row-start-2 xl:col-start-10 xl:row-start-1 xl:col-span-3 bg-white dark:bg-neutral-800 shadow-2xl p-4 rounded-xl'
    >
      <h3 className='text-lg font-medium'>Friends</h3>
      <article className='flex gap-4 justify-start items-center p-2 w-full'>
        <Image
          src={user}
          alt="user"
          width={50}
          loading="lazy"
          height={50}
          className='block rounded-full w-14 h-14 object-cover'
        />
        <article>
          <Link href={{ pathname: '/profile/id' }} className='block text-lg font-medium'>Name User</Link>
          <p className='text-sm'>4 friends</p>
        </article>
      </article>
      <Link href={{ pathname: '/friends' }} className='block text-lg font-medium text-right hover:text-neutral-600 active:text-neutral-900 dark:hover:text-neutral-300 dark:active:text-neutral-500'>View all friends</Link>
    </section>
  )
}

export default FriendList