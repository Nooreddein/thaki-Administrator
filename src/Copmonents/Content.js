import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

function MediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={require("../assets/image.png")}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={props.delete}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);