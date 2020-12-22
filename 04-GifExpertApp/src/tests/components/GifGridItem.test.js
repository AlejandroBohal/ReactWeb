import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem';

describe('Testing GifExpertApp component', () => {
    const title = 'test title';
    const url = 'https://localhost/test';
    let wrapper = shallow(<GifGridItem title={title} url={url} />);
    beforeEach( () =>{
        wrapper = shallow(<GifGridItem title={title} url={url}/>);    
    });
    test('should load <GifGridItem /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should have a paragraph with title', () => {
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(title);
    });
    test('should have img src', () => {
        const {src,alt} = wrapper.find('img').props();
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    test('should have animate class', () => {
        const {className} = wrapper.find('div').props();
        //expect( className.includes('animate__fadeIn')).toBe(true);
        expect(className).toContain('animate__fadeIn');
    });
    
    
    
})