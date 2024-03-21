"use client"
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import logo from "../../images/logo.png"
import artWorksIcon from "../../images/artworks.png"
import moreIcon from "../../images/more.png"
import arrowIcon from "../../images/arrow.png"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import TableRowsIcon from '@mui/icons-material/TableRows';
import CloseIcon from '@mui/icons-material/Close';
import galaryImage from "../../images/all img/Frame 149.png"
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { usePathname } from 'next/navigation'
import { Context } from '../../store/Context'

function Header() {

    const { deleteFromCart, cartsData } = useContext(Context)

    const pathName = usePathname()
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

    const carts = [
        {
            id: 1,
            artist: "Aya Alaa.",
            name: "Work well this is a unique painting",
            price: 650,
            img: galaryImage
        },
        {
            id: 2,
            artist: "Aya Alaa.",
            name: "Work well this is a unique painting",
            price: 650,
            img: galaryImage
        },
        {
            id: 3,
            artist: "Aya Alaa.",
            name: "Work well this is a unique painting",
            price: 650,
            img: galaryImage
        },
        {
            id: 4,
            artist: "Aya Alaa.",
            name: "Work well this is a unique painting",
            price: 650,
            img: galaryImage
        },
    ]

    const navItems = [
        {
            id: "home",
            name: "home",
            path: "/",
            margin: "0 30px 0 0",
        },
        {
            id: "signin",
            name: "sign Up",
            path: "/sign-up",
            margin: "0 30px ",
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
            name: <div className='mx-2'>
                carts
                <span className='ms-2 '>
                    <Image src={arrowIcon} alt='logo' />
                </span>
            </div>,
            cart: cartsData,
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
                    id: "about",
                    name: "about",
                    path: "barChart",
                },
            ]
        },
    ];

    // console.log(expandedItem);

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
                        overflow: showNav ? { xs: "auto", lg: "visible" } : { xs: "hidden", lg: "visible" },

                    }
                    }>
                        <Button onClick={() => setShowNav(false)} sx={{ display: { xs: "flex", lg: "none" }, margin: "20px auto 0 0" }}><CloseIcon /></Button>
                        {navItems.map(item =>
                            item.path ? (
                                <li key={item.id} data-bs-toggle="collapse" data-bs-target={`#${item.id}`}>
                                    <Link onClick={() => setShowNav(false)} href={`${item.path}`} className={`${item.path === pathName && "active"} navlink mx-2`} >
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
                                    <li className='d-flex justify-content-center align-items-center mt-2 mx-2 user-select-none position-relative' style={{ cursor: "pointer" }} key={item.id}>
                                        <>
                                            <Typography onClick={() => handleItemClick(item.id)} variant='span' sx={{ display: { xs: item.id === "more" ? "none" : "flex", lg: "flex" } }}>
                                                <Typography className='navlink' variant='div' component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <Typography variant='div' component="div">
                                                        {item.id === "cart" ? (
                                                            <Badge color="error" badgeContent={cartsData.length} >
                                                                <ShoppingCartIcon />
                                                            </Badge>
                                                        ) : (
                                                            <Image src={item.icon} alt={item.icon ? "logo" : ""} />
                                                        )}
                                                    </Typography>
                                                    <Typography className='linkText font' variant='div' component="div">
                                                        {item.name}
                                                    </Typography>
                                                </Typography>
                                            </Typography>

                                            <Collapse in={expandedItem === item.id} sx={{
                                                position: "absolute",
                                                background: 'var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))',
                                                width: { xs: "290px", sm: "390px" },
                                                flexDirection: "column",
                                                alignItems: "center",
                                                borderRadius: "15px",
                                                top: "80px",
                                                boxShadow: "0px 0px 1px 1px #3A350033",
                                                display: cartsData.length > 0 ? "flex" : "none",
                                                right: { lg: "-50px" },
                                                bottom: 0,

                                            }}>
                                                <List className={`${expandedItem != "cart" && "p-0"}`} sx={{ userSelect: "text", cursor: "auto", overflow: "auto", maxHeight: "250px", width: '100%', background: 'var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))', borderRadius: "15px" }}>
                                                    {item?.cart?.map((item) => (
                                                        <ListItem className='d-flex justify-content-between' key={item.id}>
                                                            <div className='d-flex align-items-center'>
                                                                <ListItemAvatar>
                                                                    <Image style={{ borderRadius: "50%", border: "1px solid #D29F1B" }} src={item.img} width={50} height={60} alt='' />
                                                                </ListItemAvatar>
                                                                <div className='d-flex flex-column text-white'>
                                                                    <span>{item.artist}.</span>
                                                                    <span style={{ fontSize: "16px" }}>“{item.name}”</span>
                                                                    <span>price: {item.price}$</span>
                                                                </div>
                                                            </div>
                                                            <div onClick={() => deleteFromCart(item)} style={{ cursor: "pointer" }} className='ms-4'>
                                                                <DeleteIcon />
                                                            </div>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Collapse>

                                            <Collapse in={expandedItem === item.id} sx={{
                                                position: "absolute",
                                                background: '#3A350033',
                                                width: "120px",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                borderRadius: "15px",
                                                top: "90px",
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

                                        </>

                                    </li>
                                )
                            )
                        )}

                    </List>

                    <Button onClick={() => setShowNav(true)} sx={{ display: { xs: "block", lg: "none" }, border: "1px solid white", paddingRight: "0", paddingLeft: "0", minWidth: "43px", marginRight: "8px" }}><TableRowsIcon /></Button>
                </Typography>
            </Typography>
        </Typography>
    );
}

export default Header;










