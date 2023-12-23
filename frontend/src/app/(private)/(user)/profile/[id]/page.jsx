import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import user from '../../../../../assets/img/p1.jpeg'
import Posts from '@/components/Posts'

function UserIdPage() {
  return (
    <main className='mt-4 w-[90%] mx-auto grid gap-4 md:grid-cols-5 xl:grid-cols-12 items-start'>
      <section className='grid place-items-center w-full p-4 bg-white dark:bg-neutral-800 shadow-xl rounded-xl md:col-start-1 md:col-span-5 xl:col-span-3 xl:sticky xl:top-4'>
        <article className='flex gap-4 justify-start items-center p-2 w-full'>
          <Image
            src={user}
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
        <Link href={{ pathname: '/home' }} className='w-full text-center font-medium text-lg bg-indigo-500 text-white rounded-md hover:bg-indigo-400 active:bg-indigo-600'>
          Back
        </Link>
      </section>
      <div className='md:col-span-5 xl:col-span-9 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
        <Posts />
        <Posts />
      </div>
    </main>
  )
}

export default UserIdPage