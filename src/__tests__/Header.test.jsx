import { shallow } from 'enzyme';
import React from 'react';

import Header from '../components/Header';

describe('Header', () => {
  it('should match snapshot', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });

  it('should contain an icon', () => {
    const component = shallow(<Header />);

    expect(
      component.containsMatchingElement(<i className="fas fa-hamburger" />),
    ).toBeTruthy();
  });

  it('should contain an nav', () => {
    const component = shallow(<Header />);

    expect(component.find('nav')).toBeTruthy();
  });
});
