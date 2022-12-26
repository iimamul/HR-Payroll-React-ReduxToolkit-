import LeaveEntryInputs from './LeaveEntryInputs'
import LeaveEntryList from './LeaveEntryList'
import { LeaveEntryContext } from './LeaveEntryContext'
import { useState } from 'react'

const LeaveEntryLayout = () => {
  const [leaveData, setLeaveData]= useState({
    id:0,
    leaveName:'',
    balanceDays:''
  })

  return (
    <div style={{display: 'flex',flexDirection: 'row', paddingTop: '3rem'}}>
      <LeaveEntryContext.Provider value={{leaveData,setLeaveData}}>
          <LeaveEntryInputs leaveData={leaveData}/>
          <LeaveEntryList setLeaveData={setLeaveData}/>
      </LeaveEntryContext.Provider>
    </div>
  )
}

export default LeaveEntryLayout