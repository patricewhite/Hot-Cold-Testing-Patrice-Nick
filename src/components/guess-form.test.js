import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('should fire the onGuess callback when the form is submitted' , () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 'FooBar';
    wrapper.find('input[type="text"]').node.value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  });

  it('should reset the input when the form is submitted' , () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="text"]');
    input.node.value = 10;
    wrapper.simulate('submit');
    expect(input.node.value).toEqual('');
  })

});
