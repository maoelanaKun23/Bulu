import React from "react";

import {  Container,  } from "@material-ui/core";
import { Layout,  } from "components";
import ProdOppo from "components/Ph-oppo";
import style from "./PhnOppo.module.scss";




const PhoneOppo = () => {


    return (
        <Layout>
            <Container className={style["phone"]}>


                
                <ProdOppo/>

                

            </Container>

        </Layout>
    );
};

export default PhoneOppo;
