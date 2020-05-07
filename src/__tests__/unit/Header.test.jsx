import { shallow } from 'enzyme';
import React from 'react';

import Header from '../../components/Header';

describe('Header', () => {
  it('should match snapshot', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
