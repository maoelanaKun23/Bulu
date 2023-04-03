import React from "react";

import { Container, } from "@material-ui/core";
import { Layout, } from "components";
import DetailDiskon from "components/DetailDiskon";
import style from "./Detail1.module.scss";




const Detail1 = () => {


    return (
        <Layout>
            <Container className={style["dashboard"]}>
                <DetailDiskon/>
                
            
            </Container>
           
        </Layout>
    );
};

export default Detail1;
