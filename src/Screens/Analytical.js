import React, { Component } from 'react'
import NavBar from "./NavBar"
import "chart.js"
import { PieChart } from "react-chartkick"
import { Grid, Card, Button, Divider, CardHeader, Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import Axios from '../../node_modules/axios';
import AnalyticsChart from '../Copmonents/AnalyticsChart'

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
            content: undefined,
            downloads: "Fetching data..."
        }
    }

    componentDidMount() {
        Axios.get('/api/v1/get/all/objects').then((res) => {
            this.setState({ content: res.data })
        })
            .catch(err => {
                console.log(err);

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
                        <AnalyticsChart />
                        <Divider style={{ marginTop: "50px", marginBottom: "50px" }} />
                        <Grid container justify="space-between" direction="row">

                            <Grid item xs>
                                <div style={{ marginTop: 250, height: "200px", textAlign: 'center' }}>
                                    <p style={{ color: "#799830", fontSize: 50 }}>
                                        {lang === "en" ? "Downloads Analytics" : "احصاىيات التحميل"}</p>
                                    <PieChart data={[
                                        [lang === "en" ? "Successful Downloads" : "التحميلات الناجحة", 44],
                                        [lang === "en" ? "Failed Downloads" : "التحميلات الفاشلة", 12]
                                    ]} />
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

