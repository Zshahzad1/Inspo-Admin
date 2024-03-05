import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loading from "../pages/Loading";
import { STRINGS } from "../utils/Enums";
import MasterLayout from "../layout/masterLayout";
import Approvel from "../pages/Approval/Approval";
import Approval from "../pages/Approval/Approval";
import { useSelector } from "react-redux";

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

// console.log("ggggg", isAuthenticated());

export default function Routing() {
  const token = useSelector((state) => state.token.token);

  const isAuthenticated = () => {
    return token == null;
  };

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
  // );

  // const ProtectedRoute = ({ path, element: Element }) => {
  //   return isAuthenticated() ? (
  //     <SuspensedView>
  //       <Login />
  //     </SuspensedView>
  //   ) : (
  //     <MasterLayout>
  //       <SuspensedView>
  //         <Dashboard />
  //       </SuspensedView>
  //     </MasterLayout>
  //   );
  // };

  console.log("pro", isAuthenticated());

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
          {/* <Route /> */}
          {/* <Route
            path={`${STRINGS.ROUTES.DASHBOARD}`}
            element={<ProtectedRoute />}
          /> */}
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
          {/* Other routes */}
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
