import React, { Component } from 'react'
import CatCard from './Category'
import { Grid } from "@material-ui/core"
import Axios from 'axios';
export default class Categories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            in: false,
            newName: ""
        }
    }
    componentDidMount() {
        Axios.get('/api/v1/get/cats')
            .then(({ data }) => {
                this.setState({ data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    delete(cat) {
        Axios.delete('/api/v1/delete/cat', { cat })
    }
    openOrClose = () => {
        this.setState({ in: !this.state.in })
    }
    onChnage = (e) => {
        this.setState({ newName: e.target.value })

    }
    confirm = (name, newName) => {
        const {data} = this.state
            for(let i =0;i<data.length;i++){
                if(data[i].Name === name){
                    data[i].Name = newName;
                    break;
                }
            }
            this.setState({newName:''})
    }
    render() {
        const { data } = this.state
        return (
            <Grid container  style={{ width: "auto" }}>
                {
                    data.map((elem) => {
                        if (!elem.Name.includes("bean"))
                            return (
                                <Grid item xs key={elem.CreationDate} style={{ margin: "30px" }}>
                                    <CatCard
                                        text={elem.Name}
                                        delete={() => this.delete(elem.Name)}
                                        update={this.openOrClose}
                                        in={this.state.in}
                                        onChnage={this.onChnage}
                                        click={() => this.confirm(elem.Name, this.state.newName)}
                                    />
                                </Grid>
                            )
                    })
                }
            </Grid>
        )
    }
}
