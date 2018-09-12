import React, { Component } from 'react'
import { ColumnChart } from "react-chartkick"
import Axios from 'axios';
import { connect } from 'react-redux'

class AnalyticsChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                en: [["January", 0], ["February", 0], ["March", 0], ["April", 0], ["May", 0],
                ["June", 0], ["July", 0], ["August", 15], ["September", 50], ["October", 0]
                ["November", 0], ["December", 0]
                ],
                ar: [
                    ["يناير", 0], ["فبراير", 0], ["مارس", 0], ["إبريل", 0], ["مايو", 0],
                    ["يونيو", 0], ["يوليو", 0], ["أغسطس", 15], ["سبتمبر", 50], ["أكتوبر", 0],
                    ["نوفمبر", 0], ["ديسمبر", 0]]
            }
        }
    }


    render() {
        const { lang } = this.props
        const { data } = this.state
        return (
            <div style={{ height: "200px", textAlign: 'center' }} dir={lang === "en" ? "ltr" : "rtl"}>
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