import React, { Component } from 'react';
import UserActions from '../actions/UserActions'

export default class UserWelcome extends Component {
  render() {
    let { profile } = this.props;
    //console.log("userwelcome:", profile)

    if(!profile) {
      return <p className="navbar-text"></p>
    }

    return (
      <p className="navbar-text">Logged in as <strong>{profile.username}</strong></p>
    )
  }
}
