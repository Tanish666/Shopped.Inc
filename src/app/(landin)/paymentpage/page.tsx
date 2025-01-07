'use client'
import PaymentForm from "@/components/paymentComponents/payment-form"
import { useAppSelector } from "@/lib/store/hooks";



export default function PaymentPage() {
  const info = useAppSelector(state => state.payment);

  return (
    <div className="min-h-screen bg-transparent  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
          <div className="px-6 py-4 bg-gray-800 text-white">
            <h1 className="text-xl font-bold">Complete Your Purchase</h1>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
              <div className="flex justify-between items-center">
                <span>{info.productName}</span>
                <span className="font-medium">₹{info.price}</span>
              </div>
            </div>
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  )
}

