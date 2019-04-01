import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils/'
import './style'

interface IProps {
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
  children?: any
}
const componentName = 'ButtonGroup'
const ButtonGroup: React.SFC<IProps> = (props: IProps) => {
  const { style, className, children } = props
  const styles = Object.assign({}, { ...style })
  const classes = classNames(componentName, [className])
  return (
    <div data-role={componentName} style={styles} className={classes}>
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
