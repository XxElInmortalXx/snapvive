import user from '../assets/img/p1.jpeg'
import Image from 'next/image'
import React from 'react'

function FormNewPost() {
  return (
    <section className='w-full shadow-2xl bg-white dark:bg-neutral-800 p-4 rounded-xl'>
      <form>
        <div className='flex gap-2 p-2 items-center'>
          <Image src={user} alt="user" loading="lazy" width={50} height={50} className='block rounded-full w-12 h-12 object-cover' />
          <input
            type="text"
            placeholder="What's on your mind?"
            className='w-full rounded-full p-4 border border-indigo-950 dark:bg-neutral-700 dark:border-neutral-700 dark:placeholder:text-neutral-500'
          />
        </div>
        <div className='w-full h-[1px] bg-neutral-300 dark:bg-neutral-500 my-4' />
        <div className='flex gap-2'>
          <label htmlFor="image" className='w-full items-center justify-center text-center grid place-items-center bg-neutral-300 rounded-full hover:bg-neutral-200 active:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-900'><i className="ri-image-line font-normal text-2xl text-neutral-500 dark:text-neutral-300"></i></label>
          <input id='image' type="file" className='hidden' />
          <label htmlFor="video" className="w-full items-center justify-center text-center grid place-items-center bg-neutral-300 rounded-full hover:bg-neutral-200 active:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-900"><i className="ri-video-line font-normal text-2xl text-neutral-500 dark:text-neutral-300"></i></label>
          <input type="file" id="video" className="hidden" />
        <button className='w-full py-1 px-4 text-lg text-white font-medium bg-indigo-500 rounded-full block hover:bg-indigo-400 active:bg-indigo-600' type="submit">New Post</button>
        </div>
      </form>
    </section>
  )
}

export default FormNewPost