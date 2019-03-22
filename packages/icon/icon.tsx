import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils/'
import './svg.js'
import './style'

interface IIconProps {
  name: string
  style?: React.CSSProperties
  rotate?: number
  spin?: boolean
  className?: string
  onClick?: React.MouseEventHandler
}
const componentName = 'Icon'

const Icon: React.SFC<IIconProps> = (props: IIconProps) => {
  const { name, style, rotate, spin, className, onClick } = props
  const classes = classNames(componentName, [
    className,
    spin || name === 'loading' && 'icon-spin' 
  ])
  const styles = Object.assign(
    {},
    style,
    rotate && {
      transform: `rotate(${rotate}deg)`,
      transition: `transform .2s ease`
    }
  )
  return (
    <svg className={classes} style={styles}>
      <use xlinkHref={`#i-${name}`} onClick={onClick} />
    </svg>
  )
}
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}
export default Icon
