import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, TextField, Button } from "@material-ui/core";
import { connect } from 'react-redux'
import NavBar from './NavBar'
import { isLogedIn, AdminLoggedIn } from '../actions/index'
import Axios from "../../node_modules/axios";

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
    },
});


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onChangee = this.onChangee.bind(this);
        this.submitLogin = this.submitLogin.bind(this);

    }

    onChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangee(e) {
        this.setState({
            password: e.target.value
        })
    }

    submitLogin() {
        console.log("LOGIN");
        const that = this
        const { email, password } = this.state
        Axios.post("/api/v1/login", {
            email,
            password
        })
            .then((res) => {
                console.log(res);
                window.location.href = "/home"
                that.props.isLogedIn(true)
            })
            .catch((err) => {
                console.log(err);
                alert("wrong email or password")
            })
    }

    render() {
        const { classes, lang } = this.props
        console.log(this.state.password)
        return (
            <div style={{ marginBottom: "325px" }} >
                <NavBar />
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
                                    <div dir={lang === "en" ? "ltr" : "rtl"}>
                                        <TextField
                                            label={lang === "en" ? "Email" : "البريد الالكتروني"}
                                            placeholder={lang === "en" ? "Email" : "البريد الالكتروني"}
                                            margin="normal"
                                            className={classes.textField}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </Grid>
                                <Grid item >
                                    <div dir={lang === "en" ? "ltr" : "rtl"}>
                                        <TextField
                                            id="password-input"
                                            label={lang === "en" ? "Password" : "كلمة المرور"}
                                            placeholder={lang === "en" ? "Password" : "كلمة المرور"}
                                            type="password"
                                            className={classes.textField}
                                            autoComplete="current-password"
                                            margin="normal"
                                            onChange={this.onChangee}
                                        />
                                    </div>
                                </Grid>
                                <Grid item >
                                    <Button variant="contained"
                                        style={{ backgroundColor: '#799830', color: "white", cursor: 'pointer' }} className={classes.button} onClick={this.submitLogin}>{lang === "en" ? "Login" : "تسجيل الدخول"}</Button>
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




export default connect(mapStateToProps, { isLogedIn, AdminLoggedIn })(withStyles(styles)(Login))