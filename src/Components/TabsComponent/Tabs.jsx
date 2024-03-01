import * as React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PaymentsTable from "../Table/Table";
import { useState } from "react";
import { STRINGS } from "../../utils/Enums";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          style={{ padding: "0px" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#000000",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="primary"
        >
          <Tab
            label="All payments"
            style={{
              fontFamily: STRINGS.FONTS.POPPINS,
              color: value === 0 ? "black" : "inherit",
              fontWeight: value === 0 ? "bold" : "normal",
              textTransform: "none",
            }}
          />
          <Tab
            label="Succeeded"
            style={{
              fontFamily: STRINGS.FONTS.POPPINS,

              color: value === 1 ? "black" : "inherit",
              fontWeight: value === 1 ? "bold" : "normal",
              textTransform: "none",
            }}
          />
          <Tab
            label="Refunded"
            style={{
              fontFamily: STRINGS.FONTS.POPPINS,
              color: value === 2 ? "black" : "inherit",
              fontWeight: value === 2 ? "bold" : "normal",
              textTransform: "none",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* TABLE AREA */}
        <div className="tableStyle">
          <PaymentsTable />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* TABLE AREA */}
        <div className="tableStyle">
          <PaymentsTable />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* TABLE AREA */}
        <div className="tableStyle">
          <PaymentsTable />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
