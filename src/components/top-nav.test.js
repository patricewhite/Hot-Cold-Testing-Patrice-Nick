import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe ('<TopNav />', () => {
    it('Renders without crashing', () =>{
        shallow(<TopNav />);
    });

    it('calls onNewGame when New Game is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onNewGame = {callback} />);
        wrapper.find('.new').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

    it('calls onInfo when What is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onInfo = {callback} /> );
        wrapper.find('.what').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    })
})