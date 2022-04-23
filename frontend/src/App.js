import "./App.scss";

import { Layout } from "./Layout";
import { Homepage } from "./pages/Homepage/Homepage";
import LoginPage from "./pages/loginPage/LoginPage";
import RaiseListView from "./pages/raiseListView/RaiseListView";

function App() {
  return (
    <Layout>
      <Homepage />
      <RaiseListView></RaiseListView>
      <LoginPage></LoginPage>
    </Layout>
  );
}

export default App;
