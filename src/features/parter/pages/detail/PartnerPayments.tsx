import { usePayment } from '@/features/payment'
import Title from '@/shared/ui/Title'
import React from 'react'
import { useParams } from 'react-router-dom'

const PartnerPayments = () => {
  const {id} = useParams()
  const {getPayments} = usePayment()
  const {data} = getPayments({partnerId: id})
  
  return (
    <div>
        <Title>Partner Payments</Title>
        <div>
          {
            data?.data?.map((item:any) => (
              <div key={item.id}>
                <h3>{item.amaunt.fprice()}</h3>
                <hr />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default React.memo(PartnerPayments)