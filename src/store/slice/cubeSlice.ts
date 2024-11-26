import { createSlice } from '@reduxjs/toolkit'

interface CubeState {
  length: number
}

const initialState: CubeState = {
  length:10,
}

export const cubeSlice = createSlice({
  name: 'cube',
  initialState,
  reducers: {
    increment: state => {
      state.length += 0.7
    },
    decrement: state => {
      state.length -= 0.7
    },
  }
})

export const { increment, decrement } = cubeSlice.actions

export default cubeSlice.reducer