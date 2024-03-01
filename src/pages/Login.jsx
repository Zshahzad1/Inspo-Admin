import { Switch } from "@mui/material";
import React from "react";
import { json, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Form,
  Label,
  Placeholder,
  Row,
} from "reactstrap";
import { STRINGS } from "../utils/Enums";
import "./../index.css";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { update } from "../redux/tokenSlice";
const validationSchema = yup.object().shape({
  email: yup.string().email().required(),

  password: yup
    .string()
    .min(8)
    .max(32)
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,25}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one of the special characters: @$!%*?&."
    ),
});

export default function Login() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      signIn(values);
      console.log("Form submitted with values:", values);
      formik.resetForm();
    },
  });

  const signIn = async (e) => {
    try {
      const response = await axios.post(`${STRINGS.apiUrl}auth/user/login`, e);

      console.log("abffc", response);
      // localStorage.setItem("token", response.data.data.accessToken);
      dispatch(update({ token: response.data.data.accessToken }));
      navigate(STRINGS.ROUTES.DASHBOARD);
    } catch (error) {
      console.log(error);
    }
    console.log("abc", localStorage.getItem("token"));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",

        height: "100vh",
      }}
    >
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {/* <Row style={{ marginTop: "35px" }}>
        <Row > */}
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "60px",
          }}
        >
          <Col
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <p
              style={{
                fontFamily: STRINGS.FONTS.POPPINS,
                fontWeight: "700",
                fontSize: "18px",
                margin: "0px",
              }}
            >
              INSPO
            </p>
            <div className="downloadBtn">
              <p
                style={{
                  fontFamily: STRINGS.FONTS.HELVITICA,
                  fontSize: "10px",
                  fontWeight: "700",
                  margin: "0px",
                }}
              >
                DOWNLOAD INSPO
              </p>
            </div>
          </Col>
          <Col
            className="login_heading"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            <p
              className="heading"
              style={{
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              {" "}
              HELLO!!!
            </p>
            <p
              style={{
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontSize: "14px",
                fontWeight: "400",
                width: "300px",
                textAlign: "center",
              }}
            >
              {" "}
              LOGIN INSPIRING ADMINS AND DO ADMIN THINGS{" "}
            </p>
          </Col>
        </Row>

        {/* </Row> */}
        <Col
          className="form_box"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "60px",
          }}
        >
          <div
            className="loginBox"
            style={{
              width: "30vw",
              // height: "391px",
              border: "2px solid black",
              borderRadius: "10px",
            }}
          >
            <div>
              <Form
                onSubmit={formik.handleSubmit}
                className="inner_form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "51px",
                  marginRight: "51px",
                  marginTop: "66px",
                  fontSize: "15px",
                  marginBottom: "23px",
                }}
              >
                <FormGroup>
                  <Label
                    style={{
                      fontFamily: STRINGS.FONTS.HELVITICA,
                      fontSize: "14px",
                      fontWeight: "400",
                      paddingLeft: "9px",
                      margin: "2px",
                    }}
                    for="exampleEmail"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    style={{ border: "2px solid black", height: "50px" }}
                  />{" "}
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  ) : null}
                </FormGroup>
                <FormGroup
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Label
                    style={{
                      fontFamily: STRINGS.FONTS.HELVITICA,
                      fontSize: "14px",
                      fontWeight: "400",
                      paddingLeft: "9px",
                      margin: "2px",
                    }}
                    for="exampleEmail"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    style={{
                      border: "2px solid black",
                      height: "50px",
                    }}
                  />{" "}
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                  ) : null}
                </FormGroup>
                <Label style={{ paddingLeft: "9px" }} check>
                  Remember me
                </Label>

                <Switch {...label} defaultChecked color="default" />

                <input className="loginBtn" type="submit" value="LETS GO" />

                <Container>
                  {" "}
                  {/* <input className="loginBtn" type="submit" value="LETS GO" /> */}
                  {/* <div className="loginBtn" >
                    <p>LETS GO</p>
                  </div> */}
                </Container>
              </Form>
            </div>
          </div>
        </Col>

        <Row
          className="login_links"
          style={{ marginTop: "40px", marginBottom: "60px", width: "100%" }}
        >
          <Col
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <p
              style={{
                fontFamily: STRINGS.FONTS.HELVITICA,
                fontWeight: "400",
                fontSize: "12px",
                width: "250px",
                margin: "0px",
              }}
            >
              @ 2024, DEVELOPED by INSPO
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "30px",
              }}
            >
              <p
                style={{
                  fontFamily: STRINGS.FONTS.HELVITICA,
                  fontSize: "12px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                inspooo.com
              </p>
              <p
                style={{
                  fontFamily: STRINGS.FONTS.HELVITICA,
                  fontSize: "12px",
                  fontWeight: "400",
                  margin: "0px",
                  // width:"60px"
                }}
              >
                Simmmple
              </p>
              <p
                style={{
                  fontFamily: STRINGS.FONTS.HELVITICA,
                  fontSize: "12px",
                  fontWeight: "400",
                  margin: "0px",
                  // width:"60px"
                }}
              >
                Blog
              </p>
              <p
                style={{
                  fontFamily: STRINGS.FONTS.HELVITICA,
                  fontSize: "12px",
                  fontWeight: "400",
                  margin: "0px",
                  // width:"60px"
                }}
              >
                License
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
