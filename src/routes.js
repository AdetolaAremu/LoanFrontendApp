import CONSTANTS from "Routes/routes.json"
import Index from "views/Index.js";
import Profile from "views/Profile/Profile";
import Register from "views/Auth/Register.js";
import Login from "views/Auth/Login.js";
import Kyc from "views/KYC/kyc";
import Applications from "views/Applications/Applications";
import LoanApplication from "views/LoanApplication/LoanApplication";
import LoanType from "views/LoanType/LoanType";
import KYCPending from "views/Applications/KYCPending";
import KYCAccepted from "views/Applications/KYCAccepted";
import KYCRejected from "views/Applications/KYCRejected";
import LoanPending from "views/Applications/LoanPending";
import LoanApproved from "views/Applications/LoanApproved";
import LoanRejected from "views/Applications/LoanRejected";

const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    show:true,
    checkadmin:true
  },
  {
    path: CONSTANTS.ALL_APPLICATION,
    name: "All Applications",
    icon: "ni ni-single-02 text-yellow",
    component: Applications,
    layout: "/admin",
    show:true,
    checkadmin:true
  },
  {
    path: CONSTANTS.KYC_PENDING,
    name: "KYC Pending",
    icon: "ni ni-single-02 text-yellow",
    component: KYCPending,
    layout: "/admin",
    show:false,
    checkadmin:false
  },
  {
    path: CONSTANTS.KYC_APPROVED,
    name: "KYC Approved",
    icon: "ni ni-single-02 text-yellow",
    component: KYCAccepted,
    layout: "/admin",
    show:false,
    checkadmin:false
  },
  {
    path: CONSTANTS.KYC_REJECTED,
    name: "KYC Rejected",
    icon: "ni ni-single-02 text-yellow",
    component: KYCRejected,
    layout: "/admin",
    show:false,
    checkadmin:false
  },
  {
    path: CONSTANTS.LOAN_PENDING,
    name: "Loan Pending",
    icon: "ni ni-single-02 text-yellow",
    component: LoanPending,
    layout: "/admin",
    show:false,
    checkadmin:false
  },
  {
    path: CONSTANTS.LOAN_APPROVED,
    name: "Loan Approved",
    icon: "ni ni-single-02 text-yellow",
    component: LoanApproved,
    layout: "/admin",
    show:false,
    checkadmin:false
  },
  {
    path: CONSTANTS.LOAN_REJECTED,
    name: "Loan Rejected",
    icon: "ni ni-single-02 text-yellow",
    component: LoanRejected,
    layout: "/admin",
    show:false,
    checkadmin:true
  },
  {
    path: CONSTANTS.LOAN_TYPE,
    name: "Loan Types",
    icon: "ni ni-single-02 text-yellow",
    component: LoanType,
    layout: "/admin",
    show:true,
    checkadmin:true
  },
  {
    path: CONSTANTS.LOAN_APPLICATION,
    name: "Loan Application",
    icon: "ni ni-single-02 text-yellow",
    component: LoanApplication,
    layout: "/admin",
    show:true,
    checkadmin:false
  },
  {
    path: CONSTANTS.KYC_VIEW,
    name: "KYC Application",
    icon: "ni ni-single-02 text-yellow",
    component: Kyc,
    layout: "/admin",
    show:true,
    checkadmin:false
  },
  {
    path: CONSTANTS.USER_PROFILE_VIEW,
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    show:true,
    checkadmin:false
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    show:false,
    checkadmin:false
  },
  {
    path: CONSTANTS.REGISTER,
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    show:false,
    checkadmin:false
  },
];

export default routes;
