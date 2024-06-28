"use client"
import Image from 'next/image'
import React from 'react'
import img1 from "../../images/all img/world.png";
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
function LeftDiscover() {
    return (
        <div className='xl:col-span-2'>
            <FormControl
                aria-label="State"
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

            <div className="flex items-center justify-center lg:justify-start  h-full">
                <div
                    className="mb-3 mb-md-0 relative max-[300px]:w-[300px] max-[550px]:w-[300px] max-[550px]:h-[350px] min-[551px]:w-[450px] min-[550px]:h-[400px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[500px] xl:h-[550px] xl:w-[650px]"
                    style={{
                        borderRadius: "180px ",
                        overflow: "hidden",
                        padding: "10px 0",
                    }}
                >
                    <Image
                        fill
                        src={img1}
                        alt="img"
                    />
                </div>
            </div>
        </div>
    )
}

export default LeftDiscover
