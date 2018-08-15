import React from 'react';
import { Divider } from '../../node_modules/@material-ui/core';


class Drawer extends React.Component {
    state = {
        left: false,

    };
    render() {
        return (
            <div>
                <img
                    style={{ width: "100px", height: "100px" }}
                    src={require('../assets/image.png')} />
                    <Divider />
                <p style={{ fontSize: "30px", color: "#799830", margin: "20px" }}>Thaki Admin</p>
                <p style={{ fontSize: "15px", color: "#799830", margin: "20px" }}>Manage The App From The Online DashBoard</p>
            </div>
        );
    }
}



export default Drawer;