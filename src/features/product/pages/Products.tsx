import Box from '@/shared/ui/Box'
import React from 'react'
import { useProduct } from '../service/useProduct'
import Navigation from '../components/navigation/Navigation'
import { Outlet } from 'react-router-dom'

const Products = () => {
  const { getProducts } = useProduct()
  const { data, isFetching } = getProducts({})

  return (
    <Box>
      <Navigation data={data} />
      <Outlet context={{ data, isFetching }} />
    </Box>
  )
}

export default React.memo(Products)




// title: string,
// price: number,
// categoryId: string,
// quantity: number,
// units: string,
// comment: string