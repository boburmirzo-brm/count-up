import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
// import { useParamsHook } from '@/shared/hooks/useParamsHook';
import React, { type FC } from 'react'
import ProductCardView from './productCardView/ProductCardView';
import ProductView from './productTableView/ProductView';
import { Pagination } from 'antd';
import { useParamsHook } from '@/shared/hooks/useParamsHook';

interface Props {
    data: undefined | any;
    loading: boolean;
}


const ProductWrapper: FC<Props> = ({ data, loading }) => {
    const { getParam, setParam } = useParamsHook();
    const page = getParam("page") || "1";
    const matches = useMediaQuery("768");
    return (
        <>
            {matches ? (
                <ProductCardView data={data?.data} loading={loading} />
            ) : (
                <ProductView data={data?.data} loading={loading} />
            )}
            <div className='mt-6 flex justify-end'>
                <Pagination
                    current={Number(page)}
                    onChange={(value) => setParam("page", value.toString())}
                    pageSize={10}
                    total={data?.total} />
            </div>
        </>
    )
}

export default React.memo(ProductWrapper)
