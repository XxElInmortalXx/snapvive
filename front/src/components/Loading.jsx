import React from 'react'

function Loading({ msg }) {
  return (
    <div className='text-center border-l-4 p-2 font-medium border-neutral-500 text-neutral-500 bg-neutral-200'>
      {msg}
    </div>
  )
}

export default Loading