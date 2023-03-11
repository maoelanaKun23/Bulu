import React from "react";
import { Container,} from "@material-ui/core";
import { Layout,  } from "components";

import  Smartphone  from "components/Ph-samsung";
import style from "./Phone.module.scss";




const Phone = () => {


    return (
        <Layout>
            <Container className={style["phone"]}>


                <Smartphone/>
                

                

            </Container>

        </Layout>
    );
};

export default Phone;
