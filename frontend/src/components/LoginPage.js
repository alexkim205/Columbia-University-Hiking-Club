import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect, Link} from "react-router-dom";
import {compose} from "redux";
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

import {auth} from "../actions";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => {
  return {
    paper: {
      padding: '30px',
    }
  }
}

class LoginPage extends Component {

  state = {
    email: "",
    password: "",
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  };

  render() {

    const {classes} = this.props;

    if (this.props.isAuthenticated) {
      return <Redirect to="/"/>
    }

    return (
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input name="email" id="email" autoComplete="email" onChange={this.handleChange} autoFocus/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" onChange={this.handleChange}
                   autoComplete="current-password"/>
          </FormControl>
          {this.props.errors.length > 0 && (
            <ul>
              {this.props.errors.map(error => (
                <li key={error.field}>{error.message}</li>
              ))}
            </ul>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
        <Typography component="h6">
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Paper>
    )
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = state => {
  let errors = [];
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {field, message: state.auth.errors[field]};
    })
  }

  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      return dispatch(auth.login(email, password))
    }
  }
}


export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);
