import React from 'react';
import { shallow } from "enzyme";
import App from '../App';

describe('App', () => {
let wrapper = shallow(<App />)
  test('App renders', () => {
    expect(wrapper.children().length).toBe(5)
  })
})
