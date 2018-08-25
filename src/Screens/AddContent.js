import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, TextField, Button } from "@material-ui/core";
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { Line } from "rc-progress";
import Axios from "axios";





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


class AddContent extends React.Component {
    constructor() {
        super()
        this.state = {
            FILE: {},
            upload: false
        }
    }

    submitFile = (e) => {
        this.setState({ upload: true })
        e.preventDefault();
        const f = this.state.FILE
        const formData = new FormData()
        formData.append('selectedFile', f);
        Axios.post("/api/v1/upload", formData)
            .then((res) => {
                console.log(res);
                this.setState({ upload: false })
            })
            .catch(err => {
                console.log(err);

            })
    }

    onDrop = (e) => {
        let FILE = e.target.files[0]
        this.setState({
            FILE
        })
    }


    render() {
        const { classes, lang } = this.props
        const { upload } = this.state
        console.log(this.state)
        return (
            <div style={{ marginBottom: "325px" }} >
                <NavBar />
                <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "80px", color: "#799830" }}>Add Content</p>
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
                                    <div dir={lang === "en" ? "ltr" : "rtl"}>
                                        <TextField
                                            label={lang === "en" ? "Content Name" : "اسم المحتوى"}
                                            placeholder={lang === "en" ? "Content Name" : "اسم المحتوى"}
                                            margin="normal"
                                            className={classes.textField}
                                        />
                                    </div>
                                </Grid>
                                <Grid item >
                                    <div dir={lang === "en" ? "ltr" : "rtl"} style={{ textAlign: 'center' }}>
                                        <section>
                                            <div className="dropzone">
                                                <input type="file" name="selectedFile" onChange={this.onDrop} />
                                            </div>
                                            {upload ? ("Uploading File..." &&
                                                <Line percent="10" strokeWidth="4" strokeColor="#799830" />) : null}
                                        </section>
                                    </div>
                                </Grid>
                                <Grid item >

                                    <Button variant="contained"
                                        onClick={this.submitFile}
                                        style={{ backgroundColor: '#799830', color: "white", cursor: 'pointer' }} className={classes.button}>{lang === "en" ? "Add" : "اضافة"}</Button>
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


export default connect(mapStateToProps)(withStyles(styles)(AddContent))