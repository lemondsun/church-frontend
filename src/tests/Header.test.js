import React from 'react';
import { shallow } from "enzyme";
import {findByTestAttribute} from './testUtilities'
import Header from '../components/Header';

describe('the header component', () => {
  const defaultProps = { showItems: false }
  const secondaryProps = {showItems: true}
  let wrapper;
  let menu;
  let menuItems;
  let logo;
  let headerTitle;
  

  const setup = ({props} ) => {
return shallow(<Header {...props}/>)
  }
  beforeEach(() => {
    wrapper = shallow(<Header {...defaultProps}/>)
    menu = findByTestAttribute(wrapper, 'menu')
   
    logo = findByTestAttribute(wrapper, 'logo')
    headerTitle = findByTestAttribute(wrapper, 'header-title')
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('that the header components are rendering', () => {
    expect(menu.length).toBe(1);
    expect(logo.length).toBe(1);
    expect(headerTitle.length).toBe(1);
  })

  test('that menu items are not showing when state is false', () => {
    wrapper = shallow(<Header {...defaultProps}/>)
    menuItems = findByTestAttribute(wrapper, 'menu-items')
    expect(menuItems.length).toBe(0);
  })


  
})