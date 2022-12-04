import React from 'react'
import LeaveApplication from '../features/leave-application/LeaveApplication';
import LeaveEntryLayout from '../features/leave-entry/LeaveEntryLayout';
import Header from '../components/layout/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LeaveEntryLayout/>}></Route>
          <Route path="leaveapplication" element={<LeaveApplication/>}></Route>
          <Route path="leaveentry" element={<LeaveEntryLayout/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing