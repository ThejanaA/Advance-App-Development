import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "../Components/AdminNav";
import { Grid } from "@mui/material";

function UserPanel() {
  const boxContentStyle = {
    color: "rgb(21, 25, 67)", // Setting the text color
    textAlign: "centre", // Centering the text horizontally
    cursor: "pointer", // Changing cursor to indicate clickability
  };

  return (
    <div>
      <AdminNav />
      <Grid container spacing={2} style={{ padding: "40px" }}>
        <Grid item xs={12} sm={6}>
          <Link to="/addinstitution">
            <div
              style={{
                backgroundColor: "grey",
                height: "200px",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div style={boxContentStyle}>Add Institutions</div>
            </div>
          </Link>
        </Grid>
    
        <Grid item xs={12} sm={6}>
          <Link to="/userprofile">
            <div
              style={{
                backgroundColor: "grey",
                height: "200px",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div style={boxContentStyle}>View Student Profile</div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/paymenthistory">
            <div
              style={{
                backgroundColor: "grey",
                height: "200px",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div style={boxContentStyle}>Payment History</div>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserPanel;
