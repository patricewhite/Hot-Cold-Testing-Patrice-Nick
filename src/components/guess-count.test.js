import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
      shallow(<GuessCount />);
  });

  it('Renders count', () => {
    const count = 10;
    const wrapper = shallow(<GuessCount count={count}/>);
    expect(wrapper.text()).toEqual(`Guess #${count}!`);
  });

});
