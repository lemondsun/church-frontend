import React from 'react';
import { shallow } from "enzyme";
import Home from '../pages/Home';

describe('The Home page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <Home/>)
  })
  test('That the Home page renders', () => {
    expect(wrapper.type()).toBe('div')
  })

  test('that Home has three children', ()=> {
    expect(wrapper.children().length).toBe(3)
  })

})