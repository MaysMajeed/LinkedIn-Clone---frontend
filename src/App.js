import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {user ? (
            <Route path="/home" element={<HomePage />} />
          ) : (
            <Route path="/login" element={<LoginPage />} />
          )}

          {!user && <Route path="/signup" element={<SignUp />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
