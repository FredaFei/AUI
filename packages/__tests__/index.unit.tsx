import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../button'

describe('Button', () => {
  it('first test', () => {
    const json = renderer.create(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
