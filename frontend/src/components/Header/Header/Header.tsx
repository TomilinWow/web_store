import React, {FC} from 'react';
import {
    AppBar,
    Typography,
    Toolbar,
    Button, useTheme
} from '@material-ui/core';
import Search from "../Search/Search";
import photo from '../../../images/react.png'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Navbar from "../../Navbar/Navbar/Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import ToggleMenu from "../ToggleMenu/ToogleMenu";
import {HeaderStyle} from "./HeaderStyle";
import ButtonHeader from "../../../hoc/ButtonHeader";
import {NavLink} from "react-router-dom";
import BasicModal from "../Modal/Modal";

type HeaderType = {
    categories: any[]
}

const Header: FC<HeaderType> = ({categories}) => {

    const classes = HeaderStyle()
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div>
            <AppBar position="static" className={classes.grow}>
                <Toolbar>
                    {isMatch ? (<>
                                <Navbar/>
                                <NavLink className={classes.navlink} to='/home'>
                                        <img className={classes.photoStyle} src={photo}/>
                                </NavLink>
                                <Box className={classes.flex}/>

                            </>
                        )
                        :
                        (
                            <>  <NavLink to='/home' className={classes.navlink}>
                                    <Box className={classes.photoStyle}>
                                        <img className={classes.photoStyle} src={photo}/>
                                    </Box>
                                    <Typography className={classes.title} variant="h6" noWrap>
                                        ReactStore
                                    </Typography>
                                </NavLink>

                                <ToggleMenu categories={categories} nameButton='Categories'/>
                                <Button variant="outlined" className={classes.locale}>
                                    Orders
                                </Button>

                                <Box className={classes.flex}/>
                            </>)
                    }

                    <Search/>
                    <BasicModal styles={classes}/>
                    <ButtonHeader component={<NotificationsRoundedIcon/>}/>
                    <NavLink to='/cart' className={classes.navlink} >
                        <ButtonHeader component={<ShoppingCartRoundedIcon/>}/>
                    </NavLink>
                    <ButtonHeader component={<AccountCircleRoundedIcon/>}/>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header