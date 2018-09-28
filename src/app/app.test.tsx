import React from 'react';
import * as renderer from 'react-test-renderer';
import App from './app';

describe('<App />', () => {
    it('should render root element', () => {
        const component = renderer.create(<App />);
        const instance = component.root;

        instance.findByType('View');

        // console.log(component.toJSON());
    });
});
