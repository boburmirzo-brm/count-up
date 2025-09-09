import { memo } from 'react'
import PaymentPopup from '@/features/payment/components/payment-popup/PaymentPopup'
import Options from '@/shared/ui/Options'
import type { Role } from '@/shared/const'

interface PaymentViewProps {
  data: any,
  id: string,
  role: Role
}

const PaymentView = ({ data, id, role }: PaymentViewProps) => {
  return (
    <div className='mt-5'>
      {data?.data?.map((item: any) => (
        <div className='flex justify-between border-b border-gray-200 py-4' key={item.id}>
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
                    role={role === "seller" ? "seller" : "customer"}
                    previousData={item}
                  >
                    <button className="block">
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
        </div>
      ))}
    </div>
  )
}

export default memo(PaymentView)