import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <Auth0Provider
      domain="dev-7ue5angl7mietblw.us.auth0.com"
      clientId="RKEEVmud1XJ9W4L5iQs1gZG1cVjy2EhZ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;
