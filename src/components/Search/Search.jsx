import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Button ,Container} from '@material-ui/core';

import style from "./Search.module.scss";

const Search = () => {
    
    return (
        <div className={style["content"]}>
            <input className={style["search"]} type="search" placeholder="Cari Disini" />

            <Button className={style["comp"]}>
                <SearchIcon />
            </Button>



            

        </div>
    )
}

export default Search