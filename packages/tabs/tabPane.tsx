import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import './style'

type TabPaneProps = {
  tab?: string
  key?: string
  active?: boolean
  className?: string
  style?: React.CSSProperties
}
type TabPaneState = {}
const componentName = 'TabPane'
class TabPane extends React.Component<TabPaneProps, TabPaneState> {
  public static defaultProps = {}
  public static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }
  constructor(props: TabPaneProps) {
    super(props)
  }

  renderPane = () => {
    const { className, style, active, children, ...rest } = this.props
    const styles = Object.assign({}, { ...style })
    const classes = classNames(componentName, [className], {
      active
    })
    return (
      <li data-role="tabPane" className={classes} style={styles} {...rest}>
        {children}
      </li>
    )
  }
  render() {
    return this.renderPane()
  }
}
export default TabPane
