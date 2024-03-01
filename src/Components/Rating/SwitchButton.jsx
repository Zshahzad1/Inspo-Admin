import React, { useState } from "react";
import { STRINGS } from "../../utils/Enums";
import { json, useNavigate } from "react-router-dom";
const SwitchButton = React.memo(() => {
  const [switchToggle, setSwitchToggle] = useState(false);
  let navigate = useNavigate();
  return (
    <div className="">
      <div
        style={{
          width: "113px",
          height: "32px",
          border: "1px solid black",
          borderRadius: "10px",
          position: "relative",
          zIndex: "0",
        }}
      >
        <div
          style={{
            width: "91px",
            height: "32px",
            border: "1px solid black",
            borderRadius: "10px",
            position: "absolute",
            left: switchToggle ? "-1px" : "22px",
            top: "-1px",
            fontSize: "10px",
            fontWeight: "600",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "10",
            background: "white",
            cursor: "pointer",
            transition: "left 0.3s ease",
          }}
          onClick={() => {
            setSwitchToggle(!switchToggle);
          }}
        >
          SWITCH
        </div>
      </div>
    </div>
  );
});

export default SwitchButton;
