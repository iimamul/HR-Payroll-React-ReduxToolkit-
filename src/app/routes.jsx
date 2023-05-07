import React, { lazy, Suspense } from "react";
// import LeaveApplication from '../features/leave-application/LeaveApplication';
// import LeaveEntryLayout from '../features/leave-entry/LeaveEntryLayout';
// import Header from "../components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "/src/components/ui/Loading";
import Sidebar from "/src/components/layout/Sidebar";
import LandingDashboard from "/src/features/dashboard/dashboard";

// const Header = lazy(() => import("../components/layout/Header"));
const LeaveApplication = lazy(() =>
  import("../features/leave-application/LeaveApplication")
);
const LeaveEntryLayout = lazy(() =>
  import("../features/leave-entry/LeaveEntryLayout")
);

const Routing = () => {
  return (
    <div>
      {/* <Suspense fallback={<Loading/>}>
      <Header></Header>
      </Suspense> */}
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Sidebar>
            {/* <Header></Header> */}
            <Routes>
              <Route path="/" element={<LeaveEntryLayout />}></Route>
              <Route path="/dashboard" element={<LandingDashboard />}></Route>
              <Route path="/leaveapplication" element={<LeaveApplication />}></Route>
              <Route path="/leaveentry" element={<LeaveEntryLayout />}></Route>
            </Routes>
          </Sidebar>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
