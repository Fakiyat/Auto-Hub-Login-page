// import Register from "./Pages/Register.jsx";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./feature/auth/Login";
import HomePage from "./feature/inventory/HomePage";
import ProtectedRoute from "./feature/navigation/ProtectedRoute";
import NotFound from "./shared/components/NotFound";

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
