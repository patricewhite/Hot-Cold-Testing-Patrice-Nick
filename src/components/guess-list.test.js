import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Render without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('Should render a list of guesses', () => {
        const list = [1, 2, 3];
        const wrapper = shallow(<GuessList guesses = {list} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(list.length); 
    });
})