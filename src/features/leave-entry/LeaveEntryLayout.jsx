import LeaveEntryInputs from './LeaveEntryInputs'
import LeaveEntryList from './LeaveEntryList'

const LeaveEntryLayout = () => {
  return (
    <div style={{display: 'flex',flexDirection: 'row', paddingTop: '3rem'}}>
      <LeaveEntryInputs/>
      <LeaveEntryList/>
    </div>
  )
}

export default LeaveEntryLayout