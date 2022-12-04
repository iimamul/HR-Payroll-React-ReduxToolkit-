import { configureStore } from '@reduxjs/toolkit'
import leaveEntryReducer from '../features/leave-entry/leaveEntrySlice'

export const store = configureStore({
  reducer: {
    leaveEntries:leaveEntryReducer,
  },
})