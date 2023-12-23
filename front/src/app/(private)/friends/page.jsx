import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import user from '../../../assets/img/p1.jpeg'

function FriendsPage() {
  return (
    <main className='w-[90%] mx-auto max-w-2xl'>
      <h1 className='text-2xl font-medium my-4'>Friends</h1>
      <section className='w-full bg-white dark:bg-neutral-800 shadow-2xl p-4 rounded-xl'>
        <article className='flex gap-4 justify-between items-center p-2 w-full'>
          <div className='flex gap-4 justify-center items-center'>
            <Image
              src={user}
              alt="user"
              width={50}
              height={50}
              className='block rounded-full w-14 h-14 object-cover'
            />
            <article>
              <Link href={{ pathname: '/profile' }} className='block text-lg font-medium'>Name User</Link>
              <p className='text-sm'>New post</p>
            </article>
          </div>
          <button>
            <i className="ri-delete-bin-6-line text-2xl"></i>
          </button>
        </article>
        <p className='text-center'>
          No friends
        </p>
      </section>
    </main>
  )
}

export default FriendsPage