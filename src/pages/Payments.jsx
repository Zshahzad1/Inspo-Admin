import React from "react";
import "./Payments.css";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import TabComponent from "../Components/TabsComponent/Tabs";
import exportImg from "../assets/Images/cloud-icon.png";
import { STRINGS } from "../utils/Enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function PaymentsComponent() {
  return (
    <div
      style={{ fontFamily: STRINGS.FONTS.HELVITICA }}
      className="responsiveWrapper"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "35px",
          border: "3px solid black",
          margin: "auto",
          borderRadius: "8px",
          padding: "3px 5px",
        }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "black", fontSize: "12px" }}
        />
        <input
          style={{
            border: "none",
            outline: "none",
            width: "40vw",
            marginLeft: "10px",
          }}
          placeholder="Search"
        />
      </div>

      <div className="flexSubWrapper">
        <p
          className="txtOverview"
          style={{ fontFamily: STRINGS.FONTS.POPPINS }}
        >
          Payments overview
        </p>
        <div className="iconFlex">
          <div className="cloudDownloadIcon">
            <img src={exportImg} alt="Export Icon" />
            <span style={{ fontFamily: STRINGS.FONTS.POPPINS }}>Export</span>
          </div>
          <div className="addIcon">
            <AddIcon
              style={{ color: "white", fontSize: "22px", marginRight: "5px" }}
            />
            <span style={{ fontFamily: STRINGS.FONTS.POPPINS }}>
              Create Reports
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Area */}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabComponent />
      </Box>

      {/* dropdown option Area
       */}
    </div>
  );
}
