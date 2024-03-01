import React, { useEffect, useState } from "react";

import { Breadcrumb, Layout, Menu, theme, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { STRINGS } from "../../utils/Enums";
import asideMenuImg from "../../assets/Images/asideMenuImg.png";

import {
  faHouse,
  faChartSimple,
  faWrench,
  faUser,
  faFile,
  faSheetPlastic,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AsideMenu = ({ collapsed }) => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter(Boolean);
    setSelectedKeys([pathnames[0]]);
  }, [location, collapsed]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // height: "100%",
        }}
      >
        <Menu
          style={{ height: "100%", borderRight: 0 }}
          selectedKeys={selectedKeys}
          mode="inline"
        >
          <Menu.Item
            className="menuItem"
            key="dashboard"
            icon={
              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faHouse}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            }
          >
            <Link
              className="menuLink"
              style={{
                textDecorationLine: "none",
                fontSize: "12px",
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontWeight: "700",
                marginLeft: "12px",
              }}
              to={`${STRINGS.ROUTES.DASHBOARD}`}
            >
              Dashboard
            </Link>
          </Menu.Item>

          <Menu.Item
            className="menuItem"
            key="tables"
            icon={
              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faChartSimple}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            }
          >
            <Link
              style={{
                textDecorationLine: "none",
                fontSize: "12px",
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontWeight: "700",
                marginLeft: "12px",
              }}
              to={`${STRINGS.ROUTES.TABLES}`}
            >
              Tables
            </Link>
          </Menu.Item>
          <Menu.Item
            className="menuItem"
            key="rtl"
            icon={
              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faWrench}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            }
          >
            <Link
              style={{
                textDecorationLine: "none",
                fontSize: "12px",
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontWeight: "700",
                marginLeft: "12px",
              }}
              to={`${STRINGS.ROUTES.RTL}`}
            >
              Payments
            </Link>
          </Menu.Item>
          {!collapsed && (
            <div style={{ padding: "10px 7px" }}>
              <Link
                style={{
                  textDecorationLine: "none",
                  color: "black",
                  fontFamily: STRINGS.FONTS.HELVITICA,
                  fontWeight: "700",
                  fontSize: "12px",
                  marginLeft: "12px",
                }}
                to={`${STRINGS.ROUTES.RTL}`}
              ></Link>
            </div>
          )}

          <p
            className="sidebarText"
            style={{
              fontFamily: STRINGS.FONTS.HELVITICA,
              fontWeight: "700",
              fontSize: "14px",
              marginLeft: "10px",
            }}
          >
            ACCOUNT PAGES
          </p>
          <Menu.Item
            className="menuItem"
            key="profile"
            icon={
              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            }
          >
            <Link
              style={{
                textDecorationLine: "none",
                fontSize: "12px",
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontWeight: "700",
                marginLeft: "12px",
              }}
              to={`${STRINGS.ROUTES.PROFILE}`}
            >
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item
            className="menuItem"
            key="approval"
            icon={
              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faFile}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            }
          >
            <Link
              style={{
                textDecorationLine: "none",
                fontSize: "12px",
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontWeight: "700",
                marginLeft: "12px",
              }}
              to={`${STRINGS.ROUTES.APPROVAL}`}
            >
              Approval
            </Link>
          </Menu.Item>
          <Menu.Item
            className="menuItem"
            key="forms"
            icon={
              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faSheetPlastic}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            }
          >
            <Link
              style={{
                textDecorationLine: "none",
                fontSize: "12px",
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontWeight: "700",
                marginLeft: "12px",
              }}
              to={`${STRINGS.ROUTES.FORMS}`}
            >
              Forms
            </Link>
          </Menu.Item>
          <Menu.Item
            className="menuItem"
            key="ratings"
            icon={
              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faRocket}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            }
          >
            <Link
              style={{
                textDecorationLine: "none",
                fontSize: "12px",
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontWeight: "700",
                marginLeft: "12px",
              }}
              to={`${STRINGS.ROUTES.RATINGS}`}
            >
              Ratings{" "}
            </Link>
          </Menu.Item>
        </Menu>
        <div
          className="sideBarMenu"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "142px",
          }}
        >
          <img src={asideMenuImg} style={{ height: "100px", width: "140px" }} />
          <p style={{ fontWeight: "700", fontSize: "14px", margin: "0px" }}>
            Need Help?
          </p>
          <p style={{ margin: "0px" }}>Please check our docs</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid black",
              width: "186px",
              height: "35px",
              cursor: "pointer",
              borderRadius: "8px",
              marginTop: "19px",
            }}
          >
            <p style={{ fontWeight: "700", margin: "0px", fontSize: "10px" }}>
              DOCUMENTATION
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsideMenu;
