import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

class CommentList extends Component {

  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    });
  }

  render(){
    return(
      <Fragment>
        <ul>
          {this.renderComments()}
        </ul>
      </Fragment>
    );
  }
}


const mapStateToProps = ({ comments }) => ({
  comments
})

export default connect(mapStateToProps)(CommentList)
