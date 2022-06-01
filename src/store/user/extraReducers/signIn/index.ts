import { createAsyncThunk } from '@reduxjs/toolkit'

import { IUserStore } from '../../types'
import signIn from './signIn'

import { TExtraReducers } from '@typescript/redux.types'

export const signInThunk = createAsyncThunk('user/signIn', signIn)

const signInExtraReducers: TExtraReducers<IUserStore> = ({ addCase }) => {
  addCase(signInThunk.pending, state => ({ ...state, loading: true }))

  addCase(signInThunk.fulfilled, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }))

  addCase(signInThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export default signInExtraReducers
