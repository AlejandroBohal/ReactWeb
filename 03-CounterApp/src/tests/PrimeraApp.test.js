import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';
import React from 'react';


describe('PrimeraApp component test', () => {
    //test('should show "Adios mundo" message', () => {
    //    
    //    const saludo = "Adios mundo";
    //    const {getByText} = render(<PrimeraApp saludo = {saludo} />);
    //    expect(getByText(saludo)).toBeInTheDocument();
    //})
    test('should show <PrimeraApp /> correctly', () => {
        const saludo = 'Hola, soy Goku'
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('should show subtitulo sent by props', () => {
        const saludo = 'Hola, soy Goku'
        const subtitulo = 'Soy una prueba'
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo ={subtitulo} />);
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);

    });
    
    
    
})
