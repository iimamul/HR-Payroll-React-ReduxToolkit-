import { configureStore } from '@reduxjs/toolkit'
import leaveEntryReducerRef from '../features/leave-entry/leaveEntrySlice'

export const store = configureStore({
  reducer: {
    leaveEntriesStored:leaveEntryReducerRef,
  },
})