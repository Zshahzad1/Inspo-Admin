import React, { useState } from "react";
import Search from "../../Components/SearchBar/Search";
import "./approval.css";
import { Link } from "react-router-dom";
import ConceptApproval from "../ConceptApproval/ConceptApproval";
import InfluencerApproval from "../InfluencerApproval/InfluencerApproval";

const Approval = () => {
  const [flag, setFlag] = useState("");
  return (
    <>
      {flag === "" ? (
        <>
          <div className="mainPageWrapper">
            <div className="searchbarDiv">
              <Search />
            </div>
            <div className="mainWrapper">
              <div className="selectOne">
                <p>SELECT ONE</p>
              </div>
              <div className="btnFlex">
                {/* <Link to={"/concept-approval-table"}> */}
                <button
                  onClick={() => {
                    setFlag("concept");
                  }}
                  className="btnStyle"
                >
                  CONCEPT{" "}
                </button>
                {/* </Link> */}
                {/* <Link to={"/influencer-approval-table"}> */}
                <button
                  onClick={() => {
                    setFlag("influencer");
                  }}
                  className="btnStyle"
                >
                  INFLUENCER{" "}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </>
      ) : flag === "concept" ? (
        <>
          <ConceptApproval setFlag={setFlag} />
        </>
      ) : flag === "influencer" ? (
        <>
          <InfluencerApproval setFlag={setFlag} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Approval;
