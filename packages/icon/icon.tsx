import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import './importSvgs'
import './style'

interface Props extends StyledProps {
  name: string
  rotate?: number
  spin?: boolean
  onClick?: () => void
}

const componentName = 'Icon'
const sc = createScopedClasses(componentName)

const Icon: React.FunctionComponent<Props> = props => {
  const {name, style, rotate, spin, className, onClick, ...rest} = props
  const wrapClasses = classes(sc('', {'spin': spin || name === 'loading'}), className)
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
export default Icon
