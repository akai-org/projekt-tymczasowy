import "./App.scss";

import { Layout } from "./Layout";
import { Homepage } from "./pages/Homepage/Homepage";
import RaiseListView from "./pages/raiseListView/RaiseListView";

function App() {
  return (
    <Layout>
      <Homepage />
      <RaiseListView></RaiseListView>
    </Layout>
  );
}

export default App;
