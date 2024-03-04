import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loading from "../pages/Loading";
import { STRINGS } from "../utils/Enums";
import MasterLayout from "../layout/masterLayout";
import Approvel from "../pages/Approval/Approval";
import Approval from "../pages/Approval/Approval";

const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Tables = lazy(() => import("../pages/Tables"));
const Payments = lazy(() => import("../pages/Payments"));
const Forms = lazy(() => import("../pages/Forms"));
const Ratings = lazy(() => import("../pages/Ratings"));
const Profile = lazy(() => import("../pages/Profile"));
const InfluencerApprovalTable = lazy(() =>
  import("../pages/InfluencerApproval/InfluencerApproval")
);
const ConceptApprovalTable = lazy(() =>
  import("../pages/ConceptApproval/ConceptApproval")
);

// const isAuthenticated = () => {
//   return localStorage.getItem("token") !== null;
// };

// isAuthenticated() ? (
//   <MasterLayout>
//     <SuspensedView>
//       <Dashboard />
//     </SuspensedView>
//   </MasterLayout>
// ) : (
//   <SuspensedView>
//     <Login />
//   </SuspensedView>
// )

// console.log("ggggg", isAuthenticated());

export default function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={`${STRINGS.ROUTES.LOGIN}`}
            element={
              <SuspensedView>
                <Login />
              </SuspensedView>
            }
          />

          <Route
            path={`${STRINGS.ROUTES.DASHBOARD}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Dashboard />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.TABLES}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Tables />
                </SuspensedView>
              </MasterLayout>
            }
          />

          <Route
            path={`${STRINGS.ROUTES.RTL}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Payments />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.PROFILE}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Profile />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.FORMS}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Forms />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.APPROVAL}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Approval />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.RATINGS}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Ratings />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.CONCEPT_APPROVAL_TABLE}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <ConceptApprovalTable />
                </SuspensedView>
              </MasterLayout>
            }
          />

          <Route
            path={`${STRINGS.ROUTES.INFLUENCER_APPROVAL_TABLE}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <InfluencerApprovalTable />
                </SuspensedView>
              </MasterLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

const SuspensedView = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
