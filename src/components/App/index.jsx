import React, { Fragment } from 'react';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default () => {
  return(
    <Fragment>
      <CommentBox/>
      <CommentList/>
    </Fragment>
  );
}
