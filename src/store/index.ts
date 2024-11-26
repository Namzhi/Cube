import { configureStore } from '@reduxjs/toolkit'

import cubeReducer from './slice/cubeSlice'

export const store = configureStore({
  reducer: {
    cube: cubeReducer,
  },
})
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
