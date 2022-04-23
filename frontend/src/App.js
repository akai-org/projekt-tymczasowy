import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Layout } from "./Layout";
import { Homepage } from "./pages/Homepage/Homepage";
import LoginPage from "./pages/loginPage/LoginPage";

import NavBar from "./pages/NavBar/NavBar";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Layout>
        {/* <Homepage />
        <RaiseListView></RaiseListView> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
