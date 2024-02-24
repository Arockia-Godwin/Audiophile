import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// import SignUp from "../pages/Accounts/SignUp";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Accounts/Login";

const ReactRoute = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route
          path={"/" || ""}
          element={
            user.isSignedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />

        <Route path="/signup" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default ReactRoute;
