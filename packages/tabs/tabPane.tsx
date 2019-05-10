import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'TabPane'
const sc = createScopedClasses(componentName)
export interface IProps extends IStyledProps {
  tab: React.ReactNode
  key?: string
  active?: boolean
  disabled?: boolean
}
class TabPane extends React.Component<IProps> {
  static displayName = componentName
  public static propTypes = {
    tab: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
  }
  renderPane = () => {
    const { className, style, active, key, children, ...rest } = this.props
    const paneClasses = classes(sc('pane-item', { active }), className)
    return (
      <li
        data-role="tabPane"
        key={key}
        className={paneClasses}
        style={style}
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
