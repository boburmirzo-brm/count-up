import { usePayment } from '@/features/payment'
import Title from '@/shared/ui/Title'
import React from 'react'
import { useParams } from 'react-router-dom'
import useGetRole from '@/shared/hooks/useGetRole'
import PaymentView from '@/features/payment/components/payment-view/PaymentView'

const PartnerPayments = () => {
  const { id } = useParams()
  const { getPayments } = usePayment()
  const { data } = getPayments({ partnerId: id })
  const role = useGetRole()

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <Title>{role === "seller" ? "Sotuvchi" : "Mijoz"} To'lovlari</Title>
      </div>
      <div className='flex flex-col gap-3'>
        <PaymentView role={role} id={id!} data={data} />
      </div>
    </div>
  )
}

export default React.memo(PartnerPayments)