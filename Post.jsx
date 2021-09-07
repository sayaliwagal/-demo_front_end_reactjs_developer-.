import React from 'react';
import { CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    media: {
        height: 0,
        paddingTop: '50%',
    }
}));

const Post = () => {
    const classes = useStyles();
    return <Container className={classes.container}>
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar alt="Cindy Baker" src="https://www.whatsappimages.in/wp-content/uploads/2021/03/Girls-Whatsapp-DP-Photo-Downlaod.jpg " />
                }
                action={
                    <IconButton aria-label="Settings">
                        <MoreVertTwoToneIcon />
                    </IconButton>
                }
                title="Soniya Rane "
                subheader="September 3, 2021"
            />
            <CardMedia
                className={classes.media}
                image="https://images.kitchenstories.io/communityImages/148fed1a1620ba73fb830275e0cf0f72_44c57fb4-5065-456d-8ffd-3c25b6e78f2e/148fed1a1620ba73fb830275e0cf0f72_44c57fb4-5065-456d-8ffd-3c25b6e78f2e-large-landscape-150.jpg"
                title="Creamy penne pasta" />
            <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    “Best comfort food one could ask for, you just can’t go wrong with a pasta bake!
                    Creamy, flavorful and crisp, this is the kind of dish that puts a smile on your face anytime!”
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton arial-lable="comment">
                    <ChatBubbleOutlineTwoToneIcon />
                </IconButton>
                <IconButton arial-lable="Share">
                    <ShareTwoToneIcon />
                </IconButton>
                <IconButton arial-lable="like">
                    <FavoriteBorderTwoToneIcon />
                </IconButton>
                <IconButton arial-lable="upload">
                    <PublishTwoToneIcon />
                </IconButton>
            </CardActions>
        </Card>

    </Container>
};
export default Post;