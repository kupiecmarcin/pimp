import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import { fetchKeys, fetchNotifications } from '../actions';

class Container extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <Button
        variant="raised"
        color="primary"
        onClick={() => {
          dispatch(fetchKeys());
        }}>
        Hello World!
      </Button>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { keys: state.keys };
}

export default connect(mapStateToProps)(Container);