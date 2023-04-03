import {
  LOGIN,
  REGISTER,
  FORGOT_PASS,
  DASHBOARD,
  DETAIL_1,
  DETAIL_2,
  DETAIL_3,
  SAMSUNG,
  OPPO,
  XIAOMI,
  REALME,
  INFINIX,
  DATADIRI,
  DETAIL_NEW,
  DETAIL_SM,
  DETAIL_OP,
  DETAIL_MI,
  DETAIL_RL,
  DETAIL_FX,
  CHECKOUT,
  CHECKOUT_01,
  CHECKOUT_02,
  CHECKOUT_03,
  CHECKOUT_NW,
  CHECKOUT_OPPO,
  CHECKOUT_MI,
  CHECKOUT_RL,
  CHECKOUT_FX,
  BASE_URL,
} from "./routes";
import {
  CoFx,
  CoMi,
  CoR,
  CoP,
  CoNw,
  Co3,
  Co2,
  Co1,
  CheckOut,
  DetailFx,
  DetailR,
  DetailMi,
  DetailOppo,
  DetailSm,
  Detail3,
  DetailNew,
  Detail1,
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
    path: DASHBOARD,
    component: DataDiri,
    exact: true
  },
  {
    path: CHECKOUT,
    component: CheckOut,
    exact: true
  },
  {
    path: CHECKOUT_FX,
    component: CoFx,
    exact: true
  },
  {
    path: CHECKOUT_01,
    component: Co1,
    exact: true
  },
  {
    path: CHECKOUT_RL,
    component: CoR,
    exact: true
  },
  {
    path: CHECKOUT_MI,
    component: CoMi,
    exact: true
  },
  {
    path: CHECKOUT_NW,
    component: CoNw,
    exact: true
  },
  {
    path: CHECKOUT_02,
    component: Co2,
    exact: true
  },
  {
    path: CHECKOUT_03,
    component: Co3,
    exact: true
  },
  {
    path: CHECKOUT_OPPO,
    component: CoP,
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
    path: BASE_URL,
    component: Dashboard,
    exact: true
  },
  {
    path: DETAIL_MI,
    component: DetailMi,
    exact: true
  },
  {
    path: DETAIL_FX,
    component: DetailFx,
    exact: true
  },
  {
    path: DETAIL_RL,
    component: DetailR,
    exact: true
  },
  {
    path: DETAIL_SM,
    component: DetailSm,
    exact: true
  },
  {
    path: DETAIL_OP,
    component: DetailOppo,
    exact: true
  },
  {
    path: DETAIL_2,
    component: Detail,
    exact: true
  },
  {
    path: DETAIL_1,
    component: Detail1,
    exact: true
  },
  {
    path: DETAIL_3,
    component: Detail3,
    exact: true
  },
  {
    path: DETAIL_NEW,
    component: DetailNew,
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
