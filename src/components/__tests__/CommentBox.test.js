import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1)
  expect(component.find('button').length).toEqual(2)
});


describe('The text area', () => {
  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    component.update();
  });


  it('has a text area that users can type in', () => {
    expect(component.find('textarea').prop('value')).toEqual('new comment');
  });

  it('Form submission will clear the text area', () => {
    component.find('form').simulate('submit')
    component.update();
    expect(component.find('textarea').prop('value')).toEqual('');
  });
});
