import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Modal } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { STRINGS } from "../../utils/Enums";

function RatingTable({ pendingData }) {
  function createData(name, status, date) {
    return { name, status, date };
  }

  const rows = [
    createData("ISLAM MANSORI", "COVERED", "14/06/21"),
    createData("MARK WILSON", "PENDING", "14/06/21"),
    createData("BILL NELSON", "COVERED", "14/06/21"),
    createData("HAMAD", "PENDING", "14/06/21"),
    createData("MARK WILSON", "COVERED", "14/06/21"),
    createData("KSI", "COVERED", "14/06/21"),
    createData("MARK WILSON", "COVERED", "14/06/21"),
    createData("MARK WILSON", "COVERED", "14/06/21"),
    createData("MARK WILSON", "COVERED", "14/06/21"),
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ffff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };
  return (
    <div>
      <div style={{ width: "" }}>
        <div style={{ padding: "0px " }}>
          <TableContainer
            component={Paper}
            className="table"
            style={{
              width: "100%",
              // height: "96vh",
              margin: "auto",
              borderRadius: "15px",
              overflow: "scroll",
              // overflowX: "scroll",
              padding: "28px 36px 40px 10px",
              boxShadow: "none",
            }}
            //   style={{ borderRadius: "20px", padding: "10px" }}
          >
            <Table
              className="main_table"
              sx={{ minWidth: 500 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontFamily: STRINGS.FONTS.HELVITICA,
                      fontWeight: "700",
                      fontSize: "10px",
                    }}
                    align="center"
                  >
                    TO USER
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
                {pendingData?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center">
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                          fontSize: "14px",
                          fontWeight: "700",
                          margin: "0",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        {row?.name}
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                          fontSize: "14px",
                          fontWeight: "700",
                          margin: "0",
                          fontFamily: STRINGS.FONTS.HELVITICA,
                        }}
                      >
                        {row?.status}
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
                        {row?.date}
                      </p>
                    </TableCell>
                    <TableCell align="center">
                      <div style={{ cursor: "pointer" }}>
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
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default RatingTable;
