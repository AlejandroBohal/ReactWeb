import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid', () => {

    const category = 'test category';
    useFetchGifs.mockReturnValue({
        data:[],
        loading:true,
    });
    const wrapper = shallow(<GifGrid category={category}/>);
    test('should load <GifGrid /> correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    test('should load items when load useFetchGif hook', () => {
        const imgs = [{
            id: 'ABC',
            title: 'GifExample',
            url: 'https://localhost/tests'
        }];
        useFetchGifs.mockReturnValue({
            data: imgs,
            loading:false,
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    });
    

})
