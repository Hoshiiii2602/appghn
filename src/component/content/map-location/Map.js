import React from 'react'

export default function Map() {
  return (
    <div className='col-span-2 tablet:ml-0 laptop:w-[94%]'>
      <iframe
        src='https://www.google.com/maps/d/u/1/embed?mid=1A3N40Ysq9d8Et7ORM3CVPDgNDqRplJOv'
        className='h-[576px] w-full'>
      </iframe>
    </div>
  )
}
