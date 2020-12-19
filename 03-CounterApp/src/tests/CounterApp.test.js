import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Testing CounterApp Component', () => {

    let wrapper = shallow(<CounterApp />);
    beforeEach( () =>{
        wrapper = shallow(<CounterApp />);    
    });

    test('should show <CounterApp /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should show counter sent by props',()=>{
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(value.toString());
    });
    test('should increment counter with button +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    })
    test('should increment counter with button -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    })
    test('should reset default value', () => {
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    })
    
    
})
