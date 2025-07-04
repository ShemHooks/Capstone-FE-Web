import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import PendingLandingPage from "./pages/Residents/PendingUserLanding";
import ResidentDashboard from "./pages/Residents/dashboard";
import TermCondition from "./auth/TermCondition";
import DriversDashboard from "./pages/Drivers/DriversDashboard";
import ResponderDashboard from "./pages/Responders/ResponderDashboard";
import Camera from "./pages/Residents/components/Camera";
import ConfirmationPage from "./pages/Residents/components/ConfirmationPage";

const App = () => {
  return (
    <BrowserRouter>
      {/*public Routes*/}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/resident/pending" element={<PendingLandingPage />} />
        <Route path="/termcondtion" element={<TermCondition />} />
        <Route path="/driver/dashboard" element={<DriversDashboard />} />
        <Route path="/responder/dashboard" element={<ResponderDashboard />} />
        <Route path="/resident/camera" element={<Camera />} />
        <Route path="/resident/confirmation" element={<ConfirmationPage />} />

        {/* ari ang bago na dashboard */}
        <Route path="/resident/dashboard" element={<ResidentDashboard />} />
        {/* Private Routes (Registered Users only) */}
        <Route element={<ProtectedRoutes />} />
        {/* for registered user only */}
        {/* <Route path="/resident/dashboard">
                        
                    </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
