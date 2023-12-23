'use client'

import Link from 'next/link'
import React from 'react'

function RegisterPage() {
  return (
    <main>
      <header className="py-4 shadow-md font-black dark:shadow-neutral-800 mb-4">
        <h1 className="text-3xl text-center">SnapVibe</h1>
      </header>
      <form className='w-[90%] max-w-2xl mx-auto'>
        <fieldset>
          <legend className='text-2xl my-2 font-medium py-2'>Register</legend>
          <section className='grid md:grid-cols-2 gap-2'>
            <div>
              <label className='w-full text-lg font-medium' htmlFor="firstName">First name</label>
              <input
                className='w-full rounded-md p-2 border border-indigo-950 dark:border-neutral-500 dark:bg-neutral-800 dark:placeholder:text-neutral-500'
                placeholder='John'
                type="text"
                name="firstName"
                id="firstName"
              />
            </div>
            <div>
              <label className='w-full text-lg font-medium' htmlFor="lastName">Last name</label>
              <input
                className='w-full rounded-md p-2 border border-indigo-950 dark:border-neutral-500 dark:bg-neutral-800 dark:placeholder:text-neutral-500'
                placeholder='Doe'
                type="text"
                name="lastName"
                id="lastName"
              />
            </div>
          </section>
          <div className='w-full p-4 border border-indigo-950 dark:border-neutral-500 rounded-md mt-2'>
            <label className='w-full h-16 rounded-md grid place-items-center border-dotted border border-indigo-950 dark:border-neutral-500 text-lg dark:text-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-neutral-500 dark:hover:border-neutral-500 font-medium bg-indigo-50 hover:text-indigo-800 hover:border-indigo-800 hover:bg-indigo-100 cursor-pointer' htmlFor="picturePath">Add picture here</label>
          </div>
          <input
            className='hidden'
            type="file"
            name="picturePath"
            id="picturePath"
          />
          <label className='w-full text-lg font-medium' htmlFor="email">Email</label>
          <input
            className='w-full rounded-md p-2 border border-indigo-950 dark:border-neutral-500 dark:bg-neutral-800 dark:placeholder:text-neutral-500'
            placeholder='alpiryk@example.com'
            type="email"
            name="email"
            id="email"
          />
          <label className='w-full text-lg font-medium' htmlFor="password">Password</label>
          <input
            className='w-full rounded-md p-2 border border-indigo-950 dark:border-neutral-500 dark:bg-neutral-800 dark:placeholder:text-neutral-500'
            placeholder='********'
            type="password"
            name="password"
            id="password"
          />
          <button type="submit" className='w-full text-center my-4 py-2 px-4 font-medium bg-indigo-500 text-indigo-50 hover:bg-indigo-400 active:bg-indigo-600 rounded-md'>Register</button>
        </fieldset>
      </form>
      <section className="w-[90%] max-w-2xl mx-auto">
        <Link
          className="block my-1 font-medium"
          href={{ pathname: '/login' }}
        >
          Already have an account? Login here
        </Link>
      </section>
    </main>
  )
}

export default RegisterPage