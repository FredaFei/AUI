import * as React from 'react'
// import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'Checkbox'
const sc = createScopedClasses(componentName)
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean
}
const Checkbox: React.FunctionComponent<IProps> = props => {
  const {
    indeterminate,
    disabled,
    checked,
    children,
    className,
    ...rest
  } = props
  return (
    <label className={classes(sc('wrapper', { disabled, checked }), className)}>
      <span className={sc('input', { indeterminate })}>
        <input
          type="checkbox"
          className={sc('')}
          checked={checked}
          {...rest}
        />
      </span>
      <span className={sc('label')}>{children}</span>
    </label>
  )
}
export default Checkbox
