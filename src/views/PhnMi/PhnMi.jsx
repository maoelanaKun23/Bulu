import React from "react";

import {  Container,  } from "@material-ui/core";
import { Layout,  } from "components";
import PhMi from "components/Ph-mi";
import style from "./PhnMi.module.scss";




const PhnMi = () => {


    return (
        <Layout>
            <Container className={style["phone"]}>


                
                <PhMi/>

                

            </Container>

        </Layout>
    );
};

export default PhnMi;
