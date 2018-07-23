import React, { Component } from 'react';
import { connect } from 'react-redux'

class CommentList extends Component {

  render(){
    return(<div>{ this.props.comments.map(comment => <div key={comment}>{ comment }</div>)}</div>)
  }
}


const mapStateToProps = ({ comments }) => ({
  comments
})

export default connect(mapStateToProps)(CommentList)
