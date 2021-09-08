import React from 'react';
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
        margin: 0,
    },
    divImg: {
        marginBottom: theme.spacing(20),
    },
    List: {
        marginTop: theme.spacing(3),
        backgroundColor: "#e3f2fd",
        borderRadius: theme.shape.borderRadius,
        paddingLeft: theme.spacing(1),
    },
    listItem: {
        display: "flex",
        justifyContent: "space-betwwen",
    },
    margin: {
        color: "#2196f3",
    },
    followButton: {
        color: "#2196f3",
        border: "1px solid #2196f3",
        borderRadius: theme.shape.borderRadius,
    },
}));

const Rightbar = () => {
    const classes = useStyles();
    return <Container className={classes.container}>
        <div className={classes.divImg}>
            <ImageList rowHeight={100} className={classes.imageList} cols={3}>
                <ImageListItem>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpu0xlaOJRGCaS8apiNRQRU1NcS8epDeNIA&usqp=CAU" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bQkL-d0Pwc_GCJSfDoNypyKiYe33r2UWHg&usqp=CAU" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzE9B52LpwJdbfwmYfGgxN3se6utRLUOrQQ&usqp=CAU" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1543233604-3baca4d35513?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://wallpaperaccess.com/full/279547.jpg" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkGqcfTXOGQSqX3cg9eX4d7CYErTQrlkUhg&usqp=CAU" alt="" />
                </ImageListItem>
            </ImageList>

            <List className={classes.List}>
                <Typography variant="h6" component="h5">
                    You Might Like
                </Typography>
                <ListItem className={classes.listItem} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://4.imimg.com/data4/DQ/HB/MY-11275158/corporate-chocolate-gift-box-500x500.png" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="ChocolateLover"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textSecondery"
                                >
                                    @chocolatechocolate
                                </Typography>
                            </React.Fragment>
                        }
                    />
                    <Button  size="small" variant="outlined" className={classes.followButton}>
                        Follow
                    </Button>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem  className={classes.listItem} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://i.pinimg.com/originals/b2/ae/f0/b2aef0cf34d762edbe17d9d95f4191c0.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                    <Button  size="small" variant="outlined" className={classes.followButton}>
                        Follow
                    </Button>
                </ListItem>
                <Divider variant="inset" component="li" />
                <Button  size="small" className={classes.margin}>
          Show More
        </Button>
            </List>
        </div>
    </Container>
};
export default Rightbar;