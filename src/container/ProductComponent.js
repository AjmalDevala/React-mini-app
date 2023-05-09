import React from 'react'
// import { useSelector } from 'react-redux'

export default function ProductComponents() {
  // const  products = useSelector((state)=>state.allproducts.products)
  // const {id ,tittle}= products[0]
  return (
    <div className="four column wide my-4 ">
     <div className='ui link cards'>
      <div className='card'>
        <div className='image'></div>
        <div className='content'>
          {/* <div className='header'>{tittle}</div> */}
        </div>
      </div>
     </div>
    </div>
  )
}
