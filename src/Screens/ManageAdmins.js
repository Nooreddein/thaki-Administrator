import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import AddAdmin from '../Copmonents/AddAdmin';
import NavBar from './NavBar';
import Axios from 'axios';
import Admin from '../Copmonents/Admin';

export default class ManageAdmins extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Admins: []
        }
    }
    componentDidMount() {
        const that = this
        Axios.get("/api/v1/analytics/admins").then((Admins) => {
            console.log(Admins);

            that.setState({
                Admins: Admins.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    DeleteAdmin = (id) => {
        Axios.post("/api/v1/delete/admin", {
            id
        }).then((res) => {
            alert(res.data)
            window.location.reload()
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        const { Admins } = this.state
        return (
            <div >
                <NavBar home />
                <Grid container style={{ marginTop: "30px" ,textAlign:"center"}} justify="space-around" spacing={40} direction="column" alignContent="center">
                    <Grid item xs={6} style={{marginLeft:"500px"}}>
                        <AddAdmin />
                    </Grid>
                    <Grid item xs>
                        {
                            Admins.length ? Admins.map((admin) => {
                                return <Admin
                                    email={admin.email}
                                    key={admin._id}
                                    onClick={() => this.DeleteAdmin(admin._id)}
                                />
                            }) : null
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}
