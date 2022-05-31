import { createAsyncThunk } from '@reduxjs/toolkit'

import signIn from './signIn'

export const signInThunk = createAsyncThunk('user/signIn', signIn)

const extraReducers = ({ addCase }: any) => {
  addCase(signInThunk.pending, (state: any) => ({ ...state }))

  addCase(signInThunk.fulfilled, (state: any, { payload }: any) => ({
    ...state,
    ...payload,
    loading: false
  }))
}

export default extraReducers
