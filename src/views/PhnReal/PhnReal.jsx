import React from "react";

import {  Container,  } from "@material-ui/core";
import { Layout } from "components";
import PhReal from "components/PhReal";
import style from "./PhnReal.module.scss";




const PhoneReal = () => {


    return (
        <Layout>
            <Container className={style["phone"]}>


                
                <PhReal/>

                

            </Container>

        </Layout>
    );
};

export default PhoneReal;
