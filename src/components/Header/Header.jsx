"use client"
import { List, ListItem, ListItemButton, ListItemText, Typography, Collapse } from '@mui/material'
import logo from "../../images/logo.png"

import artWorksIcon from "../../images/artworks.png"
import cartIcon from "../../images/cart.png"
import moreIcon from "../../images/more.png"
import arrowIcon from "../../images/arrow.png"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'




function Header() {

    const [expandedItem, setExpandedItem] = useState(null);

    const handleItemClick = (itemId) => {
        setExpandedItem((prevExpandedItem) => (prevExpandedItem === itemId ? null : itemId));
    };


    const navItems = [
        {
            id: "signin",
            name: "sign Up",
            path: "/",
            margin: "0 30px 0 0"
        },
        {
            id: "login",
            name: "log In",
            path: "/login",
            margin: "0 30px"
        },
        {
            id: "artworks",
            name: "artworks",
            path: "/artworks",
            icon: artWorksIcon,
            margin: "10px 30px 0"
        },
        {
            id: "cart",
            name: "cart",
            path: "/cart",
            icon: cartIcon,
            margin: "10px 30px 0"
        },
        {
            id: "more",
            name:
                <div className='ms-3 '>
                    more
                    <span className='ms-2 '>
                        <Image src={arrowIcon} alt='logo' />
                    </span>
                </div>,
            icon: moreIcon,
            more: [
                {
                    id: "home",
                    name: "home",
                    path: "/",
                },
                {
                    id: "about",
                    name: "about",
                    path: "barChart",
                },
            ]
        },
    ];

    return (
        <nav className='container'>
            <Typography variant='div' component="div" sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                <Typography variant='div' component="div">
                    <Link href="/">
                        <Typography variant='div' component="div" sx={{

                            /* **********************************************/
                            height: "155px"
                            /* **********************************************/

                        }}>
                            <Image className='w-100 h-100' src={logo} alt="logo" />
                        </Typography>
                    </Link>
                </Typography>
                <Typography variant='div' component="div" sx={{
                    borderBottom: "1px solid white",
                    height: "105px",
                    /* **********************************************/
                    alignSelf: "flex-start"
                    /* **********************************************/
                }}>
                    <List sx={{ display: "flex", padding: "0" }}>
                        {navItems.map((item) => (
                            <Typography variant='div' component="div" key={item.id} data-bs-toggle="collapse" data-bs-target={`#${item.id}`}>

                                {item.path ? (<Link href={`${item.path}`} className="navlink mx-2" >
                                    <ListItemButton onClick={() => handleItemClick(item.id)} sx={{
                                        padding: "0",
                                        margin: item.margin ? item.margin : "10px 0 0 30px",
                                        "&:hover": {
                                            background: "none"
                                        }
                                    }}>
                                        <Typography variant='div' component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <Typography variant='div' component="div">
                                                <Image src={item.icon} alt={item.icon ? "logo" : ""} />
                                            </Typography>
                                            <Typography className='linkText font' variant='div' component="div">
                                                {item.name}
                                            </Typography>
                                        </Typography>
                                    </ListItemButton>
                                </Link>) : (
                                    <a className="navlink mx-2" >
                                        <ListItemButton onClick={() => handleItemClick(item.id)} sx={{
                                            padding: "0",
                                            margin: item.margin ? item.margin : "10px 0 0 30px",
                                            "&:hover": {
                                                background: "none"
                                            }
                                        }}>
                                            <Typography variant='div' component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                <Typography variant='div' component="div">
                                                    <Image src={item.icon} alt={item.icon ? "logo" : ""} />
                                                </Typography>
                                                <Typography className='linkText font' variant='div' component="div">
                                                    {item.name}
                                                </Typography>
                                            </Typography>
                                        </ListItemButton>
                                    </a>)}

                                <Collapse in={expandedItem === item.id} style={{
                                    position: "absolute",
                                    background: 'red',
                                    width: "120px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    borderRadius: "15px",
                                    top: "104px"
                                }}>
                                    {item?.more?.map((item) => (
                                        <List key={item.id}>
                                            <Link href={item.path} style={{ textDecoration: "none", color: "white" }}>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemText primary={item.name} />
                                                    </ListItemButton>
                                                </ListItem>
                                            </Link>
                                        </List>
                                    ))}
                                </Collapse>
                            </Typography>
                        ))}
                    </List>
                </Typography>
            </Typography>
        </nav>
    );
}

export default Header;





