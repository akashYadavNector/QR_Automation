import React from 'react'
import { FiLoader } from 'react-icons/fi'

const Loading = () => {
    return (
    <div className='flex justify-center items-center opacity-25 bg-black'>
      <FiLoader size={60} className='animate-spin [animation-duration:2s]' />
    </div>
    )
}

export default Loading