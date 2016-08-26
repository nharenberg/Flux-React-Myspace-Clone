import React, { Component } from 'react';
import Profile from "./Profile"
import UserStore from '../stores/UserStore'



export default class Splash extends Component {
  constructor() {
    super();

    this.state = {
      profile: UserStore.get()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserStore.startListening(this._onChange);
    console.log("this.state", this.state)
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      profile: UserStore.get()
    });
  }

  render() {
    //let { profile } = this.state;
    
    return (
      <div>
        <h1 className="text-center">FaceSpace</h1>
        <Profile />
      </div>
    )
  }
}
