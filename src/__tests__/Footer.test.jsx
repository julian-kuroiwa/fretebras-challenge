import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../components/Footer';

describe('Footer', () => {
  it('should match snapshot', () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
