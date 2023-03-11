import {
  LOGIN,
  REGISTER,
  FORGOT_PASS,
  DASHBOARD,
  DETAIL,
  SAMSUNG,
  OPPO,
  XIAOMI,
  REALME,
  INFINIX,
  DATADIRI,
} from "./routes";
import {
  DataDiri,
  Login,
  Register,
  ForgotPassword,
  Dashboard,
  Detail,
  Phone,
  PhoneOppo,
  PhnMi,
  PhoneReal,
  PhoneInf,
} from "views";


export const ROUTES_MENU = [
  {
    path: DATADIRI,
    component: DataDiri,
    exact: true
  },
  {
    path: LOGIN,
    component: Login,
    exact: true
  },
  {
    path: REGISTER,
    component: Register,
    exact: true
  },
  {
    path: FORGOT_PASS,
    component: ForgotPassword,
    exact: true
  },
  {
    path: DASHBOARD,
    component: Dashboard,
    exact: true
  },
  {
    path: DETAIL,
    component: Detail,
    exact: true
  },
  {
    path: SAMSUNG,
    component: Phone,
    exact: true
  },
  {
    path: OPPO,
    component: PhoneOppo,
    exact: true
  },
  {
    path: XIAOMI,
    component: PhnMi,
    exact: true
  },
  {
    path: REALME,
    component: PhoneReal,
    exact: true
  },
  {
    path: INFINIX,
    component: PhoneInf,
    exact: true
  }
];
