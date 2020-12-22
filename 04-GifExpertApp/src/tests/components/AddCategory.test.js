import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import AddCategory from '../../components/AddCategory';

describe('Testing AddCategory component', () => {
    // jest funciona como dom, por lo tanto esta función estará en el contexto del componente
    const setCategories = jest.fn(); 
    window.alert = () => {};

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);    
    });

    test('should load <AddCategory /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should change category imput', () => {
        const input = wrapper.find('input');
        const value = 'input test';
        const event = {target: { value:value,}}
        input.simulate('change',event);
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    test("shouldn't setCategories onSubmit", () => {
        const event = {preventDefault(){}};
        wrapper.find('form').simulate('submit',event);
        // como no hay inputvalue, la función no debió llamarse.
        expect( setCategories ).not.toHaveBeenCalled();
    });
    test('should call setCategories and clear input', () => {
        const value = 'input test';
        const input = wrapper.find('input');
        const {value:inputValue} = input.props();
        input.simulate('change',{target: { value:value,}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));
        expect(inputValue).toBe('');        
    })
    
    
    
})
