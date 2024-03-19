import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../Components/UserNav";
import { Grid } from "@mui/material";

function UserPanel() {
  const boxContentStyle = {
    color: "rgb(21, 25, 67)", // Setting the text color
    textAlign: "centre", // Centering the text horizontally
    cursor: "pointer", // Changing cursor to indicate clickability
  };

  return (
    <div>
      <UserNav />
      <Grid container spacing={2} style={{ padding: "100px" }}>
        <Grid item xs={12} sm={6}>
          <Link to="/viewinstitution">
            <div
              style={{
                backgroundColor: "grey",
                height: "200px",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div style={boxContentStyle}>View Institution</div>
            </div>
          </Link>
        </Grid>
    
        <Grid item xs={12} sm={6}>
          <Link to="/application">
            <div
              style={{
                backgroundColor: "grey",
                height: "200px",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div style={boxContentStyle}>Add Student Profile</div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/payment">
            <div
              style={{
                backgroundColor: "grey",
                height: "200px",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div style={boxContentStyle}>Make Payment</div>
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
