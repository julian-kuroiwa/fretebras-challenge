import { shallow, mount } from 'enzyme';
import React from 'react';

import Radio from '../components/Radio';

describe('Radio', () => {
  it('should match snapshot', () => {
    const component = shallow(<Radio />);

    expect(component).toMatchSnapshot();
  });

  it('should render with children', () => {
    const component = shallow(<Radio id="1" title="radio button" />);

    expect(component.find('label').text()).toBe('radio button');
  });

  it('should render with id', () => {
    const component = mount(<Radio id="1" title="radio button" />);

    expect(component.props().id).toBe('1');
  });
});
