import React, { PropTypes } from 'react'
import Home from '../components/Home'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
class HomeContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      test: '',
      isLoggedIn: true
    }
  }

  render() {
    return(
      <div>
        <div id="navBar">
          <ul>
          <li><Link to ="/logout">Logout</Link></li>
          <li><Link to ="/user/profile">Profile</Link></li>
          <li><Link to ="/">Home</Link></li>
          </ul>
        </div>
        <div id = "wrapper">
        <Home/>
        {this.props.children}
        </div>
      </div>
      )
  }

}

export default HomeContainer