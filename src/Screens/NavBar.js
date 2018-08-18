import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { languageChanged } from "../actions"
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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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
    const { classes, lang, languageChanged, home } = this.props;
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
              home ? <Link to="/"><p
                style={{ color: "white" }}
              >{lang === "ar" ? "تسجيل الخروج" : "Logout"}</p></Link> : null
            }
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" 
            onClick={this.toggleDrawer('open', true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>

        </AppBar>
        <SwipeableDrawer
          open={open}
          onClose={this.toggleDrawer('open', false)}
          onOpen={this.toggleDrawer('open', true)}
        >
          <Drawer />
        </SwipeableDrawer>
      </div>
    );
  }

}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ langReducer }) => {
  const { lang } = langReducer
  return { lang }
}





export default connect(mapStateToProps, { languageChanged })(withStyles(styles)(NavBar));