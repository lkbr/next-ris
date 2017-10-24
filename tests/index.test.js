import React from 'react';
import renderer from 'react-test-renderer';
import App from '../pages/index.js';

describe('Next app recipes', () => {
  it('App renders without crashing', () => {
    const component = renderer.create(<App searchState={{}} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
