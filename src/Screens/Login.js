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


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onChangee = this.onChangee.bind(this);
        this.submitLogin = this.submitLogin.bind(this);

    }

    onChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangee(e) {
        this.setState({
            password: e.target.value
        })
    }

    submitLogin() {
        console.log("LOGIN");

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
                                <div dir={lang === "en"?"ltr":"rtl"}> 
                                    <TextField
                                        label={lang === "en" ? "User Name" : "اسم المستخدم"}
                                        placeholder={lang === "en" ? "User Name" : "اسم المستخدم"}
                                        margin="normal"
                                        className={classes.textField}
                                        onChange={this.onChange}
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
                                        onChange={this.onChangee}
                                    />
                                    </div>
                                </Grid>
                                <Grid item >
                                    <Link to="/home">
                                        <Button variant="contained"
                                            style={{ backgroundColor: '#799830', color: "white", cursor: 'pointer' }} className={classes.button} onClick={this.submitLogin}>{lang === "en" ? "Login" : "تسجيل الدخول"}</Button>
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




export default connect(mapStateToProps)(withStyles(styles)(Login))