import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../Components/UserNav";
import AdminDashboard from "./AdminDashboard";

function AdminPanel() {
  return (
    <div>
     <UserNav/>
      <AdminDashboard />
    </div>
  );
}
