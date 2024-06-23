"use client"
import ProductCard from '@/components/Card/ProductCard'
import React from 'react'

function UserHomepage() {
  return (
    <div className='flex flex-wrap justify-center p-4 lg:p-12'>
          <div className='grid gap-2 max-w-max gap-y-6 grid-cols-2 lg:grid-cols-4 lg:gap-4 '>
            <ProductCard productId='121' productName='Product Name' originPrice='13000' salePrice='8000' location='Juan Store' image_url={undefined} rating={4.5}/>
            <ProductCard productId='121' productName='Product Name' originPrice='13000' salePrice='8000' location='Juan Store' image_url={undefined} rating={4.5}/>
            <ProductCard productId='121' productName='Product Name' originPrice='13000' salePrice='8000' location='Juan Store' image_url={undefined} rating={4.5}/>
            <ProductCard productId='121' productName='Product Name' originPrice='13000' salePrice='8000' location='Juan Store' image_url={undefined} rating={4.5}/>
            <ProductCard productId='121' productName='Product Name' originPrice='13000' salePrice='8000' location='Juan Store' image_url={undefined} rating={4.5}/>
            <ProductCard productId='121' productName='Product Name' originPrice='13000' salePrice='8000' location='Juan Store' image_url={undefined} rating={4.5}/>
            <ProductCard productId='121' productName='Product Name' originPrice='13000' salePrice='8000' location='Juan Store' image_url={undefined} rating={4.5}/>
            <ProductCard productId='121' productName='Product Name' originPrice='13000' salePrice='8000' location='Juan Store' image_url={undefined} rating={4.5}/>
          </div>
    </div>
  )
}

export default UserHomepage