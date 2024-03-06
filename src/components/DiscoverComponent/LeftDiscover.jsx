"use client"
import Image from 'next/image'
import React from 'react'
import img1 from "../../images/all img/world.png";
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';
function LeftDiscover() {
    return (
        <Grid item xs={12} md={6} lg={7}>
            <div className="h-100">
                <FormControl
                    className="font form"
                    sx={{
                        width: "170px",
                        color: "white",
                        border: "1px solid transparent",
                    }}
                >
                    <NativeSelect
                        defaultValue={10}
                        inputProps={{
                            name: "select a location",
                            id: "uncontrolled-native",
                        }}
                        sx={{
                            color: "white",

                            "&:before": {
                                borderBottom: "none !important",
                            },
                            "&:after": {
                                borderBottom: "none ",
                            },
                        }}
                    >
                        <option
                            className="font"
                            style={{ color: "black" }}
                            value={10}
                        >
                            select a location
                        </option>
                        <option
                            className="font"
                            style={{ color: "black" }}
                            value={20}
                        >
                            Twenty
                        </option>
                        <option
                            className="font"
                            style={{ color: "black" }}
                            value={30}
                        >
                            Thirty
                        </option>
                    </NativeSelect>
                </FormControl>

                <div className="d-flex align-items-center justify-content-center justify-content-lg-start h-100">
                    <Typography
                        className="mb-3 mb-md-0"
                        variant="div"
                        component="div"
                        sx={{
                            borderRadius: "180px ",
                            overflow: "hidden",
                            padding: "10px 0",
                        }}
                    >
                        <Image
                            className="w-100 h-100"
                            src={img1}
                            alt="img"
                        />
                    </Typography>
                </div>
            </div>
        </Grid>
    )
}

export default LeftDiscover
