import classes, { createScopedClasses } from '../classnames'
describe('classes', () => {
  it('接受1个className', () => {
    const result = classes('button')
    expect(result).toEqual('button')
  })
  it('接受1个className,返回作用域类名', () => {
    const result = createScopedClasses('Button')
    expect(result('')).toEqual('am-button')
    expect(result('disabled')).toEqual('am-button-disabled')
  })
})
