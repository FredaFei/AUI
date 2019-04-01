import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import './style'

export interface IProps {
  tab: React.ReactNode
  key?: string
  active?: boolean
  className?: string
  style?: React.CSSProperties
}
const componentName = 'TabPane'
class TabPane extends React.Component<IProps> {
  public static propTypes = {
    tab: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
  }
  renderPane = () => {
    const { className, style, active, key, children, ...rest } = this.props
    const styles = Object.assign({}, { ...style })
    const classes = classNames(componentName, [className], {
      active
    })
    return (
      <li
        data-role="tabPane"
        key={key}
        className={classes}
        style={styles}
        {...rest}
      >
        {children}
      </li>
    )
  }
  render() {
    return this.renderPane()
  }
}
export default TabPane
