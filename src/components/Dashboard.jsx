import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {localStorage.getItem("bc_access_token") ? (
        <p>Token Exists</p>
      ) : (
        <p>No Token Found</p>
      )}
    </div>
  );
};
export default Dashboard;
