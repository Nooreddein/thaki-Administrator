import React, { Component } from 'react'
import { ColumnChart } from "react-chartkick"
import Axios from 'axios';
import { connect } from 'react-redux'

class AnalyticsChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentWillMount() {
        Axios.post("/api/v1/analytics/monthly/col")
            .then(({data}) => {
                this.setState({data})
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            })
        // for (let i = 0 ; i < 10;i++){
        //     this.setState({data:[["alo",i++]]})
        // }
    }

    render() {
        const { lang } = this.props
        const {data} = this.state
        return (
            <div style={{ height: "200px", textAlign: 'center' }} dir={lang === "en"?"ltr":"rtl"}>
                <p style={{ color: "#799830", fontSize: 50 }}>{lang === "en" ? "Monthly File Downloads" : " التنزيلات الشهرية"}</p>
                <ColumnChart data={data[lang]} />
            </div>
        )
    }
}

const mapStateToProps = ({ langReducer }) => {
    const { lang } = langReducer
    return { lang }
}

export default connect(mapStateToProps)(AnalyticsChart)