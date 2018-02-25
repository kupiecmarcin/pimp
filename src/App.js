import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import 'typeface-roboto';
import './App.css';

import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Container from './components/Container';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class App extends Component {
  render() {
    const { isLoading, classes } = this.props;
    console.log(isLoading);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          isLoading
            ? <CircularProgress className={classes.progress} size={50}/>
            : <Container/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ load }) => ({
  isLoading: load.isLoading,
});

export default connect(mapStateToProps)(withStyles(styles)(App));
