import React from "react";

import {  Container,  } from "@material-ui/core";
import { Layout,  } from "components";
import PhMi from "components/Ph-mi";
import PhInfinix from "components/PhInfinix";
import style from "./PhoneInf.module.scss";




const PhoneInf = () => {


    return (
        <Layout>
            <Container className={style["phone"]}>


                
                <PhInfinix/>

                

            </Container>

        </Layout>
    );
};

export default PhoneInf;
