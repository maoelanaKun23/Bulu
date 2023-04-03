import React, { useState } from 'react'
import { Card, Grid, Typography } from '@mui/material'
import style from "./Alamat.module.scss"


const Alamat = () => {
    const [edit, setEdit] = useState(false);
    return (
        <div>
            {
                edit ?
                    <Card className={style["card"]}>
                        <Grid className={style["content"]}>
                            <Typography contenteditable="true" className={style["head"]}>Rumah</Typography>
                            <Typography contenteditable="true" className={style["nama"]}>Yusuf Maulana</Typography>
                            <Typography contenteditable="true" className={style["font"]}>089524376377</Typography>
                            <Typography contenteditable="true" className={style["font"]}>Jl. Dusun Satu, Lebakwangi, Kabupaten Kuningan, Jawa Barat, 45574 (Sindang Sinor RT.02 RW.01)</Typography>
                            <Grid className={style["content2"]}>
                                <Typography className={style["nama2"]}>Share</Typography>
                                <Typography onClick={() => setEdit(false)} className={style["nama2"]}>Simpan</Typography>

                            </Grid>
                        </Grid>

                    </Card>
                    :
                    <Card className={style["card"]}>
                        <Grid className={style["content"]}>
                            <Typography className={style["head"]}>Rumah</Typography>
                            <Typography className={style["nama"]}>Yusuf Maulana</Typography>
                            <Typography className={style["font"]}>089524376377</Typography>
                            <Typography className={style["font"]}>Jl. Dusun Satu, Lebakwangi, Kabupaten Kuningan, Jawa Barat, 45574 (Sindang Sinor RT.02 RW.01)</Typography>
                            <Grid className={style["content2"]}>
                                <Typography className={style["nama2"]}>Share</Typography>
                                <Typography onClick={() => setEdit(true)} className={style["nama2"]}>Ubah Alamat</Typography>

                            </Grid>
                        </Grid>

                    </Card>
            }

        </div>
    )
}

export default Alamat