import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { changeAuth } from 'actions/authActions'

class App extends Component {

  loginButtonText = (auth) =>
     auth ? 'Sign out' : 'Sign in'

  renderButton = () => {
    const { auth, changeAuth } = this.props
    return (
      <button onClick={() => changeAuth(!auth)}>
        { this.loginButtonText(auth) }
      </button>
    )
  }

  renderHeader = () =>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/post">Post a comment</Link></li>
      <li>{this.renderButton()}</li>
    </ul>

  render(){
    return(
      <Fragment>
        { this.renderHeader() }
        <Route path="/post" component={CommentBox} />
        <Route path="/" component={CommentList} exact />
      </Fragment>
    );
  }
}

const actions = {
  changeAuth
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps, actions)(App);
