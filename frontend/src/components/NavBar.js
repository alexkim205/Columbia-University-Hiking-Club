import { withRouter, Link } from 'react-router-dom';
import PropTypes            from 'prop-types';
import React, { Component } from 'react';
import classNames           from 'classnames';
import { compose }          from 'redux';
import { connect }          from 'react-redux';
import { hot }              from 'react-hot-loader';

import withStyles        from '@material-ui/core/styles/withStyles';
import AppBar            from '@material-ui/core/AppBar';
import Toolbar           from '@material-ui/core/Toolbar';
import Typography        from '@material-ui/core/Typography';
import IconButton        from '@material-ui/core/IconButton';
import MenuIcon          from '@material-ui/icons/Menu';
import AddCircleOutline  from '@material-ui/icons/AddCircleOutline';
import Add               from '@material-ui/icons/Add';
import Landscape         from '@material-ui/icons/Landscape';
import CardMembership    from '@material-ui/icons/CardMembership';
import AccountCircle     from '@material-ui/icons/AccountCircle';
import ContactSupport    from '@material-ui/icons/ContactSupport';
import MenuItem          from '@material-ui/core/MenuItem';
import MenuList          from '@material-ui/core/MenuList';
import Button            from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow              from '@material-ui/core/Grow';
import Collapse          from '@material-ui/core/Collapse';
import Paper             from '@material-ui/core/Paper';
import Popper            from '@material-ui/core/Popper';
import Popover           from '@material-ui/core/Popover';
import ChevronLeftIcon   from '@material-ui/icons/ChevronLeft';
import Drawer            from '@material-ui/core/Drawer/Drawer';

import ListLinkItem from './ListLinkItem';

import { auth } from '../actions';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {},
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  navBarProfile: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  navBarProfileText: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    flex: 1,
    flexDirection: 'row',
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: theme.palette.secondary.light,
    // color: theme.palette.secondary.contrastText
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

class NavBar extends Component {

  state = {
    anchorEl: null,
    profileOpen: false,
  };

  componentDidMount () {
    this.props.loadUser();
    this.setState({profileOpen: false});
  }

  handleToggle = event => {
    const {currentTarget} = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      profileOpen: !state.profileOpen,
    }));
  };

  handleClose = event => {
    this.setState({
      anchorEl: null,
      profileOpen: false,
    });
  };

  render () {

    const {classes, drawerOpen, handleDrawerClose, handleDrawerOpen} = this.props;
    const isAuthenticated = this.props.isAuthenticated;
    const {anchorEl, profileOpen} = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: drawerOpen,
                })}>
          <Toolbar>
            <IconButton
              className={classNames(classes.menuButton,
                drawerOpen && classes.hide)}
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon/>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit"
                        noWrap>
              Columbia University Hiking Club
            </Typography>
            <div className={classes.grow}/>
            {isAuthenticated ? (
              <React.Fragment>
                {/*<IconButton*/}
                {/*color="inherit"*/}
                {/*component={Link}*/}
                {/*to="/hike-req"*/}
                {/*>*/}
                {/*<AddCircleOutline/>*/}
                {/*</IconButton>*/}
                <Button variant="contained"
                        color="secondary"
                        component={Link}
                        to="/hike-req"
                        className={classes.button}>
                  Request a Hike
                  <AddCircleOutline className={classes.rightIcon}/>
                </Button>
                <div>
                  <Button aria-describedby={profileOpen ? 'menu-list-grow' : undefined}
                       onClick={this.handleToggle}
                       className={classes.navBarProfile}
                  >
                    <AccountCircle className={classes.leftIcon}/>
                    <Typography className={classes.navBarProfileText} variant="h6"
                                color="inherit"
                                noWrap>
                      Hi, {this.props.user.first_name}!
                    </Typography>
                  </Button>
                  {/*<IconButton*/}
                  {/*aria-describedby={profileOpen ? 'menu-list-grow' : undefined}*/}
                  {/*onClick={this.handleToggle}*/}
                  {/*color="inherit"*/}
                  {/*>*/}
                  {/*<AccountCircle/>*/}
                  {/*</IconButton>*/}
                  {/*<ClickAwayListener onClickAway={this.handleClose}>*/}
                  <Popover
                    id="menu-list-grow"
                    placement="bottom-end"
                    open={profileOpen}
                    onClose={this.handleClose}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    // TransitionComponent="collapse"
                  >
                    <Paper>
                      <MenuList>
                        <MenuItem component={Link} to="/profile"
                                  onClick={this.handleClose}>My
                          Profile</MenuItem>
                        <MenuItem
                          onClick={this.props.logout}>Logout</MenuItem>
                      </MenuList>
                    </Paper>

                  </Popover>
                  {/*</ClickAwayListener>*/}
                </div>
              </React.Fragment>
            ) : (
              <div>
                <Button variant="contained"
                        color="default"
                        component={Link}
                        to="/login"
                        className={classes.button}>
                  Login
                </Button>
                <Button variant="contained"
                        color="secondary"
                        component={Link}
                        to="/register"
                        className={classes.button}>
                  Register
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>

        {/* Side Drawer */}
        <ClickAwayListener onClickAway={handleDrawerClose}>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={drawerOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >

            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon/>
              </IconButton>
            </div>

            <MenuList>
              <ListLinkItem to={'/'} text={'Hikes'} icon={<Landscape/>}/>
              <ListLinkItem to={'/membership'} text={'Become a Member'}
                            icon={<CardMembership/>}/>
              <ListLinkItem to={'/hike-req'} text={'Request a Hike'}
                            icon={<Add/>}/>
              <ListLinkItem to={'/contact'} text={'Contact Us'}
                            icon={<ContactSupport/>}/>
            </MenuList>
          </Drawer>
        </ClickAwayListener>

      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(auth.loadUser()),
    logout: () => dispatch(auth.logout()),
  };
};

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  hot(module),
)(NavBar);
