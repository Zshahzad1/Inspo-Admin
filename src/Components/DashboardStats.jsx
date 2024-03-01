import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { faFile, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import { STRINGS } from "../utils/Enums";

export default function DashboardStats() {
  return (
    <Container style={{ marginTop: "10px", paddingRight: "0px" }}>
      <Row>
        <Col md="3">
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
                    fontSize: "12px",
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontWeight: "700",
                  }}
                >
                  TODAY CONCEPT SIGN UP <br />
                  <span style={{ fontSize: "18px" }}>567</span>
                </p>
              </div>

              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            </div>
            <p
              style={{
                // lineHeight: "5px",
                marginBottom: "0px",
                color: "#48BB78",
                fontSize: "14px",
                fontWeight: "700",
                fontFamily: STRINGS.FONTS.HELVITICA,
              }}
            >
              +3.204% <span style={{ color: "gray" }}>Since Last Month</span>
            </p>
          </div>
        </Col>
        <Col md="3">
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
                    fontSize: "12px",
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontWeight: "700",
                  }}
                >
                  TODAY INFUENCER USERS <br />
                  <span style={{ fontSize: "18px" }}>7,020</span>
                </p>
              </div>

              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faGlobe}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            </div>
            <p
              style={{
                // lineHeight: "5px",
                marginBottom: "0px",
                color: "#48BB78",
                fontSize: "14px",
                fontWeight: "700",
                fontFamily: STRINGS.FONTS.HELVITICA,
              }}
            >
              +5.84% <span style={{ color: "gray" }}>Since Last Month</span>
            </p>
          </div>
        </Col>
        <Col md="3">
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
                    fontSize: "12px",
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontWeight: "700",
                  }}
                >
                  ACCEPTED <br />
                  <span style={{ fontSize: "18px" }}>12,400</span>
                </p>
              </div>

              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faFile}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            </div>
            <p
              style={{
                // lineHeight: "5px",
                marginBottom: "0px",
                color: "red",
                fontSize: "14px",
                fontWeight: "700",
                fontFamily: STRINGS.FONTS.HELVITICA,
              }}
            >
              -7.84% <span style={{ color: "gray" }}>Since Last Month</span>
            </p>
          </div>
        </Col>

        <Col md="3">
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
                    fontSize: "12px",
                    fontFamily: STRINGS.FONTS.HELVITICA,
                    fontWeight: "700",
                  }}
                >
                  DENIED <br />
                  <span style={{ fontSize: "18px" }}>15,020</span>
                </p>
              </div>

              <div className="menuIcon">
                <FontAwesomeIcon
                  icon={faFile}
                  style={{ color: "#ffffff", fontSize: "12px" }}
                />
              </div>
            </div>
            <p
              style={{
                // lineHeight: "5px",
                marginBottom: "0px",
                color: "#48BB78",
                fontSize: "14px",
                fontWeight: "700",
                fontFamily: STRINGS.FONTS.HELVITICA,
              }}
            >
              +7.12% <span style={{ color: "gray" }}>Since Last Month</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
