import { Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { STRINGS } from "../utils/Enums";
import { Switch } from "@mui/material";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import boxThreeImg from "../assets/Images/boxThreeImg.png";
import launch from "../assets/Images/Profile_project.png";
import pencilIcon from "../assets/Images/pencil-icon.png";
import overview from "../assets/Images/overview.svg";
import terms from "../assets/Images/Terms.svg";
import project from "../assets/Images/Projects.svg";
import { styled } from "@mui/material/styles";
import avature from "../assets/Images/Avature.png";
import "./Profile.css";
import axios from "axios";
import { useSelector } from "react-redux";
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 36,
  height: 18,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(12px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#000",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#fff",
        border: "1px solid black",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 13,
    height: 13.5,
    borderRadius: 7,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export default function Profile() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  // const accessToken = localStorage.getItem("token");
  const token = useSelector((state) => state.token.token);
  const [profileData, setProfileData] = useState({});
  const [check, setcheck] = useState(false);
  useEffect(() => {
    getProfile();
    // console.log(fetchData());
  }, []);

  const getProfile = async () => {
    try {
      const response = await axios.get(`${STRINGS.apiUrl}auth/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setProfileData(response);
      setcheck(true);
    } catch (error) {
      console.log("error");
    }
  };

  console.log("check", profileData);
  console.log("redux", token);
  return (
    <>
      <Container fluid>
        <Row style={{ height: "100vh" }}>
          <Col>
            {/* Search Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "35px",
                border: "3px solid black",
                margin: "auto",
                borderRadius: "8px",
                padding: "3px 12px",
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
                  width: "50vw",
                  marginLeft: "10px",
                }}
                placeholder="TYPE HERE"
              />
            </div>
            <br />
            {/* Profile Portion    */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Container>
                <Row>
                  <Col lg="6">
                    <div
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          height: "80px",
                          width: "80px",
                          backgroundColor: "lightGrey",
                          borderRadius: "5px",
                          position: "relative",
                        }}
                      >
                        <img
                          style={{
                            position: "absolute",
                            bottom: "-10px",
                            right: "-10px",
                          }}
                          src={pencilIcon}
                        />
                      </div>
                      <div
                        style={{
                          marginLeft: "8px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            lineHeight: "25px",
                            textTransform: "uppercase",
                          }}
                        >
                          {check
                            ? profileData.data.data.role.name
                            : "INSPIRED EDIBLES"}{" "}
                          <br />{" "}
                          <span
                            style={{
                              fontSize: "14px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              lineHeight: "19px",
                              fontWeight: "400",
                            }}
                          >
                            {check
                              ? profileData.data.data.email
                              : "ROOT@INSPOOO.COM"}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" style={{ margin: "auto" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      <div
                        className="profileBtn"
                        style={{ border: "1px solid black" }}
                      >
                        <div style={{ width: "" }}>
                          <img src={overview} alt="" />
                        </div>
                        <p
                          style={{
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: 700,
                            margin: "0px",
                          }}
                        >
                          OVERVIEW
                        </p>
                      </div>
                      <div className="profileBtn">
                        <img src={terms} alt="" />
                        <p
                          style={{
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: 700,
                            margin: "0px",
                          }}
                        >
                          TEAMS
                        </p>
                      </div>
                      <div className="profileBtn">
                        {" "}
                        <img src={project} alt="" />
                        <p
                          style={{
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: 700,
                            margin: "0px",
                          }}
                        >
                          PROJECTS
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <br />

            {/* Settings portion */}

            <Container>
              <Row>
                {/* BOX one */}
                <Col md="4">
                  <div
                    className="plateform"
                    style={{
                      border: "3px solid black",
                      borderRadius: "8px",
                      height: "377px",
                      padding: "12px",
                      overflow: "scroll",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        lineHeight: "25px",
                        fontWeight: "700",
                      }}
                    >
                      Platform Settings
                    </p>
                    <p
                      style={{
                        fontSize: "10px",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        lineHeight: "15px",
                        fontWeight: "700",
                      }}
                    >
                      Account
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />

                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                          lineHeight: "18px",
                          margin: "0",
                          fontWeight: "400",
                        }}
                      >
                        Email me when someone follows me
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingTop: "19px",
                      }}
                    >
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />

                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                          lineHeight: "18px",
                          fontWeight: "400",
                          margin: "0",
                        }}
                      >
                        Email me when someone answers on my post
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingTop: "19px",
                      }}
                    >
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />

                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                          lineHeight: "18px",
                          fontWeight: "400",
                          margin: "0",
                        }}
                      >
                        Email me when someone mentions me
                      </p>
                    </div>
                    <br />
                    <p
                      style={{
                        fontSize: "10px",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        lineHeight: "8px",
                        margin: "0",
                        fontWeight: "700",
                      }}
                    >
                      APPLICATION
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingTop: "19px",
                      }}
                    >
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                          lineHeight: "18px",
                          fontWeight: "400",
                          margin: "0",
                        }}
                      >
                        New launches and projects
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingTop: "19px",
                      }}
                    >
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />

                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                          lineHeight: "18px",
                          fontWeight: "400",
                          margin: "0",
                        }}
                      >
                        Monthly product updates
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingTop: "19px",
                      }}
                    >
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />

                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                          lineHeight: "18px",
                          fontWeight: "400",
                          margin: "0",
                        }}
                      >
                        Subscribe to newsletter
                      </p>
                    </div>
                  </div>
                </Col>
                {/* Box two */}
                <Col md="4">
                  <div
                    style={{
                      border: "3px solid black",
                      borderRadius: "8px",
                      height: "377px",
                      padding: "15px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        lineHeight: "25px",
                        fontWeight: "700",
                      }}
                    >
                      Profile Information
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        lineHeight: "18px",
                      }}
                    >
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                      answer is no. If two equally difficult paths, choose the
                      one more painful in the short term (pain avoidance is
                      creating an illusion of equality).
                    </p>
                    <hr />

                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        Full Name :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        OSAMA EDIBLES
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        Mobile :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        +923362524521
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        Email :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        OSAMA@INSPO.COM
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        Location :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        Kuwait
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginRight: "5px",
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        Social Media :{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{
                            color: "black",
                            fontSize: "12px",
                            marginRight: "10px",
                          }}
                        />
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{ color: "black", fontSize: "12px" }}
                        />
                      </p>
                    </div>
                  </div>
                </Col>
                {/* Box three */}
                <Col md="4">
                  <div
                    style={{
                      border: "3px solid black",
                      borderRadius: "8px",
                      height: "377px",
                      padding: "15px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        lineHeight: "25px",
                        fontWeight: "700",
                      }}
                    >
                      Conversations
                    </p>

                    <div
                      className="conversation"
                      style={{
                        // background: "red",
                        overflow: "scroll",
                        height: "90%",
                        padding: "0 8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src={boxThreeImg}
                            style={{ borderRadius: "8px" }}
                            width={40}
                            height={40}
                          />
                          <div
                            style={{ marginLeft: "8px", marginBottom: "16px" }}
                          >
                            <p
                              style={{
                                fontSize: "14px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontWeight: "700",
                                lineHeight: "19px",
                                margin: "0",
                              }}
                            >
                              Esthera Jackson <br />{" "}
                            </p>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </div>
                        </div>

                        <p
                          style={{
                            fontSize: "10px",
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: "700",
                            lineHeight: "15px",
                          }}
                        >
                          Reply
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "5px",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src={boxThreeImg}
                            style={{ borderRadius: "8px" }}
                            width={40}
                            height={40}
                          />
                          <div
                            style={{ marginLeft: "8px", marginBottom: "16px" }}
                          >
                            <p
                              style={{
                                fontSize: "14px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontWeight: "700",
                                lineHeight: "19px",
                                margin: "0",
                              }}
                            >
                              Esthera Jackson <br />{" "}
                            </p>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </div>
                        </div>

                        <p
                          style={{
                            fontSize: "10px",
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: "700",
                            lineHeight: "15px",
                          }}
                        >
                          Reply
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "5px",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src={boxThreeImg}
                            style={{ borderRadius: "8px" }}
                            width={40}
                            height={40}
                          />
                          <div
                            style={{ marginLeft: "8px", marginBottom: "16px" }}
                          >
                            <p
                              style={{
                                fontSize: "14px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontWeight: "700",
                                lineHeight: "19px",
                                margin: "0",
                              }}
                            >
                              Esthera Jackson <br />{" "}
                            </p>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </div>
                        </div>

                        <p
                          style={{
                            fontSize: "10px",
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: "700",
                            lineHeight: "15px",
                          }}
                        >
                          Reply
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "5px",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src={boxThreeImg}
                            style={{ borderRadius: "8px" }}
                            width={40}
                            height={40}
                          />
                          <div
                            style={{ marginLeft: "8px", marginBottom: "16px" }}
                          >
                            <p
                              style={{
                                fontSize: "14px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontWeight: "700",
                                lineHeight: "19px",
                                margin: "0",
                              }}
                            >
                              Esthera Jackson <br />{" "}
                            </p>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </div>
                        </div>

                        <p
                          style={{
                            fontSize: "10px",
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: "700",
                            lineHeight: "15px",
                          }}
                        >
                          Reply
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "5px",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src={boxThreeImg}
                            style={{ borderRadius: "8px" }}
                            width={40}
                            height={40}
                          />
                          <div
                            style={{ marginLeft: "8px", marginBottom: "16px" }}
                          >
                            <p
                              style={{
                                fontSize: "14px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontWeight: "700",
                                lineHeight: "19px",
                                margin: "0",
                              }}
                            >
                              Esthera Jackson <br />{" "}
                            </p>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              Hi! I need more informations...
                            </span>
                          </div>
                        </div>

                        <p
                          style={{
                            fontSize: "10px",
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: "700",
                            lineHeight: "15px",
                          }}
                        >
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

            {/* PROJECT  */}

            <Container style={{ margin: "10px 0px" }}>
              <Row>
                <Col>
                  <div
                    style={{
                      border: "3px solid black",
                      borderRadius: "8px",
                      height: "auto",
                      padding: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        lineHeight: "17px",
                        fontWeight: "700",
                      }}
                    >
                      PROJECTS
                    </p>
                    <Container>
                      <Row>
                        <Col md="3">
                          <div style={{ width: "100%" }}>
                            <img
                              src={launch}
                              style={{ borderRadius: "8px", width: "100%" }}
                            />{" "}
                          </div>
                          <br />
                          <span
                            style={{
                              fontSize: "10px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "400",
                              lineHeight: "15px",
                            }}
                          >
                            Project # 2
                          </span>
                          <br />
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              lineHeight: "25px",
                            }}
                          >
                            LAUNCH
                          </span>{" "}
                          <br />
                          <p
                            className="content"
                            style={{
                              fontSize: "12px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "400",
                              lineHeight: "18px",
                            }}
                          >
                            As Uber works through a huge amount of internal
                            management turmoil.
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="viewAllBtn">
                              <p
                                style={{
                                  paddingTop: "15px",
                                  paddingRight: "15px",
                                  paddingLeft: "15px",
                                  fontWeight: "700",
                                  fontSize: "10px",
                                  fontFamily: STRINGS.FONTS.HELVITICA,
                                }}
                              >
                                VIEW ALL
                              </p>
                            </div>

                            <div style={{ cursor: "pointer" }}>
                              <img src={avature} alt="" />
                            </div>
                          </div>
                        </Col>
                        <Col md="3">
                          <div style={{ width: "100%" }}>
                            <img
                              src={launch}
                              style={{ borderRadius: "8px", width: "100%" }}
                            />{" "}
                          </div>
                          <br />
                          <span
                            style={{
                              fontSize: "10px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "400",
                              lineHeight: "15px",
                            }}
                          >
                            Project # 2
                          </span>
                          <br />
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              lineHeight: "25px",
                            }}
                          >
                            LAUNCH
                          </span>{" "}
                          <br />
                          <p
                            className="content"
                            style={{
                              fontSize: "12px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "400",
                              lineHeight: "18px",
                            }}
                          >
                            As Uber works through a huge amount of internal
                            management turmoil.
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="viewAllBtn">
                              <p
                                style={{
                                  paddingTop: "15px",
                                  paddingRight: "15px",
                                  paddingLeft: "15px",
                                  fontWeight: "700",
                                  fontSize: "10",
                                  fontFamily: STRINGS.FONTS.HELVITICA,
                                }}
                              >
                                VIEW ALL
                              </p>
                            </div>

                            <div style={{ cursor: "pointer" }}>
                              <img src={avature} alt="" />
                            </div>
                          </div>
                        </Col>
                        <Col md="3">
                          <div style={{ width: "100%" }}>
                            <img
                              src={launch}
                              style={{ borderRadius: "8px", width: "100%" }}
                            />{" "}
                          </div>
                          <br />
                          <span
                            style={{
                              fontSize: "10px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "400",
                              lineHeight: "15px",
                            }}
                          >
                            Project # 2
                          </span>
                          <br />
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              lineHeight: "25px",
                            }}
                          >
                            LAUNCH
                          </span>{" "}
                          <br />
                          <p
                            className="content"
                            style={{
                              fontSize: "12px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "400",
                              lineHeight: "18px",
                            }}
                          >
                            As Uber works through a huge amount of internal
                            management turmoil.
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="viewAllBtn">
                              <p
                                style={{
                                  paddingTop: "15px",
                                  paddingRight: "15px",
                                  paddingLeft: "15px",
                                  fontWeight: "700",
                                  fontSize: "10",
                                  fontFamily: STRINGS.FONTS.HELVITICA,
                                }}
                              >
                                VIEW ALL
                              </p>
                            </div>

                            <div style={{ cursor: "pointer" }}>
                              <img src={avature} alt="" />
                            </div>
                          </div>
                        </Col>
                        <Col md="3">
                          <Container
                            style={{
                              border: "3px solid black",
                              borderRadius: "8px",
                              height: "auto",
                              // width: "360px",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              flexDirection: "column",
                            }}
                          >
                            <p style={{ fontSize: "30px", fontWeight: "700" }}>
                              +
                            </p>
                            <p
                              className="addnew_project"
                              style={{
                                fontSize: "18px",
                                margin: "0",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontWeight: "700",
                              }}
                            >
                              Create a New Project
                            </p>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
