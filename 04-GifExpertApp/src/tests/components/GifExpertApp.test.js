import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../../components/GifExpertApp';

describe('Testing GifExpertApp component', () => {

    test('should load <GifExpertApp /> correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('should load default categories', () =>{
        const defaultCategories = ['Hello','World'];
        const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);
    })
})
