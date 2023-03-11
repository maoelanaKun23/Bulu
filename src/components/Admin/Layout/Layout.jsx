import React from "react";
import { Container } from "@material-ui/core";
import { Navbar, TabLayout } from "components";
import { navTabMaster } from "constants/navTab";

const LayoutMaster = ({ children }) => {
  return (
    <>
      <Navbar />

      <Container>
        <h1>Master Routes</h1>
        <TabLayout tabList={navTabMaster} isRouterLink={true} />
      </Container>
      {children}
    </>
  );
};

export default LayoutMaster;
