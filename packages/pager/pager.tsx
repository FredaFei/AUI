import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import { range } from '../utils/collection'
import Icon from '../icon/icon'
import Input from '../input/input'
import './style'

const componentName = 'Pager'
const sc = createScopedClasses(componentName)
interface IProps extends IStyledProps {
  current?: number
  defaultCurrent?: number
  total: number
  visibleQuickJumper?: boolean
  onChange?: (page: number) => any
}
interface IState {
  current?: number
  value?: string
}
class Pager extends React.Component<IProps, IState> {
  static displayName = componentName
  static defaultProps = {}
  state = { current: this.props.defaultCurrent || 1,value:'' }
  static propTypes = {
    current: PropTypes.number,
    total: PropTypes.number,
    defaultCurrent: PropTypes.number
  }
  onClickItem(page: number) {
    if (page <= this.props.total && page >= 1) {
      this.current = page
    }
  }
  onInputEnter(e: React.KeyboardEvent<HTMLInputElement>): any {
    const input = e.target as HTMLInputElement
    const page = input.value
    input.value = ''
    if (/^\d+$/.test(page)) {
      this.current =
        parseInt(page) > this.props.total ? this.props.total : parseInt(page)
    }
  }
  get current() {
    if ('defaultCurrent' in this.props) {
      return this.state.current
    } else {
      return this.props.current || 1
    }
  }
  set current(value: number) {
    if ('defaultCurrent' in this.props) {
      this.setState({ current: value })
    }
    this.props.onChange && this.props.onChange(value)
  }
  jumpPages = (index: number): number => {
    const prev = this.current - 5 <= 0 ? 1 : this.current - 5
    const next =
      this.current + 5 >= this.props.total ? this.props.total : this.current + 5

    return index === 1 ? prev : next
  }
  get items() {
    const { total } = this.props
    return range(1, total)
      .filter(i => i === 1 || i === total || Math.abs(i - this.current) <= 2)
      .reduce(
        (prev, next) => {
          const last = prev[prev.length - 1]
          const x = last !== -1 && last - next < -1
          return prev.concat(x ? [-1, next] : [next])
        },
        [] as number[]
      )
      .map((item, index) =>
        item === -1 ? (
          <li
            key={`pager-split-${index}`}
            className={sc('list-item', 'split')}
            onClick={this.onClickItem.bind(this, this.jumpPages(index))}
          >
            <span>...</span>
          </li>
        ) : (
          <li
            key={`pager-item-${index}`}
            className={sc('list-item', {
              'list-item-active': this.current === item
            })}
            onClick={this.onClickItem.bind(this, item)}
          >
            {item}
          </li>
        )
      )
  }
  render() {
    const { current, total, visibleQuickJumper, className, style } = this.props
    return (
      <div className={classes(sc('wrapper'), className)} style={style}>
        <span
          className={sc('prev', { disabled: current === 1 })}
          onClick={this.onClickItem.bind(this, current! - 1)}
        >
          <Icon name="left" />
        </span>
        <ul className={sc('list')}>{this.items}</ul>
        <span
          className={sc('next', { disabled: current === total })}
          onClick={this.onClickItem.bind(this, current! + 1)}
        >
          <Icon name="right" />
        </span>
        {visibleQuickJumper && (
          <span className={sc('quick-jump')}>
            跳至
            <Input
              className={sc('input-page')}
              type="text"
              onEnter={this.onInputEnter.bind(this)}
            />
            页
          </span>
        )}
      </div>
    )
  }
}

export default Pager
