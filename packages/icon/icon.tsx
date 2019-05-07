import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import './svg.js'
import './style'

interface IProps {
  name: string
  style?: React.CSSProperties
  rotate?: number
  spin?: boolean
  className?: string
  onClick?: React.MouseEventHandler
}
const componentName = 'Icon'
const sc = createScopedClasses(componentName)

const Icon: React.SFC<IProps> = (props: IProps) => {
  const { name, style, rotate, spin, className, onClick } = props
  const wrapClasses = classes(sc(), [spin || (name === 'loading' && 'icon-spin')], className)
  const styles = Object.assign(
    {},
    style,
    rotate && {
      transform: `rotate(${rotate}deg)`,
      transition: `transform .2s ease`
    }
  )
  return (
    <svg className={wrapClasses} style={styles}>
      <use xlinkHref={`#i-${name}`} onClick={onClick} />
    </svg>
  )
}
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}
Icon.displayName = componentName
export default Icon
