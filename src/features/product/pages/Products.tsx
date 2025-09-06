import Box from '@/shared/ui/Box'
import React from 'react'
import { useProduct } from '../service/useProduct'
import { Outlet } from 'react-router-dom'

const Products = () => {
  const { getProducts } = useProduct()
  const { data, isFetching } = getProducts({})

  return (
    <Box>
      <Outlet context={{ data, isFetching }} />
    </Box>
  )
}

export default React.memo(Products)
