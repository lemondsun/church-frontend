import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttribute } from './testUtilities';
import HomeMainSection from '../components/home/HomeMainSection';

describe('The main section', () => {
  let wrapper;
  let mainSection;
  let mainSectionInfo;
  let mainSectionSchedule;

  beforeEach(() => {
    wrapper = shallow(<HomeMainSection />);
    mainSection = findByTestAttribute(wrapper, 'main-section');
    mainSectionInfo = findByTestAttribute(wrapper, 'main-section-info');
    mainSectionSchedule = findByTestAttribute(wrapper, 'main-section-schedule');
  })

  test('the main-section is rendered', () => {
    expect(mainSection.length).toBe(1);
  })
  test('the main-section-info is rendered', () => {
    expect(mainSectionInfo.length).toBe(1);
  })
  test('the main-section-schedule is rendered', () => {
    expect(mainSectionSchedule.length).toBe(1);
  })

  test('that main-section-info has a header and a body', () => {
    expect(mainSectionInfo.children().length).toBe(5);
  })
})