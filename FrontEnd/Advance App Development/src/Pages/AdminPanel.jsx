import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "../Components/AdminNav";
import AdminDashboard from "./AdminDashboard";

function AdminPanel() {
  return (
    <div>
       <AdminNav/>
      <AdminDashboard />
    </div>
  );
}
