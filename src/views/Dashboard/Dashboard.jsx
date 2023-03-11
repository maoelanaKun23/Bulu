import React from "react";

import { Container, } from "@material-ui/core";
import { Layout, } from "components";
import CardItem from "components/Card/CardItem";
import ProdElc from "components/ProdElc";
import Harian from "components/Harian";
import Prod from "components/ProdukPilihan";
import Kebutuhan from "components/Kebutuhan";
import Pencarian from "components/Pencarian";
import style from "./Dashboard.module.scss";




const Dashboard = () => {


    return (
        <Layout>
            <Container className={style["dashboard"]}>
                
                
            <ProdElc/>
            <br/>
            <Kebutuhan/>
            <Prod/>
            <br/>
            <br/>
            <Harian/>
            {/* <ProdElek/> */}
            <CardItem/>
                {/* <ActionAreaCard/> */}
                {/* <Discount/> */}
             
                {/* <Swager/> */}
                <Pencarian/>
            </Container>
           
        </Layout>
    );
};

export default Dashboard;
