import React from "react";
import { Container, } from "@material-ui/core";
import { Layout, } from "components";
import { LayoutCo } from "components";

import InfoDiri from "components/InfoDiri";
import style from "./DataDiri.module.scss";




const DataDiri = () => {


    return (
        <LayoutCo>
            <Container className={style["dashboard"]}>
                
                
            <InfoDiri/>
            </Container>
           
        </LayoutCo>
    );
};

export default DataDiri;
