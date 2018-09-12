import React from 'react';
import { Divider, Grid, Card } from '../../node_modules/@material-ui/core';
import { Link } from 'react-router-dom'

class Drawer extends React.Component {
    state = {
        left: false,

    };
    render() {
        return (
            <div>
                <Link to="home">
                    <img
                        style={{
                            width: "50px",
                            height: "50px",
                            float: 'left',
                            marginTop: "10px",
                            marginRight: "20px",
                            marginLeft: "20px"
                        }}
                        alt=""
                        src={require('../assets/image.png')} />
                </Link>
                <p style={{
                    fontSize: "30px",
                    color: "#799830",
                    margin: "20px"
                }}>Thaki Admin
                </p>

                <Divider />

                <p style={{ fontSize: "15px", color: "#799830", margin: "20px" }}>Manage The App From The Online DashBoard</p>
                <Grid container direction="column" style={{ textAlign: "center" }}>
                    <Grid item xs>
                        <Link to="add-content">
                            <Card style={{ backgroundColor: "#799830", margin: "10px" }}>

                                <p style={{
                                    fontSize: "15px",
                                    color: "white"
                                }}>
                                    Add Content
                                </p>

                            </Card>
                        </Link>

                        <Link to="/cat">
                            <Card style={{ backgroundColor: "#799830", margin: "10px" }}>

                                <p style={{
                                    fontSize: "15px",
                                    color: "white"
                                }}>
                                    Categories
                                </p>

                            </Card>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        );
    }
}



export default Drawer;