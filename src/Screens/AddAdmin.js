import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, TextField, Button } from "@material-ui/core";
import { connect } from 'react-redux'
import NavBar from './NavBar'
import { Link } from "react-router-dom"

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


class AddAdmin extends React.Component {
    constructor() {
        super()
        this.state = {

        }

    }



    render() {
        const { classes, lang } = this.props
        console.log(this.state.password)
        return (
            <div style={{ marginBottom: "325px" }} >
                <NavBar />
                <div style={{textAlign:"center"}}>
                <p style={{fontSize:"80px",color:"#799830"}}>Add Administrator</p>
                </div>
                <Grid container justify="space-around" alignItems="center" direction="column">
                    <Grid item xs={6}>
                        <img alt=""
                            style={{
                                height: "250px",
                                width: "250px",
                                margin: "40px",
                                marginBottom: "20px"
                            }}
                            src={require('../assets/image.png')} />
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{ padding: 30 }}>
                            <Grid container direction="column" alignItems="center">
                                <Grid item >
                                <div dir={lang === "en"?"ltr":"rtl"}> 
                                    <TextField
                                        label={lang === "en" ? "User Name" : "اسم المستخدم"}
                                        placeholder={lang === "en" ? "User Name" : "اسم المستخدم"}
                                        margin="normal"
                                        className={classes.textField}
                                    />
                                    </div>
                                </Grid>
                                <Grid item >
                                <div dir={lang === "en"?"ltr":"rtl"}> 
                                    <TextField
                                        id="password-input"
                                        label={lang === "en" ? "Password" : "كلمة المرور"}
                                        placeholder={lang === "en" ? "Password" : "كلمة المرور"}
                                        type="password"
                                        className={classes.textField}
                                        autoComplete="current-password"
                                        margin="normal"
                                    />
                                    </div>
                                </Grid>
                                <Grid item >
                                    <Link to="/home">
                                        <Button variant="contained"
                                            style={{ backgroundColor: '#799830', color: "white", cursor: 'pointer' }} className={classes.button}>{lang === "en" ? "Add" : "اضافة"}</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Card>
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


export default connect(mapStateToProps)(withStyles(styles)(AddAdmin))