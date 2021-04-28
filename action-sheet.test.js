import React from 'react';
import { shallow } from 'enzyme';
import { ReassignLocationMenu } from 'components/menu/ReassignLocationMenu';

describe('Testing ReassignLocationMenu component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <ReassignLocationMenu count={2} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ count: 1 });
    expect(wrapper).toMatchSnapshot();
  });
});