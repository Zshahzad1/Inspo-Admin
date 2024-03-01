import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { STRINGS } from "../../utils/Enums";

export default function PageVisitsTable() {

  function createData(name, visitors, users, rate) {
    return { name, visitors, users, rate };
  }

  const rows = [
    createData("Inspo/", 4566, 340,"45.5%"),
    createData("Inspo/Dashboard",3566, 551," 32.5%"),
    createData("Inspo/Forms", 4106, 130," 12.5%"),
    createData("Inspo/Profile", 1566, 220," 44.5%"),
    createData("Inspo/Main", 4896, 340, "28.5%"),
  ];

  return <>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{border:"2px solid black",borderRight:"none",borderLeft:"none"}}>
          <TableRow  >
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA, fontWeight:"700", fontSize:"10px"}}>PAGE NAME</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA,  fontWeight:"700", fontSize:"10px"}} align="center">VISITORS</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA,  fontWeight:"700", fontSize:"10px"}} align="center">UNIQUE USERS</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA,  fontWeight:"700", fontSize:"10px"}} align="center">BOUNCE RATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
            style={{border:"2px solid black",borderRight:"none",borderLeft:"none",borderBottom:"none"}}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border:"none" } }}
            >
              <TableCell   style={{fontFamily:STRINGS.FONTS.HELVITICA, fontWeight:"700", fontSize:"14px"}}  component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA, fontWeight:"400", fontSize:"14px"}}  align="center">{row.visitors}</TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA, fontWeight:"400", fontSize:"14px"}}  align="center">{row.users}</TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA, fontWeight:"400", fontSize:"14px"}}  align="center">{row.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  </>;
}
