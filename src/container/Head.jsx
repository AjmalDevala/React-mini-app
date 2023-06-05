// import React, { useState } from 'react'
import { useSelector } from 'react-redux'
 



function Head() {

  const {cartCount}= useSelector((store)=>store.sample)
  console.log(cartCount,"ekgd,")
    return (
    <div className='flex flex-row  justify-between  px-10'>
      <h1>hell0</h1>
      <div className='p-2 box bg-amber-400'> Count {cartCount}</div>
      <h1>hell0</h1>
     
    </div>

  )
}

export default Head
