import React from 'react'
import user from '../assets/img/p1.jpeg'
import Image from 'next/image'
import Link from 'next/link'

function CardUser() {
  return (
    <article className='flex gap-4 justify-start items-center p-2 w-full'>
        <Image
          src={user}
          alt="user"
          width={50}
          height={50}
          className='block rounded-full w-14 h-14 object-cover'
        />
        <article>
          <Link href={{ pathname: '/profile/id' }} className='block text-lg font-medium'>Name User</Link>
          <p className='text-sm'>4 friends</p>
        </article>
    </article>
  )
}

export default CardUser