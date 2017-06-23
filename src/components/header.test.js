import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('infomodal changes state', () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal(true);
    expect(wrapper.find("InfoModal").exists()).toEqual(true);
  })

});
