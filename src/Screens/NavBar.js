import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { languageChanged, AdminLoggedIn, isLogedIn } from "../actions"
import { } from '../actions/index'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from "./Drawer"
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  flex: {
    flexGrow: 1,
  },

  list: {
    width: 250,
  },
});

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    const { classes, lang, languageChanged, home, isLogedIn } = this.props;
    console.log(this.props);

    const { open } = this.state
    return (
      <div className={classes.root} dir={lang === "en" ? "rtl" : "ltr"}>
        <AppBar position="static" style={{ backgroundColor: "#799830" }} >
          <Toolbar>
            <p
              style={{ color: "white" }}
              className={classes.flex}
              onClick={() => languageChanged(lang === "en" ? "ar" : "en")}
            >{lang === "en" ? "عربي" : "English"}</p>
            {
              home ? <Link to="/"

                onClick={() => isLogedIn(false)}><p
                  style={{ color: "white" }}
                >{lang === "ar" ? "تسجيل الخروج" : "Logout"}</p>
              </Link> : null
            }
            {home ? <IconButton style={{
              marginLeft:lang === "en"? -12:20,
              marginRight: lang === "en"? 20:-12,
            }} color="inherit" aria-label="Menu"
              onClick={this.toggleDrawer('open', true)}>
              <MenuIcon />
            </IconButton> : null}
          </Toolbar>

        </AppBar>
      <SwipeableDrawer
        open={open}
        onClose={this.toggleDrawer('open', false)}
        onOpen={this.toggleDrawer('open', true)}
      >
        <Drawer />
      </SwipeableDrawer>
      </div >
    );
  }

}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ langReducer, Loggedin }) => {
  const { lang } = langReducer
  const { logedIn } = Loggedin
  return { lang, logedIn }
}





export default connect(mapStateToProps, { languageChanged, AdminLoggedIn, isLogedIn })(withStyles(styles)(NavBar));