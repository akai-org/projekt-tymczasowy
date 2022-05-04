import React from "react";
import "./Profile.scss";
import Card from "./Card/Card";
import Commitments from "./Commitments/Commitments";
import Subscribed from "./Subscribed/Subscribed";
import YourItems from "./YourItems/YourItems";
import Benefits from "./Benefits/Benefits";
export default function Profile() {
  return (
    <div className="profile-main">
      <div className="profile-grid">
        <Card>
          <Commitments />
        </Card>
        <Card>
          <Subscribed />
        </Card>
        <Card>
          <YourItems />
        </Card>
        <Card>
          <Benefits />
        </Card>
      </div>
    </div>
  );
}
