import { Col, Container, Row } from "reactstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { STRINGS } from "../utils/Enums";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Chart from "react-apexcharts";
import DashboardStats from "../Components/DashboardStats";
import PageVisitsTable from "../Components/DataTables/PageVisitsTable";
import SocialVisits from "../Components/DataTables/SocialVisits";
import "./dashboardStyles.css";

export default function Dashboard() {
  let initialStateLine = {
    options: {
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: ["#000000"],
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [98, 200, 250, 160, 220, 320, 400, 420, 485, 520, 420, 350],
      },
      {
        name: "data2",
        data: [420, 218, 230, 190, 350, 410, 370, 320, 420, 480, 460, 500],
      },
    ],
  };

  const getInfo = async () => {
    try {
      const response = await axios.get(
        `${STRINGS.apiUrl}public/user/today-active-denied`
      );
     // setConceptData(response.DashboardStats);
    } catch (error) {
      console.log("error");
    }
  };

  let initialStateBar = {
    options: {
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "15%",
          borderRadius: 5,
        },
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#000000"],
      chart: {
        type: "bar",
        width: 10,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "March", "April", "May"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [10, 22, 15, 26, 25],
      },
    ],
  };

  const [graphConfig, setGraphConfig] = useState(initialStateLine);
  const [barGraphConfig, setBarGraphConfig] = useState(initialStateBar);

  return (
    <>
      <Container fluid>
        <Row style={{ paddingRight: "0px" }}>
          <Col md="12">
            {/* Search Bar */}
            <Container>
              <Row style={{ paddingRight: "0px" }}>
                <Col style={{ paddingRight: "0px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "35px",
                      border: "3px solid black",
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
                </Col>
              </Row>
            </Container>

            {/* DASHBOARD STATISTICS */}
            <DashboardStats />

            {/* Graphs */}

            <Container style={{ marginTop: "18px" }}>
              <Row>
                <Col md="8">
                  <div
                    style={{
                      border: "3px solid black",
                      borderRadius: "20px",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: "18px",
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontWeight: "700",
                          }}
                        >
                          OVERVIEW <br />{" "}
                          <p
                            style={{
                              fontSize: "14px",
                              fontFamily: STRINGS.FONTS.HELVITICA,
                              fontWeight: "700",
                            }}
                          >
                            <span style={{ color: "#48BB78" }}>(+5) more</span>{" "}
                            IN 2023{" "}
                          </p>
                        </p>
                      </div>
                    </div>

                    <Chart
                      options={graphConfig.options}
                      series={graphConfig.series}
                      type="line"
                      height={320}
                      // width="500"
                    />
                  </div>
                </Col>

                <Col
                  md="4"
                  style={{
                    border: "3px solid black",
                    borderRadius: "20px",
                    padding: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                          fontWeight: "700",
                        }}
                      >
                        PERFORMANCE
                      </p>
                    </div>
                  </div>
                  <Chart
                    options={barGraphConfig.options}
                    series={barGraphConfig.series}
                    type="bar"
                    height={320}
                    // width="500"
                  />
                </Col>
              </Row>
            </Container>

            {/* DATA TABLES  */}

            <Container style={{ marginTop: "18px" }}>
              <Row>
                <Col className="pageVisitsStyle" lg="8" md="12" sm="12">
                  <div
                    style={{
                      border: "3px solid black",
                      borderRadius: "20px",
                      overflow: "hidden",
                      height: "400px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "15px ",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "18px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                          fontWeight: "700",
                        }}
                      >
                        Page Visits <br />{" "}
                      </p>
                      <div className="dashboardBtn">
                        <p style={{ fontSize: "11px", fontWeight: "700" }}>
                          SEE ALL
                        </p>
                      </div>
                    </div>

                    <PageVisitsTable />
                  </div>
                </Col>

                <Col className="socialTrafficStyle" lg="4" md="12" sm="12">
                  <div
                    style={{
                      border: "3px solid black",
                      borderRadius: "20px",
                      overflow: "hidden",
                      height: "400px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "15px ",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "18px",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                          fontWeight: "700",
                        }}
                      >
                        Social Traffic <br />{" "}
                      </p>
                      <div className="dashboardBtn">
                        <p
                          style={{
                            fontFamily: STRINGS.FONTS.HELVITICA,
                            fontSize: "10px",
                            fontWeight: "700",
                          }}
                        >
                          SEE ALL
                        </p>
                      </div>
                    </div>

                    <SocialVisits />
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}
