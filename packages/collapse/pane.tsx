import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import './style'

export interface IProps {
  header: React.ReactNode
  key: string
  active?: boolean
  visibleIcon?: boolean
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}
// const componentName = 'Pane'
class Pane extends React.Component<IProps> {
  public static defaultProps = {
    visibleIcon: true,
    disabled: false,
    active: false
  }
  public static propTypes = {
    key: PropTypes.string,
    visibleIcon: PropTypes.bool,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
  }
  renderPane = () => {
    const { className, style, children } = this.props
    const styles = Object.assign({}, { ...style })
    const classes = classNames('', ['content-inner', className])
    return (
      <div className={classes} style={styles}>
        {children}
      </div>
    )
  }
  render() {
    return this.renderPane()
  }
}
export default Pane
