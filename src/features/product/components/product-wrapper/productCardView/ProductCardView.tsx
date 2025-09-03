import { LoadingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { type FC } from 'react'
import { Link } from 'react-router-dom';
import ProductOptions from '../product-option/ProductOptions';

interface Props {
  data: undefined | any;
  loading: boolean;
}
const ProductCardView: FC<Props> = ({ data, loading }) => {
  return (
    <>
      <div className="relative min-h-36">
        {data?.map((item: any, index: number) => (
          <div key={item?.id} className="border-b border-gray-200 p-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <span>{index + 1}</span>
                <Link className="font-semibold" to={`/product/${item.id}`}>
                  {item.title}
                </Link>
              </div>
              <div>
                <ProductOptions  />
              </div>
            </div>
            <div className="flex justify-between my-3">
              <div>{item?.totalPrice}</div>
              <div>
                <b
                  style={{
                    color:
                      item?.price < 0
                        ? "crimson"
                        : item?.price > 0
                          ? "green"
                          : "grey",
                  }}
                >
                  {item?.price.fprice()}
                </b>
              </div>
            </div>
            <div className="flex justify-between">
              <div>{item.quantity}</div>
              <div>
                <div>
                  <Button>To'lov</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="absolute top-0 left-0 z-[5] w-full h-full bg-white/80 flex justify-center pt-10">
            <div>
              <LoadingOutlined className="text-2xl" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default React.memo(ProductCardView)
