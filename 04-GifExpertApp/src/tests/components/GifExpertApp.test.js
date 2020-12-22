import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../../components/GifExpertApp';

describe('Testing GifExpertApp component', () => {
    let wrapper = shallow(<GifExpertApp />);
    beforeEach( () =>{
        wrapper = shallow(<GifExpertApp />);    
    });
    test('should load <GifExpertApp /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
