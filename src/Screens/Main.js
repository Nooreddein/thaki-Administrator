import React, { Component } from 'react'
import NavBar from "./NavBar"
import "chart.js"
import { ColumnChart, PieChart, AreaChart } from "react-chartkick"
import { Grid, Card, Button, Divider } from '@material-ui/core';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import Axios from '../../node_modules/axios';


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
class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            res: undefined,
            content: undefined
        }
    }

    componentDidMount() {
        Axios.get('/api/v1/analytics/admins')
            .then((res) => {
                console.log(res);

                this.setState({
                    res: res.data
                })
            })
            .catch((err) => {
                console.log(err);

            })

        Axios.get('/api/v1/get/all/objects').then((res) => {
            this.setState({content:res.data})
        })
    }

    render() {
        const { lang, classes } = this.props
        console.log(this.state);

        return (
            <div>
                <NavBar home />
                <Grid container direction="column">
                    <Grid item>
                        <Grid container direction="row" justify="center">
                            <Grid item >
                                <Card style={{ padding: 70, textAlign: 'center', margin: "30px" }}>
                                    <Link to="add-admin">
                                        <Button variant="contained"
                                            style={{ backgroundColor: '#799830', color: "white", cursor: 'pointer' }}
                                            className={classes.button} onClick={this.submitLogin}>
                                            {lang === "en" ? "Add Admin" : "اضافة مسؤول"}</Button></Link>
                                    <p style={{ fontSize: "30px" }}>{lang === "en" ? "We Currently Have" : "لدينا حاليا"}</p>
                                    <Card><p style={{ fontSize: "40px", color: "#799830" }}>{this.state.res}</p></Card>
                                    <p style={{ fontSize: "30px" }}>{lang === "en" ? "Administrators" : "مسؤول"}</p>
                                </Card>
                            </Grid>
                            <Grid item >
                                <Card style={{ padding: 70, textAlign: 'center', margin: "30px" }}>
                                    <Link to="/add-content"><Button variant="contained"
                                        style={{ backgroundColor: '#799830', color: "white", cursor: 'pointer' }}
                                        className={classes.button}>
                                        {lang === "en" ? "Add Content" : "اضافة ملف"}</Button></Link>
                                    <p style={{ fontSize: "30px" }}>{lang === "en" ? "We Currently Have" : "لدينا حاليا"}</p>
                                    <Card><p style={{ fontSize: "40px", color: "#799830" }}>{78}</p></Card>
                                    <p style={{ fontSize: "30px" }}>{lang === "en" ? "Downloads" : "تحميلات"}</p>
                                </Card>

                            </Grid>
                            <Grid item >
                                <Card style={{ padding: 70, textAlign: 'center', margin: "30px" }}>
                                    <Link to="/add-content"><Button variant="contained"
                                        style={{ backgroundColor: '#799830', color: "white", cursor: 'pointer' }}
                                        className={classes.button} >
                                        {lang === "en" ? "Add Content" : "اضافة ملف"}</Button></Link>
                                    <p style={{ fontSize: "30px" }}>{lang === "en" ? "We Currently Have" : "لدينا حاليا"}</p>
                                    <Card><p style={{ fontSize: "40px", color: "#799830" }}>{this.state.content?this.state.content.length:"Fetching Data"}</p></Card>
                                    <p style={{ fontSize: "30px" }}>{lang === "en" ? "File(s)" : "ملف"}</p>
                                </Card>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Divider style={{ marginTop: "50px", marginBottom: "50px" }} />
                    <Grid item>
                        <div style={{ height: "200px", textAlign: 'center' }}>
                            <p style={{ color: "#799830", fontSize: 50 }}>{lang === "en" ? "File Downloads" : "التنزيلات"}</p>
                            <ColumnChart data={[["Sun", 32], ["Mon", 46], ["Tue", 28], ["Wed", 32], ["Thur", 46], ["Fri", 28]]} />
                        </div>
                        <Divider style={{ marginTop: "50px", marginBottom: "50px" }} />
                        <Grid container justify="space-between" direction="row">

                            <Grid item xs>
                                <div style={{ marginTop: 250, height: "200px", textAlign: 'center' }}>
                                    <p style={{ color: "#799830", fontSize: 50 }}>
                                        {lang === "en" ? "Downloads Analytics" : "احصاىيات التحميل"}</p>
                                    <PieChart data={[
                                        [lang === "en" ? "Successful Downloads" : "التحميلات الناجحة", 44],
                                        [lang === "en" ? "Paused Downloads" : "التحميلات الموقفة", 23],
                                        [lang === "en" ? "Failed Downloads" : "التحميلات الفاشلة", 12]
                                    ]} />
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div style={{ marginTop: 250, height: "200px", textAlign: 'center' }}>
                                    <p style={{ color: "#799830", fontSize: 50 }}>{lang === "en" ? "Number of Admins" : "عدد المسؤولين"}</p>
                                    <AreaChart data={{ "2018-01-01": 1, "2018-01-02": 16, "2018-01-03": 5, "2018-01-04": 24 }} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({ langReducer, AdminReducer }) => {
    const { lang } = langReducer
    const { data } = AdminReducer
    return { lang, data }
}





export default connect(mapStateToProps)(withStyles(styles)(Main))

