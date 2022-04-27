import "./App.scss";

import { Homepage } from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Profile from "./pages/Profile/Profile";
import Description from "./pages/RaiseDescription/Description";
import NavBar from "./pages/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/description" element={<Description />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
