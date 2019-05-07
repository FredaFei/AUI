import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes from '../utils/classnames'
import './style'

export interface IProps extends IStyledProps {
  header: React.ReactNode
  key: string
  active?: boolean
  visibleIcon?: boolean
  disabled?: boolean
}
const componentName = 'Pane'
class Pane extends React.Component<IProps> {
  static displayName = componentName;
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
    const wrapperClasses = classes(['content-inner', className])
    return (
      <div className={wrapperClasses} style={styles}>
        {children}
      </div>
    )
  }
  render() {
    return this.renderPane()
  }
}
export default Pane
