import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Renders the feedback', () => {
        const feedback = 'Hello';
        const wrapper = shallow(<GuessSection feedback = {feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });

})