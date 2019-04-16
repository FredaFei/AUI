import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

interface IProps {
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
  children?: any
}
const componentName = 'ButtonGroup'
const sc = createScopedClasses(componentName)
const ButtonGroup: React.SFC<IProps> = (props: IProps) => {
  const { style, className, children } = props
  const styles = Object.assign({}, { ...style })
  const wrapClasses = classes(sc(), className)
  return (
    <div data-role={componentName} style={styles} className={wrapClasses}>
      {children}
    </div>
  )
}
ButtonGroup.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
}
export default ButtonGroup
