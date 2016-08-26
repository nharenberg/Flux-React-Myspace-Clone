import React, { Component } from 'react';
import UserStore from '../stores/UserStore'


export default class Profile extends Component {

  constructor() {
    super();

    this.state = {
      profile: UserStore.get()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserStore.startListening(this._onChange);
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
    let { profile } = this.state;

    if(!profile) {
      return <p>test</p>
    }
    if(profile.username == "tom"){
    return (
      <div className="container">
        <img src="https://thechive.files.wordpress.com/2015/06/myspace-tom-spends-his-millions-taking-badass-pictures-30-photos-32.gif?w=500&h=343" />
      </div>
    ) 
    }
    return (
      <div>
        <h2>{ profile.username }</h2>
        <img src="http://www.stlouiscondosandlofts.com/wp-content/uploads/person-placeholder.jpg" />
      </div>
    )
  }
}