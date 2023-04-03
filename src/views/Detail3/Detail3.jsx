import React from "react";
import Recomend from "components/Recomend";
import { Container, } from "@material-ui/core";
import { Layout, } from "components";
import style from "./Detail3.module.scss";




const Detail3 = () => {


    return (
        <Layout>
            <Container className={style["dashboard"]}>
                <Recomend/>
            
            </Container>
           
        </Layout>
    );
};

export default Detail3;
