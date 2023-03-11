import React from "react";
import { Container, } from "@material-ui/core";
import { Layout, } from "components";
import InfoDiri from "components/InfoDiri";
import style from "./DataDiri.module.scss";




const DataDiri = () => {


    return (
        <Layout>
            <Container className={style["dashboard"]}>
                
                
            <InfoDiri/>
            </Container>
           
        </Layout>
    );
};

export default DataDiri;
