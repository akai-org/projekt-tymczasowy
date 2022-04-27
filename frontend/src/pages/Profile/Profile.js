import React from "react";
import "./Profile.scss";
import Card from "./Card/Card";
import Commitments from "./Commitments/Commitments";
import Subscribed from "./Subscribed/Subscribed";
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
        <Card>test</Card>
        <Card>test</Card>
      </div>
    </div>
  );
}
