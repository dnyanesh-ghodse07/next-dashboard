import Card from '@/components/card'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className='flex gap-2'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  )
}

export default page