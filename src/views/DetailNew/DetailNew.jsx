import React from "react";
import PenggunaBaru from "components/PenggunaBaru";
import { Container, } from "@material-ui/core";
import { Layout, } from "components";
import style from "./DetailNew.module.scss";




const DetailNew = () => {


    return (
        <Layout>
            <Container className={style["dashboard"]}>
                
            <PenggunaBaru/>
            </Container>
           
        </Layout>
    );
};

export default DetailNew;
