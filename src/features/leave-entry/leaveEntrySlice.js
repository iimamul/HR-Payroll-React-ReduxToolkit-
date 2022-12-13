import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {fetchLeaveEntries} from './leaveEntryAPI'
import axios from 'axios'

const initialState = [
        {leaveName: "Casual",allowedDays:10},
        {leaveName: "Sick",allowedDays:14}
    ]

export const getLeaveEntries = createAsyncThunk("leaveEntries/getLeaveEntries", async () => {
  const data= await fetchLeaveEntries()
  console.log(data)
  return data
});


export const leaveEntrySlice = createSlice({
  name: 'leaveEntriesSlc',
  initialState,
  reducers: {
    addLeave: (state,action) => {
        state.push(action.payload)
        console.log(action.payload)
    }
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: {
    [getLeaveEntries.pending]: (state, action) => {
      state.status = "loading";
    },
    [getLeaveEntries.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.list = action.payload;
      console.log(action)
    },
    [getLeaveEntries.rejected]: (state, action) => {
      state.status = "failed";
    }
  }
})

// Action creators are generated for each case reducer function
export const { addLeave } = leaveEntrySlice.actions

export default leaveEntrySlice.reducer

// export const selectAllLeaveEntries =(state)=>state.leaveEntries.value