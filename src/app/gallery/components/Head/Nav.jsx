import { List, ListItemButton, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

function Nav() {

    const navItems = [
        {
            id: "overview",
            name: "overview",
            path: "/gallery",
            margin: "0 30px 0 0"
        },
        {
            id: "events",
            name: "events",
            path: "/gallery/events",
            margin: "0 30px 0 0"
        },
        {
            id: "artworks",
            name: "artworks",
            path: "/gallery/artworks",
            margin: "0 30px 0 0"
        },
        {
            id: "artists",
            name: "artists",
            path: "/gallery/artists",
            margin: "0 30px 0 0"
        },
        {
            id: "contact",
            name: "contact",
            path: "/gallery/contact",
            margin: "0 30px 0 0"
        },
    ];


    return (
        <div className='container'>
            <Typography variant='div' component="div" className='px-lg-4'>
                <List className='px-lg-5' sx={{
                    display: "flex",
                    padding: "0",
                    justifyContent: "space-between",
                    borderBottom: "1px solid white"
                }}>
                    {navItems.map((item) => (
                        <Typography variant='div' component="div" key={item.id}>
                            <Link href={item.path} className="navlink mx-2">
                                <ListItemButton sx={{
                                    padding: "0",
                                    margin: item.margin ? item.margin : "10px 0 0 30px",
                                    "&:hover": {
                                        background: "none"
                                    }
                                }}>
                                    <Typography className='linkText font' variant='div' component="div">
                                        {item.name}
                                    </Typography>
                                </ListItemButton>
                            </Link>
                        </Typography>
                    ))}
                </List>
            </Typography>


        </div>
    )
}

export default Nav
