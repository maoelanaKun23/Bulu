import React, { useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    ZoomControl
} from "react-leaflet";
import TbRute from "components/TbRute";
import { Grid, } from "@material-ui/core";
import { Field, } from "components";
import style from "./Tracking.module.scss";


const Tracking = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const position = [-6.1837601, 106.9289085];
    console.log(anchorEl)

    const handleClickTruckVesselListCard = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    return (
        <>
            {/* Map Item */}
            <div className={style.absoluteContainer}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    {/* <Grid item>
                        <Field.DropdownField
                            text={"Tracking Pesanan Disini..."}
                            onClick={handleClickTruckVesselListCard}
                            isSelected={open}
                        />
                        <Popper
                            open={open}
                            anchorEl={anchorEl}
                            placement="bottom-start"
                            disablePortal={true}
                            modifiers={{
                                offset: {
                                    enabled: true,
                                    offset: "0, 10px"
                                },
                                preventOverflow: {
                                    enabled: true,
                                    boundariesElement: "window"
                                }
                            }}
                        >
                            <Timeline.StatusTimeline
                                onHide={() => {
                                    setAnchorEl(null);
                                }}
                                datas={statusData} />
                        </Popper>
                    </Grid> */}
                    <Grid item>
                        <TbRute />
                    </Grid>
                    <Grid item>
                        <Field.SearchField placeholder="Cari Berdasarkan ID Pesanan...  " />
                    </Grid>
                </Grid>
            </div>

            <div className={style.mapContainer}>
                {/* Map */}
                <MapContainer

                    className={style.map}
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                    zoomControl={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Paket Di Antar Ke Rumah Pembeli <br/>15.48 WIB.
                        </Popup>
                    </Marker>

                    <ZoomControl position="bottomright" zoomControl={true} />
                </MapContainer>


            </div>


        </>




    );
};

export default Tracking;
