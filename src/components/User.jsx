import React from 'react'

const User = ({logout}) => {
  return (
    <div className='flex ' >
        <h1 className='font-bold'> User logged In</h1>
        <button onClick={logout} className='border bg-black text-white p-2 border-none'>
            Log Out  
        </button>
    </div>
  )
}

export default User;