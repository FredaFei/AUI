import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import './style'

const componentName = 'Radio'
const sc = createScopedClasses(componentName)

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  checked?: boolean
}

const Radio: React.FunctionComponent<Props> = props => {
  const {disabled, checked, children, className, ...rest} = props
  return (
    <label className={classes(sc('wrapper', {disabled, checked}), className)}>
      <span className={sc('input')}>
        <input type="radio" className={sc('')} disabled={disabled} {...rest} />
      </span>
      <span className={sc('label')}>{children}</span>
    </label>
  )
}
Radio.displayName = componentName
Radio.defaultProps = {
  checked: false
}
export default Radio
