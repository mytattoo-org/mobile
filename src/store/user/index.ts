import { createSlice } from '@reduxjs/toolkit'

import extraReducers from './extraReducers'

const userReducer = createSlice({
  initialState: { id: undefined, token: undefined },
  name: 'user',
  extraReducers,
  reducers: {
    update: (state, { payload }) => {
      state = payload
    }
  }
})

export { userReducer }
