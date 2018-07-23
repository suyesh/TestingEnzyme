import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { saveComment, fetchComments } from 'actions'

class CommentBox extends Component {
  state = {
    comment: ''
  }

  onChangeText = e => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = e => {
   e.preventDefault();
   this.props.saveComment(this.state.comment)
   this.setState({ comment: '' })
  }

  render(){
    return(
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.onChangeText}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
         <button onClick={this.props.fetchComments}>Fetch comments</button>
      </Fragment>
    )
  }
}

const actions = {
  saveComment,
  fetchComments
}

export default connect(null, actions)(CommentBox)
