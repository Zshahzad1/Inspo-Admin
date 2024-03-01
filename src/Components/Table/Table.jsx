import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
// import exportImg from "../../assets/Images/cloud-icon.png";
import successIcon from "../../assets/Images/success-icon.png";
import visaIcon from "../../assets/Images/Visa.png";
import clockIcon from "../../assets/Images/time-line.png";
import calenderIcon from "../../assets/Images/flag-line.png";
import paymentIcon from "../../assets/Images/bank-card-line.png";
// import arrowDownIcon from "../../assets/Images/arrow-down-s-line.png";
import { Checkbox, InputAdornment } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import EditIcon from "@mui/icons-material/Edit";
// import Divider from "@mui/material/Divider";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { STRINGS } from "../../utils/Enums";
import "../../pages/Payments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DropDownComponent = () => {
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 135,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);
  const openStatus = Boolean(anchorE2);
  const handleClickStatus = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseStatus = () => {
    setAnchorE2(null);
  };

  const [anchorE3, setAnchorE3] = React.useState(null);
  const openStatusPMethod = Boolean(anchorE3);
  const handleClickStatusPMethod = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleCloseStatusPMethod = () => {
    setAnchorE3(null);
  };

  return (
    <div className="innerFlex">
      <div>
        <Button
          startIcon={<img src={clockIcon} />}
          style={{
            width: "135px",
            backgroundColor: "#000000",
            borderRadius: "8px",
          }}
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <p
            style={{
              margin: "0px",
              fontFamily: STRINGS.FONTS.POPPINS,
              fontSize: "14px",
            }}
          >
            Concept
          </p>
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          style={{ width: "125px" }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            {/* <EditIcon /> */}
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            {/* <FileCopyIcon /> */}
            Duplicate
          </MenuItem>
        </StyledMenu>
      </div>
      <div>
        <Button
          startIcon={<img src={calenderIcon} />}
          style={{
            width: "120px",
            backgroundColor: "#000000",
            borderRadius: "8px",
          }}
          id="demo-customized-button"
          aria-controls={openStatus ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openStatus ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClickStatus}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <p
            style={{
              margin: "0px",
              fontFamily: STRINGS.FONTS.POPPINS,
              fontSize: "14px",
            }}
          >
            Status
          </p>
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorE2}
          open={openStatus}
          onClose={handleCloseStatus}
        >
          <MenuItem onClick={handleCloseStatus} disableRipple>
            {/* <EditIcon /> */}
            Succeeded
          </MenuItem>
          <MenuItem onClick={handleCloseStatus} disableRipple>
            {/* <FileCopyIcon /> */}
            Failed
          </MenuItem>
        </StyledMenu>
      </div>{" "}
      <div>
        <Button
          startIcon={<img src={paymentIcon} />}
          style={{ backgroundColor: "#000000", borderRadius: "8px" }}
          id="demo-customized-button"
          aria-controls={openStatusPMethod ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openStatusPMethod ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClickStatusPMethod}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <p
            style={{
              margin: "0px",
              fontFamily: STRINGS.FONTS.POPPINS,
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            P. METHOD
          </p>
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorE3}
          open={openStatusPMethod}
          onClose={handleCloseStatusPMethod}
        >
          <MenuItem onClick={handleCloseStatusPMethod} disableRipple>
            {/* <EditIcon /> */}
            Visa
          </MenuItem>
          <MenuItem onClick={handleCloseStatusPMethod} disableRipple>
            {/* <FileCopyIcon /> */}
            Mastercard
          </MenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "1px solid black" } }}>
        <TableCell
          style={{
            fontFamily: STRINGS.FONTS.POPPINS,
            borderBottom: "1px solid black",
          }}
          component="th"
          scope="row"
        >
          <input
            className="custom_checkbox"
            type="checkbox"
            style={{
              borderRadius: "4px",
              width: "14px",
              height: "14px",
              marginRight: "31px",
              backgroundColor: "black",
            }}
          />

          {/* <Checkbox style={{ borderRadius: "4px" }} /> */}
          {row.name}
        </TableCell>
        <TableCell style={{ borderBottom: "1px solid black" }} align="center">
          <div
            style={{
              fontFamily: STRINGS.FONTS.POPPINS,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 0px",
              gap: "5px",
              borderRadius: "8px",
              backgroundColor: "#EDFFEA",
            }}
          >
            <img src={successIcon} />
            <p style={{ color: "#165E3D", textAlign: "center", margin: "0px" }}>
              {row.calories}
            </p>
          </div>
        </TableCell>
        <TableCell style={{ borderBottom: "1px solid black" }} align="center">
          <p>
            <span
              style={{ fontWeight: "700", fontFamily: STRINGS.FONTS.POPPINS }}
            >
              {row.fat}
            </span>
            KWD
          </p>
        </TableCell>
        <TableCell
          style={{
            fontFamily: STRINGS.FONTS.POPPINS,
            borderBottom: "1px solid black",
          }}
          align="center"
        >
          <img style={{ marginRight: "4px" }} src={visaIcon} />
          {row.carbs}
        </TableCell>
        <TableCell
          style={{
            fontFamily: STRINGS.FONTS.POPPINS,
            borderBottom: "1px solid black",
          }}
          align="center"
        >
          {row.protein}
        </TableCell>
        <TableCell
          style={{ borderBottom: "1px solid black", textAlign: "right" }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "06c1774-7f3d-46ad...90a8",
    "Succeeded",
    "19,623.00 ",
    "•••• 4242",
    "Mar 23, 2022, 13:00 PM"
  ),
  createData(
    "06c1774-7f3d-46ad...90a8",
    "Succeeded",
    "19,623.00 ",
    "•••• 4242",
    "Mar 23, 2022, 13:00 PM"
  ),
  createData(
    "06c1774-7f3d-46ad...90a8",
    "Succeeded",
    "19,623.00 ",
    "•••• 4242",
    "Mar 23, 2022, 13:00 PM"
  ),
  createData(
    "06c1774-7f3d-46ad...90a8",
    "Succeeded",
    "19,623.00 ",
    "•••• 4242",
    "Mar 23, 2022, 13:00 PM"
  ),
  createData(
    "06c1774-7f3d-46ad...90a8",
    "Succeeded",
    "19,623.00 ",
    "•••• 4242",
    "Mar 23, 2022, 13:00 PM"
  ),
];

