import { createSlice } from '@reduxjs/toolkit'

const initialState = [
        {leaveName: "Casual",allowedDays:10},
        {leaveName: "Sick",allowedDays:14}
    ]


export const leaveEntrySlice = createSlice({
  name: 'leaveEntriesSlc',
  initialState,
  reducers: {
    addLeave: (state,action) => {
        state.push(action.payload)
        console.log(action.payload)
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addLeave } = leaveEntrySlice.actions

export default leaveEntrySlice.reducer

// export const selectAllLeaveEntries =(state)=>state.leaveEntries.value