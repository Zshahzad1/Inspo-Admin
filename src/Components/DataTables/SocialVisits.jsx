import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { STRINGS } from "../../utils/Enums";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function SocialVisits() {

  function createData(name, visitors, users, rate) {
    return { name, visitors, users };
  }

  const rows = [
    createData("Inspo/", 4566,45.5),
    createData("Inspo/Dashboard",3566,32),
    createData("Inspo/Forms", 4106,12),
    createData("Inspo/Profile", 1566,44),
  ];

  return <>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{border:"2px solid black",borderRight:"none",borderLeft:"none"}}>
          <TableRow  >
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA, fontSize:"10px", fontWeight:"700", width:"60px"}}>REFERRALS</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA, fontSize:"10px", fontWeight:"700", width:"60px"}}  align="center">VISITORS</TableCell>
            <TableCell style={{fontFamily:STRINGS.FONTS.HELVITICA, fontSize:"10px", fontWeight:"700"}} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
            style={{border:"2px solid black",borderRight:"none",borderLeft:"none"}}
            > 
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA, fontSize:"14px", fontWeight:"700", width:"60px"}}  align="left">{row.name}</TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA, fontSize:"14px", fontWeight:"400", width:"70px"}}  align="center">{row.visitors}</TableCell>
              <TableCell  style={{fontFamily:STRINGS.FONTS.HELVITICA, fontSize:"14px", fontWeight:"400"}}  align="center"><ProgressBar percentage={row.users} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  </>;
}
