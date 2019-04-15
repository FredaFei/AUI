import classnames from '../classnames.tsx'
describe('classnames', () => {
  it('first test', () => {
    const result = classnames('button')
    expect(result).toEqual('am-button')
  })
})
