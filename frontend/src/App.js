import Login from "./components/Login";
import PolicyPage from "./components/PolicyPage";
import Sign from "./components/Sign";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/new-user-register" element={<Sign />} />
        <Route path="/login-user" element={<Login />} />
        <Route path="/policy-redirect-page" element={<PolicyPage />} />
      </Routes>
    </>
  );
}

export default App;
