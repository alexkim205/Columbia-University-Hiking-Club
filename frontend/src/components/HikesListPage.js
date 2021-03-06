import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import { compose }          from 'redux';
import PropTypes            from 'prop-types';
import { hot }              from 'react-hot-loader';

import { hike } from '../actions';
import Loader   from './Loader';

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import HikesGrid from './HikesGrid';

const styles = theme => {
  return {
    // root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-around',
    //   // overflow: 'hidden',
    //   // backgroundColor: theme.palette.background.paper,
    // },
    gridList: {
      maxWidth: '1300px',
    },
    gridListTile: {
      overflow: 'visible',
    },
    paper: {
      padding: theme.spacing.unit * 4,
      overflow: 'visible',
    },
    titleSpacer: theme.mixins.toolbar,
  };
};

class HikesListPage extends Component {

  UNSAFE_componentWillMount () {
    this.setState({hikes: this.props.getHikes()});
  }

  state = {
    isOpen: false,
    hikes: null,
  };

  render () {

    const {classes, hikeReceived, hikeData} = this.props;
    const {isOpen} = this.state;

    return (
      <React.Fragment>
        {/*<Typography component="h1" variant="h2">*/}
        {/*Hikes*/}
        {/*</Typography>*/}
        {/*<div className={classes.titleSpacer}/>*/}
        <div className={classes.root}>
          {hikeReceived ? (
            <HikesGrid hikeData={hikeData}></HikesGrid>
          ) : (
            <Loader/>
          )}
        </div>
      </React.Fragment>
    );
  }
}

HikesListPage.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => {
  let errors = [];
  if (state.hike.errors) {
    errors = Object.keys(state.hike.errors).map(field => {
      return {field, message: state.hike.errors[field]};
    });
  }

  return {
    errors,
    hikeData: state.hike.hikes,
    hikeReceived: state.hike.hikeReceived,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHikes: () => dispatch(hike.getHikes()),
    // register: (fname, lname, email, password) => {
    //   return dispatch(auth.register(fname, lname, email, password))
    // }
  };
};

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  hot(module),
)(HikesListPage);
