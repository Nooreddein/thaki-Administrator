import React, { Component } from 'react'
import { Grid, TextField, Card, Button } from '@material-ui/core'
import NavBar from './NavBar';
import Categories from '../Copmonents/Categories';
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import Axios from 'axios';



const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});


class CategoriesScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cat: ''
        }
    }

    onCatCahnge = (e) => {
        this.setState({ cat: e.target.value })
    }
    onCatCreated = () => {
        const { cat } = this.state
        Axios.post('/api/v1/addCat', { cat })
            .then((res) => {
                console.log(res);
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        const { lang, classes } = this.props
        return (
            <div>
                <NavBar home />
                <Grid container direction="column" style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "70px", color: "#799830" }}>Manage Categories</p>
                    <Grid item xs={6} style={{ marginLeft: "380px", marginTop: "100px" }}>
                        <Card style={{ padding: 30 }}>
                            <Grid container direction="column" alignItems="center">
                                <Grid item >
                                    <div dir={lang === "en" ? "ltr" : "rtl"}>
                                        <TextField
                                            label={lang === "en" ? "Category Name" : "اسم المجموعة"}
                                            placeholder={lang === "en" ? "Category Name" : "اسم المجموعة"}
                                            margin="normal"
                                            onChange={this.onCatCahnge}
                                            className={classes.textField}
                                        />
                                    </div>
                                </Grid>
                                <Grid item >

                                    <Button variant="contained"
                                        onClick={this.onCatCreated}
                                        style={{ backgroundColor: '#799830', color: "white", cursor: 'pointer' }} className={classes.button}>{lang === "en" ? "Add" : "اضافة"}</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Categories />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = ({ langReducer }) => {
    const { lang } = langReducer
    return { lang }
}

export default connect(mapStateToProps)(withStyles(styles)(CategoriesScreen))
