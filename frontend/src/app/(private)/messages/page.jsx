import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import user from '../../../assets/img/p1.jpeg'

function MessagesPage() {
  return (
    <main>
      <section className='grid place-items-center md:grid-cols-5 xl:grid-cols-9 w-[90%] mx-auto gap-4 mt-4'>
        <section className='w-full h-[calc(100vh-110px)] overflow-y-auto md:col-span-2 xl:col-span-3 p-4 rounded-xl shadow-2xl bg-white dark:bg-neutral-800'>
          <article className='flex gap-4 justify-start items-center p-2 w-full'>
            <Image
              src={user}
              alt="user"
              width={50}
              height={50}
              className='block rounded-full w-14 h-14 object-cover'
            />
            <article>
              <button className='block text-lg font-medium'>Name User</button>
              <p className='text-sm'>4 friends</p>
            </article>
          </article>
        </section>
        <section className='hidden md:block w-full h-[calc(100vh-110px)] overflow-y-auto md:col-span-3 xl:col-span-6 shadow-2xl bg-white dark:bg-neutral-800 rounded-xl'>
        </section>
      </section>
    </main>
  )
}

export default MessagesPage