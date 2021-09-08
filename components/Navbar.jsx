import React from 'react';
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
    },
    InputBase: {
        color: 'white',
        marginLeft: theme.spacing(1),
    },
    icons: {
        display: 'flex',
        algnItems: 'center',
    },
    bage: {
        marginRight: theme.spacing(2),
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (  
        <div position= "static">
            <AppBar >
                <ToolBar className={classes.toolbar}>
                    <Typography variant="h6">
                        Coffeco
                    </Typography>
                    <div className={classes.search}>
                        <SearchIcon />
                        <InputBase placeholder="Search" className={classes.InputBase} />
                    </div>
                    <div className={classes.icons}>
                        <Badge badgeContent={4} color="secondary" className={classes.bage}>
                            <MailIcon />
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.bage}>
                            <NotificationsIcon />
                        </Badge>
                        <Avatar alt="Cindy Baker" src="https://www.whatsappimages.in/wp-content/uploads/2021/03/Girls-Whatsapp-DP-Photo-Downlaod.jpg " />
                    </div>
                </ToolBar>
             </AppBar>

        </div>
    );
};
export default Navbar;