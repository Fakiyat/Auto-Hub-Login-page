import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Login from "./Pages/Login.jsx";
import HomePage from "./Pages/HomePage.jsx";
import NotFound from "./Pages/NotFound.jsx";
// import Register from "./Pages/Register.jsx";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}
// function RegisterAndLogout() {
//   localStorage.clear();
//   return <Register />;
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } //Protected route we cannt go to this /home without login
        />
        <Route
          path="/login"
          element={
            <Login />
          } /* and for this route itsnot protected so we can render this without login  */
        />
        {/* <Route path="/register" element={<RegisterAndLogout />} /> */}
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
