import Index from "views/Index.js";
import Profile from "views/Profile/Profile";
import Register from "views/Auth/Register.js";
import Login from "views/Auth/Login.js";
import Tables from "views/examples/Tables.js";
import Kyc from "views/KYC/kyc";
import Applications from "views/Applications/Applications";
import LoanApplication from "views/LoanApplication/LoanApplication";
import KYCPending from "views/Applications/KYCPending";
import LoanType from "views/LoanType/LoanType";
import CONSTANTS from "Routes/routes.json"

const routes = [
  {
    path: CONSTANTS.DASHBOARD,
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: CONSTANTS.ALL_APPLICATION,
    name: "All Applications",
    icon: "ni ni-single-02 text-yellow",
    component: Applications,
    layout: "/admin",
  },
  // {
  //   path: CONSTANTS.KYC_PENDING,
  //   component: KYCPending,
  //   layout: "/admin"
  // },
  {
    path: CONSTANTS.LOAN_TYPE,
    name: "Loan Types",
    icon: "ni ni-single-02 text-yellow",
    component: LoanType,
    layout: "/admin",
  },
  {
    path: CONSTANTS.LOAN_APPLICATION,
    name: "Loan Application",
    icon: "ni ni-single-02 text-yellow",
    component: LoanApplication,
    layout: "/admin",
  },
  {
    path: CONSTANTS.KYC_VIEW,
    name: "KYC Application",
    icon: "ni ni-single-02 text-yellow",
    component: Kyc,
    layout: "/admin",
  },
  {
    path: CONSTANTS.USER_PROFILE_VIEW,
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: CONSTANTS.LOGIN,
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: CONSTANTS.REGISTER,
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];

export default routes;
