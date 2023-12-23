import SectionUser from '@/components/SectionUser'
import FormNewPost from '@/components/FormNewPost'
import FriendList from '@/components/FriendList'
import Posts from '@/components/Posts'
import React from 'react'

function HomePage() {
  return (
    <main className='mt-4 w-[90%] mx-auto grid gap-4 md:grid-cols-5 xl:grid-cols-12 items-start'>
      <SectionUser />
      <div className='md:col-span-3 xl:col-span-6 space-y-4'>
        <FormNewPost />
        <Posts />
        <Posts />
        <Posts />
      </div>
      <FriendList />
    </main>
  )
}

export default HomePage