import { usePayment } from '@/features/payment'
import Box from '@/shared/ui/Box'
import Options from '@/shared/ui/Options'
import Title from '@/shared/ui/Title'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PaymentPopup from '@/features/payment/components/payment-popup/PaymentPopup'

const PartnerPayments = () => {
  const path = window.location.pathname
  const keyword = path.split("/")[1]
  const { id } = useParams()
  const [paymentId, setPaymentId] = useState<null | string>(null)
  const { getPayments } = usePayment()
  const { data } = getPayments({ partnerId: id })

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <Title>{keyword === "seller" ? "Sotuvchi" : "Mijoz"} To'lovlari</Title>
        <PaymentPopup
          paymentId={paymentId!}
          id={id!}
          role={keyword === "seller" ? "seller" : "customer"}
        >
        </PaymentPopup>
      </div>
      <div className='flex flex-col gap-3'>
        {data?.data?.map((item: any) => (
          <Box className='flex justify-between' key={item.id}>
            <div>
              <p className='text-lg font-semibold'>{item.amaunt.fprice()}</p>
              <p className='text-gray-500'>{item.comment}</p>
            </div>
            <div className='flex flex-col items-end gap-2'>
              <Options
                items={[{
                  label: (
                    <PaymentPopup
                      id={id!}
                      role={keyword === "seller" ? "seller" : "customer"}
                      previousData={item}
                    >
                      <button onClick={() => setPaymentId(item.id)} className="block">
                        O'zgartirish
                      </button>
                    </PaymentPopup>
                  ),
                  key: "0",
                }]}
              />
              <div className="flex gap-2 text-gray-500">
                <p>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "N/A"}</p>
                <p>{item.createdAt ? new Date(item.createdAt).toLocaleTimeString() : "N/A"}</p>
              </div>
            </div>
          </Box>
        ))}
      </div>
    </div>
  )
}

export default React.memo(PartnerPayments)