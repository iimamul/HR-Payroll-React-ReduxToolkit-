import React, { lazy, Suspense } from "react";
// import LeaveApplication from '../features/leave-application/LeaveApplication';
// import LeaveEntryLayout from '../features/leave-entry/LeaveEntryLayout';
// import Header from "../components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "/src/components/layout/Loading";

const Header = lazy(() =>
  import("../components/layout/Header")
);
const LeaveApplication = lazy(() =>
  import("../features/leave-application/LeaveApplication")
);
const LeaveEntryLayout = lazy(() =>
  import("../features/leave-entry/LeaveEntryLayout")
);

const Routing = () => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
      <Header></Header>
      </Suspense>
      <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
            <Route path="/" element={<LeaveEntryLayout />}></Route>
            <Route path="/leaveapplication" element={<LeaveApplication />}></Route>
            <Route path="/leaveentry" element={<LeaveEntryLayout />}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
