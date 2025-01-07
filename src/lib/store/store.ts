
import { configureStore } from '@reduxjs/toolkit'
import { CartReducer } from './slices/CartSlices'
import { PlanReducer } from './slices/PlanSlices'
import { SearchReducer } from './slices/SearchSlice'
import { PaymentReducer } from './slices/PaymentSlices'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart:CartReducer,
      plan:PlanReducer,
      search:SearchReducer,
      payment:PaymentReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']