export default function PaymentsTable() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "75vh",
        justifyContent: "space-between",
      }}
    >
      <div className="dropdownWrapper">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <DropDownComponent />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "52px",
              border: "1px solid black",
              borderRadius: "8px",
              padding: "3px 9px",
            }}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#959BA4", fontSize: "16px" }}
            />
            <input
              style={{
                border: "none",
                outline: "none",
                width: "30vw",
                marginLeft: "10px",
                fontFamily: STRINGS.FONTS.POPPINS,
              }}
              placeholder="Search by amount , payment method..."
            />
          </div>
        </div>

        <hr style={{ borderTop: "1px solid black", opacity: "1" }} />

        <TableContainer
          style={{
            borderTop: "1px solid black",
            borderLeft: "none",
            borderRight: "none",
            marginTop: "20px",
            boxShadow: "none",
          }}
          component={Paper}
        >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontFamily: STRINGS.FONTS.POPPINS,
                    fontWeight: "600",
                    borderBottom: "1px solid black",
                    textTransform: "uppercase",
                  }}
                >
                  Payment ID
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: STRINGS.FONTS.POPPINS,
                    fontWeight: "600",
                    textTransform: "uppercase",
                    borderBottom: "1px solid black",
                  }}
                  align="center"
                >
                  Status
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: STRINGS.FONTS.POPPINS,
                    fontWeight: "600",
                    textTransform: "uppercase",
                    borderBottom: "1px solid black",
                  }}
                  align="center"
                >
                  Amount
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: STRINGS.FONTS.POPPINS,
                    fontWeight: "600",
                    textTransform: "uppercase",
                    borderBottom: "1px solid black",
                  }}
                  align="center"
                >
                  P. Method
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: STRINGS.FONTS.POPPINS,
                    fontWeight: "600",
                    textTransform: "uppercase",
                    borderBottom: "1px solid black",
                  }}
                  align="center"
                >
                  Creation Date
                </TableCell>
                <TableCell style={{ borderBottom: "1px solid black" }} />
              </TableRow>
            </TableHead>
            <TableBody
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
              }}
            >
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "16px",
          marginTop: "30px",
        }}
      >
        <button
          style={{
            borderRadius: "6px",
            backgroundColor: "white",
            color: "black",
            border: "1px solid #F0F2F4",
            width: "75px",
            height: "36px",
          }}
        >
          <p
            style={{
              margin: "0px",
              fontFamily: STRINGS.FONTS.POPPINS,
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Previous
          </p>
        </button>
        <button
          style={{
            borderRadius: "6px",
            backgroundColor: "white",
            color: "black",
            border: "1px solid #F0F2F4",
            width: "75px",
            height: "36px",
          }}
        >
          <p
            style={{
              margin: "0px",
              fontFamily: STRINGS.FONTS.POPPINS,
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Next
          </p>
        </button>
      </Box>
    </Box>
  );
}
