import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";

function App() {
  // user=localStorage.getItem("loginJWT");
  const user = "true";

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {user ? (
            <Route path="/home" element={<HomePage user={user} />} />
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
