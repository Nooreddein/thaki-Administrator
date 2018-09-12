import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { Collapse, TextField } from '@material-ui/core';

const styles = {
    card: {
        width: "300px"
    },
    media: {
        height: 200,
    },
};

function CatCard(props) {

    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={require("../assets/image.png")}
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
                <Button size="small" color="primary" onClick={props.update}>
                    Update
                </Button>

            </CardActions>
            <Collapse in={props.in}>
                <TextField
                    onChange={props.onChnage}
                    label="Update Name"
                    placeholder="Update Name"
                />
                <Button size="small" color="primary" onClick={props.click}>Confirm Changes</Button>
            </Collapse>
        </Card>
    );
}

CatCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToprops = ({ catReducer }) => {
    const { cat } = catReducer
    return { cat }
}

export default connect(mapStateToprops)(withStyles(styles)(CatCard));