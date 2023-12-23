import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import user from '../assets/img/p1.jpeg'


function SectionUser() {
  return (
    <section className='grid place-items-center w-full p-4 bg-white dark:bg-neutral-800 shadow-xl rounded-xl md:col-start-1 md:col-span-5 xl:col-span-3'>
      <article className='flex gap-4 justify-start items-center p-2 w-full'>
        <Image
          src={user}
          loading="lazy"
          alt="user"
          width={50}
          height={50}
          className='block rounded-full w-14 h-14 object-cover'
        />
        <article>
          <Link href={{ pathname: '/profile' }} className='block text-lg font-medium'>Name User</Link>
          <p className='text-sm'>4 friends</p>
        </article>
      </article>
    </section>
  )
}

export default SectionUser