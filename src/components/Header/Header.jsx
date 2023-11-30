"use client"
import { List, ListItem, ListItemButton, ListItemText, Typography, Collapse, Button } from '@mui/material'
import logo from "../../images/logo.png"
import artWorksIcon from "../../images/artworks.png"
import cartIcon from "../../images/cart.png"
import moreIcon from "../../images/more.png"
import arrowIcon from "../../images/arrow.png"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import TableRowsIcon from '@mui/icons-material/TableRows';
import CloseIcon from '@mui/icons-material/Close';



function Header() {

    const [expandedItem, setExpandedItem] = useState(null);
    const [showNav, setShowNav] = useState(false);

    const handleItemClick = (itemId) => {
        setExpandedItem((prevExpandedItem) => (prevExpandedItem === itemId ? null : itemId));
    };


    useEffect(() => {
        if (showNav) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (typeof window !== 'undefined' && window.document && window.document.body) {
                window.document.body.style.overflow = 'hidden';
            }
        } else {
            if (typeof window !== 'undefined' && window.document && window.document.body) {
                window.document.body.style.overflow = 'auto';
            }
        }
    }, [showNav])

    const navItems = [
        {
            id: "signin",
            name: "sign Up",
            path: "/sign-up",
            margin: "0 30px 0 0",

        },
        {
            id: "login",
            name: "log In",
            path: "/login",
            margin: "0 30px",

        },
        {
            id: "artworks",
            name: "artworks",
            path: "/gallery/artworks",
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
        <Typography variant='nav' component="nav" className='container mx-auto'>
            <Typography variant='div' component="div" sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
            }}>
                <Typography variant='div' component="div">
                    <Link href="/">
                        <Typography variant='div' component="div" sx={{

                            /* **********************************************/

                            height: { xs: "110px", sm: "155px" }
                            /* **********************************************/

                        }}>
                            <Image className='w-100 h-100' src={logo} priority alt="logo" />
                        </Typography>
                    </Link>
                </Typography>
                <Typography variant='div' component="div" sx={{
                    borderBottom: { lg: "1px solid white" },
                    height: { lg: "105px" },
                    /* **********************************************/
                    alignSelf: { lg: "flex-start" },
                    /* **********************************************/
                }}

                >
                    <List sx={{
                        transition: "600ms",
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" },
                        alignItems: { xs: "center" },
                        padding: "0",
                        position: { xs: "absolute", lg: "relative" },
                        bottom: "0",
                        top: "0",
                        left: { xs: showNav ? "0" : "100%", lg: "0" },
                        right: "0",
                        background: { xs: "#1f1913", lg: "transparent" },
                        borderBottom: { lg: "1px solid white" },
                        height: { lg: "105px" },
                        zIndex: "999",
                        overflow: !showNav && { xs: "hidden", lg: "visible" }
                    }
                    }>
                        <Button onClick={() => setShowNav(false)} sx={{ display: { xs: "flex", lg: "none" }, margin: "20px auto 0 0" }}><CloseIcon /></Button>

                        {navItems.map(item =>
                            item.path ? (
                                <li key={item.id} data-bs-toggle="collapse" data-bs-target={`#${item.id}`}>
                                    <Link onClick={() => setShowNav(false)} href={`${item.path}`} className="navlink mx-2" >
                                        <ListItemButton onClick={() => handleItemClick(item.id)} sx={{
                                            padding: "0",
                                            margin: { lg: item.margin ? item.margin : "10px 0 0 30px" },
                                            "&:hover": {
                                                background: "none"
                                            }
                                        }}>
                                            <Typography variant='div' component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                <Typography variant='div' component="div">

                                                    {item.icon && <Image src={item.icon} alt={"logo"} />}

                                                </Typography>
                                                <Typography className={`linkText font ${item.icon ? "" : "mt-4"}`} variant='div' component="div">
                                                    {item.name}
                                                </Typography>
                                            </Typography>
                                        </ListItemButton>
                                    </Link>
                                </li>
                            ) : (
                                (
                                    <li onClick={() => handleItemClick(item.id)} className='d-flex justify-content-center align-items-center mt-2 mx-2 user-select-none' style={{ cursor: "pointer" }} key={item.id}>
                                        <>
                                            <Typography variant='span' sx={{ display: { xs: item.id === "more" ? "none" : "flex", lg: "flex" } }} className="navlink position-relative" >

                                                <Typography variant='div' component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <Typography variant='div' component="div">
                                                        <Image src={item.icon} alt={item.icon ? "logo" : ""} />
                                                    </Typography>
                                                    <Typography className='linkText font' variant='div' component="div">
                                                        {item.name}
                                                    </Typography>
                                                </Typography>
                                                <Collapse in={expandedItem === item.id} style={{
                                                    position: "absolute",
                                                    background: '#3A350033',
                                                    width: "120px",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    borderRadius: "15px",
                                                    top: "104px",
                                                    boxShadow: "0px 0px 1px 1px #3A350033",
                                                    display: "flex"

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
                                        </>

                                    </li>
                                )
                            )
                        )}

                    </List>

                    <Button onClick={() => setShowNav(true)} sx={{ display: { xs: "block", lg: "none" }, border: "1px solid white", paddingRight: "0", paddingLeft: "0", minWidth: "43px", marginRight: "8px" }}><TableRowsIcon /></Button>
                </Typography >
            </Typography >
        </Typography >
    );
}

export default Header;










