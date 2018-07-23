import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveComment } from 'actions'

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
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.onChangeText}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

const actions = {
  saveComment
}

export default connect(null, actions)(CommentBox)
