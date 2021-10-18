import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/Auth/Register.js";
import Login from "views/Auth/Login.js";
import Tables from "views/examples/Tables.js";
import Kyc from "views/KYC/kyc";
import Applications from "views/Applications/Applications";
import LoanApplication from "views/LoanApplication/LoanApplication";
import KYCPending from "views/Applications/KYCPending";

const routes = [
  // {
  //   path: "/",
  //   name: "Landing",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Landing,
  //   layout: "/",
  // },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/applications",
    name: "All Applications",
    icon: "ni ni-single-02 text-yellow",
    component: Applications,
    layout: "/admin",
  },
  // {
  //   path: "/kyc/pending",
  //   name: "Pending KYC",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: KYCPending,
  //   layout: "/admin",
  // },
  {
    path: "/loan-application",
    name: "Loan Application",
    icon: "ni ni-single-02 text-yellow",
    component: LoanApplication,
    layout: "/admin",
  },
  {
    path: "/kyc",
    name: "KYC Application",
    icon: "ni ni-single-02 text-yellow",
    component: Kyc,
    layout: "/admin",
  },
  {
    path: "/user-profile",
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
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];

export default routes;
