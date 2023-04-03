import React from "react";
import Foot from "components/Footer";
import { navTab } from "constants/navTab";
import { TabLayout, NavbarCeck ,NavbarBot} from "components";
import { Button, Container, Grid } from "@material-ui/core";
import style from "./LayoutCo.module.scss";
const LayoutCo = ({ children }) => {
 
  return (
    <>

      <NavbarCeck className={style["navbar"]} />
      {/* <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/> */}
      
      
      
      {children}
      <hr color="#F0F0F0" size="4" />
      <Foot/>
    </>
  );
};

export default LayoutCo;
