import { Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { STRINGS } from "../utils/Enums";
import ProfileImg from "../assets/Images/RatingProfile.png";
import { FallingLines } from "react-loader-spinner";
import Filter from "../assets/Images/Filter_SVG.svg";
import RatingTable from "../Components/Rating/RatingTable";
import SwitchButton from "../Components/Rating/SwitchButton";
import notFound from "../assets/Images/notFound.svg";
import { Modal, Switch, Toolbar } from "@mui/material";
import axios from "axios";
import { Empty } from "antd";
export default function Ratings() {
  const [checked, setChecked] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [isRating, setIsRating] = useState(false);
  const [isData, setIsData] = useState(false);
  const [isSchedule, setIsSchedule] = useState(false);
  const [acceptedData, setAcceptedData] = useState();

  const [pendingData, setPendingData] = useState();
  const [open1, setOpen1] = useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    getAccepted();
    // getPending();
  }, []);
  // let currentData = acceptedData[currentIndex];

  const getAccepted = async () => {
    try {
      const response = await axios.get(
        `${STRINGS.apiUrl}public/concept/active-profiles`
      );
      setAcceptedData(response.data.data?.concept);
      setIsData(true);
    } catch (error) {
      console.log("error");
    }
  };

  const getPending = async () => {
    try {
      const response = await axios.get(
        `${STRINGS.apiUrl}public/request/by-concept/${acceptedData[currentIndex]._id}/initiate`
      );
      setPendingData(response.data.data);
      if (pendingData) {
        setOpen1(true);
      }
    } catch (error) {
      console.log("error");
      setOpen1(true);
    }
  };

  const getRating = async () => {
    try {
      setPendingData(null);
      const response = await axios.get(
        `${STRINGS.apiUrl}public/request/by-concept/${acceptedData[currentIndex]._id}/review`
      );
      setPendingData(response.data.data);
      if (pendingData) {
        setOpen1(true);
      }
    } catch (error) {
      console.log("error");
      setOpen1(true);
    }
  };

  const getSchedule = async () => {
    try {
      // setPendingData(null)
      const response = await axios.get(
        `${STRINGS.apiUrl}public/request/by-concept/${acceptedData[currentIndex]._id}/active`
      );
      setPendingData(response.data.data);
      if (pendingData) {
        setOpen1(true);
      }
    } catch (error) {
      console.log("error");
      setOpen1(true);
    }
  };
  const handleNotFound = () => {
    // if (pendingData) {
    //   console.log("hello");
    //   setOpen1(true);
    // }
  };

  const PickUp = [
    {
      id: 1,
      img: ProfileImg,
      name: "GOODCUP",
      email: "GC@simmmple.com",
    },
    {
      id: 2,
      img: ProfileImg,
      name: "GOODCUP",
      email: "GC@simmmple.com",
    },
    {
      id: 3,
      img: ProfileImg,
      name: "GOODCUP",
      email: "GC@simmmple.com",
    },
    {
      id: 4,
      img: ProfileImg,
      name: "GOODCUP",
      email: "GC@simmmple.com",
    },
    {
      id: 5,
      img: ProfileImg,
      name: "GOODCUP",
      email: "GC@simmmple.com",
    },
    {
      id: 6,
      img: ProfileImg,
      name: "GOODCUP",
      email: "GC@simmmple.com",
    },
    {
      id: 7,
      img: ProfileImg,
      name: "GOODCUP",
      email: "GC@simmmple.com",
    },
    {
      id: 8,
      img: ProfileImg,
      name: "GOODCUP",
      email: "GC@simmmple.com",
    },
  ];
  console.log("pending", acceptedData);
  console.log("rating", pendingData);
  return (
    <>
      <Container fluid style={{ paddingLeft: "21px" }}>
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
          />
        </div>

        <Container style={{ padding: "0 40px" }}>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "50px",
            }}
          >
            <div
              className="rating_name "
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  padding: "0",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: STRINGS.FONTS.HELVITICA,
                  fontSize: "18px",
                }}
              >
                CONCEPT NAME
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "35px",
                  border: "2px solid black",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: "8px",
                  // paddingRight: "calc(1.5rem*0.5)",
                  paddingLeft: "calc(1.5rem*0.5)",
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
                    // width: "100%",
                    marginLeft: "10px",
                  }}
                  placeholder="Search"
                />
              </div>
            </div>

            <div
              className="tabs_buttons "
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <button
                style={{
                  border: "none",
                  background: isPending ? "black" : "white",
                  color: isPending ? "white" : "black",
                  border: "2px solid black",
                  borderRadius: "12px",
                  fontSize: "13px",
                  fontWeight: "600",
                  width: "100px",
                  height: "26px",
                }}
                onClick={() => {
                  getPending();
                  setIsPending(true);
                  setIsSchedule(false);
                  setIsRating(false);
                  handleNotFound();
                }}
              >
                PENDING
              </button>
              <button
                style={{
                  border: "2px solid black",
                  borderRadius: "12px",
                  width: "100px",
                  fontSize: "13px",
                  background: isRating ? "black" : "white",
                  color: isRating ? "white" : "black",

                  fontWeight: "600",
                  height: "26px",
                }}
                onClick={() => {
                  setIsRating(true);
                  setIsPending(false);
                  setIsSchedule(false);
                  getRating();
                }}
              >
                RATING
              </button>
              <button
                style={{
                  border: "2px solid black",
                  borderRadius: "12px",
                  width: "100px",
                  fontSize: "13px",
                  fontWeight: "600",
                  background: isSchedule ? "black" : "white",
                  color: isSchedule ? "white" : "black",
                  height: "26px",
                }}
                onClick={() => {
                  // getPending()
                  setIsSchedule(true);
                  setIsPending(false);
                  setIsRating(false);
                  getSchedule();
                }}
              >
                SCHEDULED
              </button>
              <div
                className="filter"
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <img src={Filter} alt="" width={{ width: "100%" }} />
              </div>

              <SwitchButton />
            </div>
          </div>
        </Container>

        <Container
          style={{
            border: "3px solid black",
            display: "flex",
            borderRadius: "12px",
            marginTop: "10px",
            paddingBottom: "20px",
          }}
        >
          <div className="" style={{ width: "40%" }}>
            <div
              className="rating_profile_main"
              style={{
                display: "flex",
                marginTop: "76px",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <div
                className="img"
                style={{ width: "146px", height: "146px", borderRadius: "4px" }}
              >
                <img src={ProfileImg} alt="" width="100%" height="100%" />
              </div>
              <div className="name_email_main">
                <p
                  style={{
                    fontSize: "35px",
                    fontWeight: "600",
                    margin: "0",
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    width: "100%",
                  }}
                >
                  {isData ? acceptedData[currentIndex]?.name : "GOODCUP"}
                </p>
                <p
                  style={{
                    fontSize: "35px",
                    margin: "0",

                    fontWeight: "400",
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    width: "100%",
                    wordBreak: "break-all",
                  }}
                >
                  {isData
                    ? acceptedData[currentIndex]?.email
                    : "GC@simmmple.com"}
                </p>
              </div>
            </div>

            <div
              className="pick_concept"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "700",
                  margin: "0",
                  fontFamily: STRINGS.FONTS.HELVITICA,
                  marginBottom: "6px",
                }}
              >
                PICK CONCEPT
              </p>
              <div
                className="scroll-container"
                style={{
                  width: "277px",
                  height: "370px",
                  border: "2px solid black",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  overflowY: "scroll",
                  // overflowX: "scroll",
                  paddingTop: "20px",
                  paddingLeft: "9px",
                }}
              >
                <div style={{ overflowX: "scroll" }}>
                  {acceptedData?.map((data, index) => {
                    return (
                      <>
                        <div
                          className="rating_profile"
                          style={{
                            display: "flex",
                            gap: "15px",
                          }}
                          onClick={() => {
                            setCurrentIndex(index);
                          }}
                        >
                          <div
                            className="img"
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "4px",
                            }}
                          >
                            <img
                              src={ProfileImg}
                              alt=""
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                          <div className="name_email">
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                                margin: "0",
                              }}
                            >
                              {data.name}
                            </p>
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                margin: "0",
                                fontFamily: STRINGS.FONTS.HELVITICA,
                              }}
                            >
                              {data.email}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>

                {/* <div
                  className="rating_profile"
                  style={{ display: "flex", gap: "15px" }}
                >
                  <div
                    className="img"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "4px",
                    }}
                  >
                    <img src={ProfileImg} alt="" width="100%" height="100%" />
                  </div>
                  <div className="name_email">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        margin: "0",
                      }}
                    >
                      GOODCUP
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        margin: "0",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                      }}
                    >
                      GC@simmmple.com
                    </p>
                  </div>
                </div>

                <div
                  className="rating_profile"
                  style={{ display: "flex", gap: "15px" }}
                >
                  <div
                    className="img"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "4px",
                    }}
                  >
                    <img src={ProfileImg} alt="" width="100%" height="100%" />
                  </div>
                  <div className="name_email">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        margin: "0",
                      }}
                    >
                      GOODCUP
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        margin: "0",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                      }}
                    >
                      GC@simmmple.com
                    </p>
                  </div>
                </div>

                <div
                  className="rating_profile"
                  style={{ display: "flex", gap: "15px" }}
                >
                  <div
                    className="img"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "4px",
                    }}
                  >
                    <img src={ProfileImg} alt="" width="100%" height="100%" />
                  </div>
                  <div className="name_email">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        margin: "0",
                      }}
                    >
                      GOODCUP
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        margin: "0",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                      }}
                    >
                      GC@simmmple.com
                    </p>
                  </div>
                </div>

                <div
                  className="rating_profile"
                  style={{ display: "flex", gap: "15px" }}
                >
                  <div
                    className="img"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "4px",
                    }}
                  >
                    <img src={ProfileImg} alt="" width="100%" height="100%" />
                  </div>
                  <div className="name_email">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        margin: "0",
                      }}
                    >
                      GOODCUP
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        margin: "0",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                      }}
                    >
                      GC@simmmple.com
                    </p>
                  </div>
                </div>

                <div
                  className="rating_profile"
                  style={{ display: "flex", gap: "15px" }}
                >
                  <div
                    className="img"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "4px",
                    }}
                  >
                    <img src={ProfileImg} alt="" width="100%" height="100%" />
                  </div>
                  <div className="name_email">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        margin: "0",
                      }}
                    >
                      GOODCUP
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        margin: "0",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                      }}
                    >
                      GC@simmmple.com
                    </p>
                  </div>
                </div>

                <div
                  className="rating_profile"
                  style={{ display: "flex", gap: "15px" }}
                >
                  <div
                    className="img"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "4px",
                    }}
                  >
                    <img src={ProfileImg} alt="" width="100%" height="100%" />
                  </div>
                  <div className="name_email">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                        margin: "0",
                      }}
                    >
                      GOODCUP
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        margin: "0",
                        fontFamily: STRINGS.FONTS.HELVITICA,
                      }}
                    >
                      GC@simmmple.com
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div style={{ width: "60%" }}>
            <RatingTable pendingData={pendingData} />
          </div>
        </Container>
      </Container>{" "}
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
              flexDirection: "column",
              borderRadius: "20px",
              gap: "20px",
              padding: "30px",
            }}
          >
            <div style={{ width: "200px", height: "200px" }}>
              <img src={notFound} alt="" />
            </div>
            <h2>Data Not Found!</h2>
          </div>
        </div>
      </Modal>
    </>
  );
}
