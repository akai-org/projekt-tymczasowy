import "./Homepage.scss";

import { Layout } from "../../Layout";
import { LandingPage } from "./landingPage/LandingPage";
import RaiseListView from "./raiseListView/RaiseListView";
export function Homepage() {
  return (
    <Layout>
      <LandingPage />
      <RaiseListView></RaiseListView>
    </Layout>
  );
}
