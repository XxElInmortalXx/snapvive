import React from 'react'

function Alert({ msg, error }) {
  return (
    <div className={`text-center border-l-4 p-2 font-medium ${error ? 'border-red-500 text-red-500 bg-red-200' : 'border-green-500 text-green-500 bg-green-200'}`}>
        {msg}
    </div>
  )
}

export default Alert