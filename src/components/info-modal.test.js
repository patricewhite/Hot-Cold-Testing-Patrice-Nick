import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from './info-modal';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal />);
  });

  it('Renders modal page', () => {
    const wrapper = shallow(<InfoModal />);
    expect(wrapper.hasClass('overlay')).toEqual(true);
  });

  it('Renders onClose on onClick', () => {
    const callback = jest.fn();
    const wrapper = shallow(<InfoModal onClose={callback}/>);
    wrapper.find('.close').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });

})
