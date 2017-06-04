import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

const styleSheet = createStyleSheet('SimpleAppBar', {
  root: {
    position: 'relative',
    width: '100%',
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
});

class SimpleAppBar extends PureComponent {

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton contrast>
              <MenuIcon />
            </IconButton>
            <Typography type="title" colorInherit className={classes.flex}>Beetimer</Typography>
            {this.props.loginArea}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  loginArea: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleAppBar);