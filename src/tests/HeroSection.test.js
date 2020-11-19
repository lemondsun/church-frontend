import React from 'react';
import { shallow } from "enzyme";
import {findByTestAttribute} from './testUtilities'
import HeroSection from '../components/home/HeroSection';

describe('the HeroSection component', () => {
  let wrapper;
  let HeroImage;
  let HeroMainText;
  let HeroSubText;

  beforeEach(() => {
    wrapper = shallow(<HeroSection />)
    HeroImage = findByTestAttribute(wrapper, 'hero-image')
    HeroMainText = findByTestAttribute(wrapper, 'hero-main-text')
    HeroSubText= findByTestAttribute(wrapper, 'hero-sub-text')
  })
  
  test('HeroSection renders', () => {
    expect(wrapper.type()).toBe('div')
  }) 

  test('HeroSection has three children', () => {
    expect(wrapper.children().length).toBe(3)
  })

  test('has the proper children', () => {
    expect(HeroImage.length).toBe(1);
    expect(HeroMainText.length).toBe(1);
    expect(HeroSubText.length).toBe(1);
  })
})