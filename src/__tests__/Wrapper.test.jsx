import { shallow } from 'enzyme';
import React from 'react';

import Wrapper from '../components/Wrapper';

describe('Wrapper', () => {
  it('should match snapshot', () => {
    const component = shallow(<Wrapper />);

    expect(component).toMatchSnapshot();
  });

  it('should render a children passed', () => {
    const component = shallow(
      <Wrapper>
        <h1>Hello Test</h1>
      </Wrapper>,
    );

    expect(component.find('h1').text()).toBe('Hello Test');
  });
});
