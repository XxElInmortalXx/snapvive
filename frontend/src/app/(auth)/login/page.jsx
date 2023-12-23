'use client'

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main>
      <header className="py-4 shadow-md font-black dark:shadow-neutral-800 mb-4">
        <h1 className="text-3xl text-center">SnapVibe</h1>
      </header>
      <form onSubmit={handleSubmit} className='w-[90%] max-w-2xl mx-auto'>
        <fieldset>
          <legend className='text-2xl my-2 font-medium py-2'>Login</legend>
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
          <button type="submit" className='w-full text-center my-4 py-2 px-4 font-medium bg-indigo-500 text-indigo-50 hover:bg-indigo-400 active:bg-indigo-600 rounded-md'>Login</button>
        </fieldset>
      </form>
      <section className="w-[90%] max-w-2xl mx-auto">
        <Link
          className="block my-1 font-medium"
          href={{ pathname: '/register' }}
        >
          Don't have an account? Register here
        </Link>
      </section>
    </main>
  )
}

export default LoginPage