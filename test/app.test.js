import React from 'react'
import App from '../src/components/app'
import renderer from 'react-test-renderer'

it('it renders the app component correctly', () => {
    const component = renderer.create(<App />).toJSON()
    expect(component).toMatchSnapshot()
})
