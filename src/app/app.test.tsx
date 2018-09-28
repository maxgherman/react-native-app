import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

describe('<App />', () => {
    it('should render roo element', () => {
        const component = renderer.create(<App />);
        // const instance = component.root;

        console.log(component.toJSON());
    })
})