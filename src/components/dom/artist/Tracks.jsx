import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Tracks() {
  return (
    <div className='flex flex-row items-center justify-center w-full h-full'>
      <div className='w-1/2 h-1/2 bg-gray-100'>
        <Image src='/img/artist/earth.jpg' alt='earth' width={300} height={300} />
      </div>
      <div className='w-1/2 h-1/2 bg-gray-200'>
        <Image src='/img/artist/fire.jpg' alt='fire' width={300} height={300} />
      </div>
      <div className='w-1/2 h-1/2 bg-gray-300'>
        <Image src='/img/artist/water.jpg' alt='water' width={300} height={300} />
      </div>
      <div className='w-1/2 h-1/2 bg-gray-400'>
        <Image src='/img/artist/air.jpg' alt='air' width={300} height={300} />
      </div>
    </div>
  )
}
