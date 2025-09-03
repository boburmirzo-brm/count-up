import React from 'react'
import { useOutletContext } from 'react-router-dom'
import ProductWrapper from '../components/product-wrapper/ProductWrapper'

const ProductChild = () => {
    const object: any = useOutletContext()

    return (
        <>
            <ProductWrapper data={object?.data} loading={object?.isFetching} />
        </>
    )
}

export default React.memo(ProductChild)
