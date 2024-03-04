import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { STRINGS } from "../../utils/Enums";
import axios from "axios";
import profilePic from "../../assets/Images/boxThreeImg.png";
import { Modal, Switch, Toolbar } from "@mui/material";
import { Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Facebook } from "@mui/icons-material";
import Filter from "../../assets/Images/Filter_SVG.svg";
import filterImg from "../../assets/Images/filter.png";
import Search from "../../Components/SearchBar/Search";
import { json, useNavigate } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
// import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SwitchButton from "../../Components/Rating/SwitchButton";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "70%",
  transform: "translate(-50%, -50%)",
  width: 603,
  bgcolor: "#ffff",
  border: "2.36px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function InfluencerApproval({ setFlag }) {
  const [modalData, setModalData] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setModalData(null);
  };

  const [open1, setOpen1] = useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };
  const [influencerData, setInfluencerData] = useState();
  const [acceptedData, setAcceptedData] = useState();
  const [deniedData, setDeniedData] = useState();
  const [isAccept, setIsAccept] = useState(false);
  const [isDeny, setIsDeny] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasrName] = useState("");

  useEffect(() => {
    getConcept();
  }, []);

  const Accept = async (id) => {
    const updatedData = { status: "ACCEPT" };
    try {
      const response = await axios.post(
        `${STRINGS.apiUrl}public/influencer/profile-status/${id}`,
        updatedData
      );
      const filteredInfluencer = influencerData.filter((s) => s._id !== id);
      setInfluencerData(filteredInfluencer);
      setOpen1(false);
      // window.location.reload(false);
    } catch (error) {
      console.log("error");
    }
  };

  const Reject = async (id) => {
    const updatedData = { status: "REJECT" };
    try {
      const response = await axios.post(
        `${STRINGS.apiUrl}public/influencer/profile-status/${id}`,
        updatedData
      );
      window.location.reload(false);
    } catch (error) {
      console.log("error");
    }
  };

  const getConcept = async () => {
    try {
      const response = await axios.get(
        `${STRINGS.apiUrl}public/influencer/inactive-profiles`
      );
      setInfluencerData(response.data.data?.influencers);

      console.log("influencer", response);
    } catch (error) {
      console.log("error");
    }
  };

  const getAccepted = async () => {
    setOpen1(true);

    try {
      const response = await axios.get(
        `${STRINGS.apiUrl}public/influencer/active-profiles`
      );
      setAcceptedData(response.data.data?.influencers);
      setOpen1(false);
    } catch (error) {
      console.log("error");
    }
  };

  const getDenied = async () => {
    setOpen1(true);
    try {
      const response = await axios.get(
        `${STRINGS.apiUrl}public/influencer/denied-profiles`
      );
      setDeniedData(response.data.data?.influencers);
      setOpen1(false);
    } catch (error) {
      console.log("error");
    }
  };

  const [switchToggle, setSwitchToggle] = useState(false);
  let navigate = useNavigate();

  // const [searchTerm, setSearchTerm] = useState("");
  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  //   const filteredData = influencerData.filter((item) =>
  //     item.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   console.log(filteredData);
  //   if (event.target.value === "" || filteredData.length == []) {
  //     setInfluencerData(influencerData);
  //   } else {
  //     // Otherwise, show only the filtered data
  //     setInfluencerData(filteredData);
  //   }
  // };
  console.log("accepted", deniedData);

  return (
    <>
      <div className="" style={{ margin: "0 12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "35px",
            border: "3px solid black",
            // margin: "0 20px",
            borderRadius: "8px",
            width: "100%",

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
              width: "100%",
              marginLeft: "10px",
            }}
            placeholder="Search"
            // value={searchTerm}
            // onChange={handleChange}
          />
        </div>
      </div>

      <div
        style={{
          width: "98%",
          // height: "96vh",
          border: "3px solid black",
          margin: "38px 10px 10px 10px",
          borderRadius: "15px",
          padding: "0px 10px",
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              fontFamily: STRINGS.FONTS.HELVITICA,
              fontSize: "18px",
              fontWeight: "700",
              width: "120px",
              margin: "0px",
              // padding: "10px",
            }}
          >
            INFLUENCER APPROVAL
          </p>
          <div
            style={{
              display: "flex",
              gap: "7px",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            {isAccept ? (
              <>
                {" "}
                <button
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "black",
                    border: "2px solid black",
                    height: "26px",
                    width: "100px",
                    color: "white",
                  }}
                >
                  <p
                    style={{
                      fontFamily: STRINGS.FONTS.HELVITICA,
                      fontWeight: "700",
                      fontSize: "10px",
                      margin: "0px",
                    }}
                    onClick={() => {
                      setIsAccept(!isAccept);
                      setIsDeny(false);
                      getConcept();
                    }}
                  >
                    ACCEPT
                  </p>
                </button>
              </>
            ) : (
              <>
                <button
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "white",
                    border: "2px solid black",
                    height: "26px",
                    width: "100px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: STRINGS.FONTS.HELVITICA,
                      fontWeight: "700",
                      fontSize: "10px",
                      margin: "0px",
                    }}
                    onClick={() => {
                      setIsAccept(!isAccept);
                      setIsDeny(false);
                      getAccepted();
                    }}
                  >
                    ACCEPT
                  </p>
                </button>
              </>
            )}
            {isDeny ? (
              <>
                <button
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "black",
                    border: "2px solid black",
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontSize: "10px",
                    height: "26px",
                    color: "white",
                    width: "100px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: STRINGS.FONTS.HELVITICA,
                      fontWeight: "700",
                      fontSize: "10px",
                      margin: "0px",
                    }}
                    onClick={() => {
                      setIsDeny(!isDeny);
                      setIsAccept(false);
                      getConcept();
                    }}
                  >
                    DENIED
                  </p>
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "white",
                    border: "2px solid black",
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontSize: "10px",
                    height: "26px",

                    width: "100px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: STRINGS.FONTS.HELVITICA,
                      fontWeight: "700",
                      fontSize: "10px",
                      margin: "0px",
                    }}
                    onClick={() => {
                      setIsDeny(!isDeny);
                      setIsAccept(false);
                      getDenied();
                    }}
                  >
                    DENIED
                  </p>
                </button>
              </>
            )}
            <div
              className="filter"
              style={{
                width: "16px",
                height: "16px",
                marginRight: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <img src={Filter} alt="" width={{ width: "100%" }} />
            </div>
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
                    setFlag("concept");
                    // navigate(STRINGS.CONCEPT_APPROVAL_TABLE);
                  }}
                >
                  SWITCH
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
        <TableContainer
          component={Paper}

          //   style={{ borderRadius: "20px", padding: "10px" }}
        >
          {" "}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell
                  style={{
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontWeight: "700",
                    fontSize: "10px",
                  }}
                  align="center"
                >
                  TYPE
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontWeight: "700",
                    fontSize: "10px",
                  }}
                  align="center"
                >
                  STATUS
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontWeight: "700",
                    fontSize: "10px",
                  }}
                  align="center"
                >
                  DATE
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontWeight: "700",
                    fontSize: "10px",
                  }}
                  align="center"
                >
                  INFO
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isDeny ? (
                <>
                  {deniedData?.map((influencer) => {
                    const [firstName, lastName] =
                      influencer?.fullname.split(" ");

                    return (
                      <TableRow
                        key={influencer?.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <img
                              style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "10px",
                              }}
                              src={profilePic}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "150px",
                              }}
                            >
                              <p style={{ margin: "0px", fontWeight: "700" }}>
                                {influencer.fullname}
                              </p>
                              <p style={{ margin: "0px" }}>
                                {influencer.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: "700",
                          }}
                          align="center"
                        >
                          INFLUENCER
                        </TableCell>
                        <TableCell align="center">
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              justifyContent: "center",
                            }}
                          >
                            {/* <button
                          style={{
                            backgroundColor: "#A9FF74",
                            border: "none",
                            height: "40px",
                            width: "90px",
                            borderRadius: "6px",
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontSize: "10px",
                            fontWeight: "700",
                          }}
                          onClick={() => Accept(influencer?._id)}
                        >
                          ACCEPT
                        </button> */}
                            <button
                              style={{
                                backgroundColor: "#FF0000",
                                border: "none",
                                height: "40px",
                                width: "90px",
                                borderRadius: "6px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                              onClick={() => Reject(influencer._id)}
                            >
                              DENY
                            </button>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <p
                            style={{
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "700",
                              fontSize: "14px",
                            }}
                          >
                            {influencer.createdAt?.slice(0, 10)}
                          </p>
                        </TableCell>
                        <TableCell align="center">
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setModalData(influencer);
                              setOpen(true);
                            }}
                          >
                            <p
                              style={{
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontWeight: "700",
                                fontSize: "14px",
                              }}
                            >
                              VIEW
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </>
              ) : isAccept ? (
                <>
                  {acceptedData?.map((influencer) => {
                    const [firstName, lastName] =
                      influencer?.fullname.split(" ");

                    return (
                      <TableRow
                        key={influencer?.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <img
                              style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "10px",
                              }}
                              src={profilePic}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "150px",
                              }}
                            >
                              <p style={{ margin: "0px", fontWeight: "700" }}>
                                {influencer.fullname}
                              </p>
                              <p style={{ margin: "0px" }}>
                                {influencer.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: "700",
                          }}
                          align="center"
                        >
                          INFLUENCER
                        </TableCell>
                        <TableCell align="center">
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              style={{
                                backgroundColor: "#A9FF74",
                                border: "none",
                                height: "40px",
                                width: "90px",
                                borderRadius: "6px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                              onClick={() => Accept(influencer?._id)}
                            >
                              ACCEPT
                            </button>
                            {/* <button
                              style={{
                                backgroundColor: "#FF0000",
                                border: "none",
                                height: "40px",
                                width: "90px",
                                borderRadius: "6px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                              onClick={() => Reject(influencer._id)}
                            >
                              DENY
                            </button> */}
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <p
                            style={{
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "700",
                              fontSize: "14px",
                            }}
                          >
                            {influencer.createdAt?.slice(0, 10)}
                          </p>
                        </TableCell>
                        <TableCell align="center">
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setModalData(influencer);
                              setOpen(true);
                            }}
                          >
                            <p
                              style={{
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontWeight: "700",
                                fontSize: "14px",
                              }}
                            >
                              VIEW
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </>
              ) : (
                <>
                  {influencerData?.map((influencer) => {
                    const [firstName, lastName] =
                      influencer.fullname.split(" ");

                    return (
                      <TableRow
                        key={influencer?.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <img
                              style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "10px",
                              }}
                              src={profilePic}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "150px",
                              }}
                            >
                              <p style={{ margin: "0px", fontWeight: "700" }}>
                                {influencer.fullname}
                              </p>
                              <p style={{ margin: "0px" }}>
                                {influencer.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: "700",
                          }}
                          align="center"
                        >
                          INFLUENCER
                        </TableCell>
                        <TableCell align="center">
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              style={{
                                backgroundColor: "#A9FF74",
                                border: "none",
                                height: "40px",
                                width: "90px",
                                borderRadius: "6px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                              onClick={() => Accept(influencer?._id)}
                            >
                              ACCEPT
                            </button>
                            <button
                              style={{
                                backgroundColor: "#FF0000",
                                border: "none",
                                height: "40px",
                                width: "90px",
                                borderRadius: "6px",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                              onClick={() => Reject(influencer._id)}
                            >
                              DENY
                            </button>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <p
                            style={{
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "700",
                              fontSize: "14px",
                            }}
                          >
                            {influencer.createdAt?.slice(0, 10)}
                          </p>
                        </TableCell>
                        <TableCell align="center">
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setModalData(influencer);
                              setOpen(true);
                            }}
                          >
                            <p
                              style={{
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                fontWeight: "700",
                                fontSize: "14px",
                              }}
                            >
                              VIEW
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                className="nameAndImageWrapper"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={profilePic}
                  style={{ width: "90px", height: "90px" }}
                  alt="influencer-img"
                />
                <p
                  style={{
                    fontFamily: STRINGS.FONTS.POPPINS,
                    fontSize: "44px",
                    fontWeight: "500",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {modalData?.fullname}
                </p>
              </Box>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <div className="left" style={{ width: "50%" }}>
                  <div style={{ position: "relative" }}>
                    <p
                      style={{
                        margin: "0px",
                        fontFamily: STRINGS.FONTS.POPPINS,
                        fontSize: "16px",
                      }}
                    >
                      SOCIALS
                    </p>
                    <a href="https://www.facebook.com/">
                      <input
                        value={modalData?.socials[0]?.link}
                        style={{
                          border: "2px solid black",
                          height: "45px",
                          width: "100%",
                          borderRadius: "9px",
                          cursor: "pointer",
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontWeight: "400",
                          padding: "15px",
                          width: "100%",
                          paddingRight: "30px",
                        }}
                      />
                    </a>

                    <span
                      style={{
                        position: "absolute",
                        top: "64%",
                        transform: "translateY(-50%)",
                        zIndex: "100",
                        right: "10px",
                      }}
                    >
                      {/* Replace 'WhatsAppIcon' with your actual WhatsApp icon component */}
                      <Facebook />
                    </span>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      marginTop: "4px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        fontFamily: STRINGS.FONTS.POPPINS,
                        fontSize: "16px",
                      }}
                    ></p>
                    <a href="">
                      <input
                        value={modalData?.socials[1]?.link}
                        style={{
                          border: "2px solid black",
                          height: "45px",
                          width: "100%",
                          borderRadius: "9px",
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontWeight: "400",
                          cursor: "pointer",
                          padding: "15px",
                          width: "100%",
                          paddingRight: "30px",
                        }}
                      />
                    </a>

                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: "100",
                        right: "10px",
                      }}
                    >
                      {/* Replace 'WhatsAppIcon' with your actual WhatsApp icon component */}
                      <TwitterIcon />
                    </span>
                  </div>
                  <input
                    style={{
                      marginTop: "4px",
                      border: "2px solid black",
                      height: "45px",
                      width: "100%",
                      cursor: "pointer",
                      borderRadius: "9px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "18px",
                      fontWeight: "400",
                      padding: "15px",
                    }}
                  ></input>
                  <input
                    style={{
                      marginTop: "4px",
                      border: "2px solid black",
                      height: "45px",
                      width: "100%",
                      borderRadius: "9px",
                      cursor: "pointer",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "18px",
                      fontWeight: "400",
                      padding: "15px",
                    }}
                  ></input>
                  <p
                    style={{
                      margin: "0px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "16px",
                      margin: "10px 0",
                    }}
                  >
                    ADDRESS
                  </p>
                  <input
                    value={modalData?.address}
                    style={{
                      border: "2px solid black",
                      height: "45px",
                      width: "100%",
                      borderRadius: "9px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "18px",
                      fontWeight: "400",
                      padding: "15px",
                    }}
                  ></input>
                  <div style={{ position: "relative" }}>
                    <p
                      style={{
                        margin: "0px",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                      }}
                    >
                      CONTACT
                    </p>
                    <input
                      value={modalData?.phone}
                      style={{
                        border: "2px solid black",
                        height: "45px",
                        width: "100%",
                        borderRadius: "9px",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontWeight: "400",
                        padding: "15px",
                        width: "100%",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "64%",
                        transform: "translateY(-50%)",
                        right: "10px",
                      }}
                    >
                      {/* Replace 'WhatsAppIcon' with your actual WhatsApp icon component */}
                      <WhatsAppIcon />
                    </span>
                  </div>
                </div>

                <div className="right" style={{ width: "50%" }}>
                  <p
                    style={{
                      margin: "0px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "18px",
                    }}
                  >
                    EMAIL
                  </p>
                  <input
                    value={modalData?.email}
                    style={{
                      border: "2px solid black",
                      height: "45px",
                      textTransform: "uppercase",
                      width: "100%",
                      borderRadius: "9px",
                      padding: "15px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "18px",
                      fontWeight: "400",
                    }}
                  ></input>
                  <Box
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          fontFamily: STRINGS.FONTS.POPPINS,
                          fontSize: "16px",
                        }}
                      >
                        FIRST NAME
                      </p>
                      <input
                        value={firstName}
                        style={{
                          border: "2px solid black",
                          height: "45px",
                          width: "100%",
                          borderRadius: "9px",
                          fontFamily: STRINGS.FONTS.POPPINS,
                          fontSize: "18px",
                          fontWeight: "400",
                          padding: "15px",
                        }}
                      ></input>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          fontFamily: STRINGS.FONTS.POPPINS,
                          fontSize: "16px",
                        }}
                      >
                        LAST NAME
                      </p>
                      <input
                        value={lastName}
                        style={{
                          border: "2px solid black",
                          height: "45px",
                          width: "100%",
                          borderRadius: "9px",
                          fontFamily: STRINGS.FONTS.POPPINS,
                          fontSize: "18px",
                          fontWeight: "400",
                          padding: "15px",
                        }}
                      ></input>
                    </Box>
                  </Box>
                  <p
                    style={{
                      margin: "0px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "16px",
                    }}
                  >
                    ABOUT THEM
                  </p>

                  <textarea
                    value={modalData?.introduction}
                    style={{
                      border: "2px solid black",
                      height: "75px",
                      width: "100%",
                      borderRadius: "9px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "18px",
                      fontWeight: "400",
                      padding: "15px",
                    }}
                    name=" "
                    id=""
                    rows="10"
                  ></textarea>

                  <p
                    style={{
                      margin: "0px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "16px",
                    }}
                  >
                    FILE
                  </p>
                  <input
                    style={{
                      border: "2px solid black",
                      height: "45px",
                      width: "100%",
                      borderRadius: "9px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "18px",
                      fontWeight: "400",
                      padding: "15px",
                    }}
                  ></input>
                  <p
                    style={{
                      margin: "0px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "16px",
                    }}
                  >
                    DATE OF BIRTH
                  </p>
                  <input
                    type="text"
                    value={modalData?.dateOfBirth}
                    style={{
                      border: "2px solid black",
                      height: "45px",
                      width: "100%",
                      borderRadius: "9px",
                      fontFamily: STRINGS.FONTS.POPPINS,
                      fontSize: "18px",
                      fontWeight: "400",
                      padding: "15px",
                    }}
                  ></input>
                </div>
              </div>
              <p
                style={{
                  margin: "0px",
                  fontFamily: STRINGS.FONTS.POPPINS,
                  fontSize: "16px",
                  textAlign: "center",
                  fontWeight: "600",
                  marginBottom: "13px",
                  marginTop: "18px",
                }}
              >
                DOWNLOAD AS DOCX
              </p>
            </Box>
          </Box>
        </Modal>

        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // height: "100%",
          }}
        >
          <div
            className=""
            // style={}
          >
            <div
              className=""
              style={{
                width: "400px",
                margin: "auto",
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
              }}
            >
              <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
