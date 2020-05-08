import { shallow, mount } from 'enzyme';
import React from 'react';

import Pagination from '../components/Pagination';

describe('Pagination', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <Pagination totalPages={5} startsAt={0} perPage={50} />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render with pages index', () => {
    const component = shallow(
      <Pagination totalPages={5} startsAt={0} perPage={50} />,
    );

    expect(component.find('ul').children().length).toBe(5);
  });
});
