import { shallow } from 'enzyme';
import React from 'react';

import Home from '../pages/Home';

jest.mock('react-router', () => ({
  useHistory: () => ({ push: jest.fn() }),
}));

describe('Home', () => {
  it('should match snapshot', () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });

  it('should contain an form', () => {
    const component = shallow(<Home />);

    const form = component.find('form');

    expect(form).toBeTruthy();
    expect(form.find('input')).toBeTruthy();
    expect(form.find('button')).toBeTruthy();
  });
});
