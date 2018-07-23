import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList'
import Root from 'Root'

let component;
let initialState;

beforeEach(() => {
  initialState = {
    comments: ['Comment 1', 'Comment 2']
  }
  component = mount(
    <Root initialState={initialState}>
      <CommentList/>
    </Root>
  );
});


it('create one <li> per comment', () => {
  const { comments } = initialState
  expect(component.find('li').length).toEqual(comments.length)
});

it('shows the text for each comment', () => {
  expect(component.render().text()).toContain('Comment 1');
  expect(component.render().text()).toContain('Comment 2');
});
