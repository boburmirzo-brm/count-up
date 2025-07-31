import Box from '@/shared/ui/Box'
import Title from '@/shared/ui/Title'
import React from 'react'
import { useProduct } from '../service/useProduct'

const Products = () => {
  const {getProducts} = useProduct()
  getProducts({})
  return (
    <Box>
        <Title>Products</Title>
        {/* <ProductView data={}/> */}
    </Box>
  )
}

export default React.memo(Products)