import "./App.scss";

import { Layout } from "./Layout";
import { Homepage } from "./pages/Homepage/Homepage";
import LoginPage from "./pages/loginPage/LoginPage";
import RaiseListView from "./pages/raiseListView/RaiseListView";
import NavBar from "./pages/NavBar/NavBar";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Layout>
        <Homepage />
        <RaiseListView></RaiseListView>
      </Layout>
    </>
  );
}

export default App;
