import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productAction'
import axios from 'axios'
import ProductComponents from './ProductComponent'

export default function ProductListing() {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()
  const fetch = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log(err, "fetcherror")
    })
    dispatch(setProducts(response.data))
  }
  useEffect(() => {
    fetch()
  }, [])
  console.log(products,":PRODUCTS")
  return (
    <div className='ui grid container'>
      <ProductComponents />
    </div>
  )
}
