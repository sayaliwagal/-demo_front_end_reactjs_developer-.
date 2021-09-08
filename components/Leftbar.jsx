import React from 'react';
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import BorderHorizontalIcon from '@material-ui/icons/BorderHorizontal';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import Typography from "@material-ui/core/Typography";
import Button  from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        paddingTop: theme.spacing(10),
        backgroundColor: "White",
        position: "sticky",
        top: 0,
        color: "#555",
        border: '1px solid #e0e0e0',
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
        borderRadius: "50%",
      
    },
    icon: {
        marginRight: theme.spacing(2),
        fontSize: "18px",
    },
    text: {
        fontWeight: 500,
    },
}));

const Leftbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Button>
                <HomeTwoToneIcon className={classes.icon} />
                <Typography className={classes.text}>HomePage</Typography>
                </ Button>
            </div>
            <div className={classes.item}>
                <Button>
                <BorderHorizontalIcon className={classes.icon} />
                <Typography className={classes.text}>Explore</Typography>
                </ Button>
            </div>
            <div className={classes.item}>
                <Button>
                <NotificationsNoneIcon className={classes.icon} />
                <Typography className={classes.text}>Notification</Typography>
                </ Button>
            </div>
            <div className={classes.item}>
                <Button>
                <MailOutlineIcon className={classes.icon} />
                <Typography className={classes.text}>Message</Typography>
                </ Button>
            </div>
            <div className={classes.item}>
                <Button>
                < BookmarkBorderIcon className={classes.icon} />
                <Typography className={classes.text}>BookMark</Typography>
                </ Button>
            </div>
            <div className={classes.item}>
                <Button>
                <ListAltIcon className={classes.icon} />
                <Typography className={classes.text}>List</Typography>
                </ Button>
            </div>
            <div className={classes.item}>
                <Button>
                <PersonOutlineIcon className={classes.icon} />
                <Typography className={classes.text}>Profile</Typography>
                </ Button>
            </div>
            <div className={classes.item}>
                <Button>
                <LockOpenIcon className={classes.icon} />
                <Typography className={classes.text}>Log Out</Typography>
                </ Button>
            </div>
            <div className={classes.item}>
                <Button>
                <BlurCircularIcon className={classes.icon} />
                <Typography className={classes.text}>More</Typography>
                </ Button>
            </div>
        </Container>
    );

};
export default Leftbar;
