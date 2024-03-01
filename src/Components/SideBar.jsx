import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import AsideMenu from "./AsideMenu/AsideMenu";
import { STRINGS } from "../utils/Enums";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    // Split the pathnames into an array and remove empty items
    const pathnames = location.pathname.split("/").filter(Boolean);
    // Select the first pathname as the selected key
    setSelectedKeys([pathnames[0]]);
  }, [location]);

  useEffect(() => {
    // const handleResize = () => {
    if (window.innerWidth < 900) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
    // };

    // window.addEventListener("resize", handleResize);

    // return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <Sider
      width={250}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo">
        {!collapsed && (
          <>
            <div style={{ marginTop: "8px" }}>
              <p
                style={{
                  fontSize: "24px",
                  textAlign: "center",
                  fontWeight: "700",
                  fontFamily: STRINGS.FONTS.POPPINS,
                }}
              >
                INSPO
              </p>
            </div>
            <hr />
          </>
        )}
        {/* {collapsed && <img src={logo} alt="Logo" />} */}
      </div>

      <AsideMenu collapsed={collapsed} />
    </Sider>
  );
};

export default SideBar;
