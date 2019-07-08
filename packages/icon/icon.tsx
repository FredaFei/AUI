import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, {createScopedClasses} from '../utils/classnames'
import './importSvgs'
import './style'

interface IProps extends IStyledProps {
  name: string
  rotate?: number
  spin?: boolean
  onClick?: () => void
}

const componentName = 'Icon'
const sc = createScopedClasses(componentName)

const Icon: React.FunctionComponent<IProps> = (props: IProps) => {
  const {name, style, rotate, spin, className, onClick, ...rest} = props
  const wrapClasses = classes(sc(''), [spin || (name === 'loading' && 'icon-spin')], className)
  const styles = Object.assign(
    {},
    style,
    rotate && {
      transform: `rotate(${rotate}deg)`,
      transition: `transform .2s ease`
    }
  )
  return (
    <svg className={wrapClasses} style={styles} onClick={onClick} {...rest}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  )
}
Icon.displayName = componentName
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}
export default Icon
