import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import Content from './Content';
import { Grid } from '@material-ui/core';

class Contents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }
  componentWillMount() {
    Axios.get("/api/v1/get/all/objects")
      .then(({ data }) => {
        console.log({ data });
        this.setState({ data })
      })
      .catch(err => {
        console.log(err);
      })
  }
  delete = (key)=>{
    Axios.post("/api/v1/delete/object",{cat:this.props.cat,key})
  }
  render() {
    const { data } = this.state
    return (
      <Grid container >
        {
          data.map((elem) => {
            return (
              <Grid item xs key={elem.ETag} style={{margin:"30px"}}>
                <Content
                  text={elem.Key}
                  delete={()=>this.delete(elem.Key)}
                />
              </Grid> 
            )
          })
        }
      </Grid>
    )
  }
}

const mapStateToProps = ({ langReducer,catReducer }) => {
  const { lang } = langReducer
  const { cat } = catReducer
  return { lang,cat }
}

export default connect(mapStateToProps)(Contents)
