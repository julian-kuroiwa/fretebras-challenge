import { shallow } from 'enzyme';
import React from 'react';

import Button from '../components/Button';

describe('Button', () => {
  it('should match snapshot', () => {
    const component = shallow(<Button />);

    expect(component).toMatchSnapshot();
  });

  it('should render with children', () => {
    const component = shallow(<Button type="button">Click here</Button>);

    expect(component.text()).toBe('Click here');
  });
});
