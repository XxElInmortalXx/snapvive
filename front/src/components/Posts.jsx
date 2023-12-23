import React from 'react'
import user from '../assets/img/p1.jpeg'
import Image from 'next/image'
import post from '../assets/img/post1.jpeg'
import Link from 'next/link'

function Posts() {
  return (
    <section className='w-full p-4 mt-0 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl'>
      <article className='flex gap-4 justify-start items-center p-2 w-full'>
        <Image
          src={user}
          alt="user"
          width={50}
          height={50}
          loading="lazy"
          className='block rounded-full w-14 h-14 object-cover'
        />
        <article>
          <Link href={{ pathname: '/profile/id' }} className='block text-lg font-medium'>Name User</Link>
          <p className='text-sm'>4 friends</p>
        </article>
      </article>
      <p>Lorem ipsum dolor sit amet</p>
      <Image
        src={post}
        priority
        alt="post"
        width={300}
        height={300}
        className='block rounded-2xl w-full h-96 object-cover mt-2'
      />
    </section>
  )
}

export default Posts