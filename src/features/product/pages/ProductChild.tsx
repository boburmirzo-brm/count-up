import React from 'react'
import { useOutletContext } from 'react-router-dom'
import ProductWrapper from '../components/product-wrapper/ProductWrapper'
import Navigation from '../components/navigation/Navigation'

const ProductChild = () => {
    const { data, isFetching }: any = useOutletContext()
    console.log(data);


    return (
        <>
            <Navigation data={data} />
            <ProductWrapper data={data} loading={isFetching} />
        </>
    )
}

export default React.memo(ProductChild)
