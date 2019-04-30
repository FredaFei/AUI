import * as React from 'react'
// import * as PropTypes from 'prop-types'
// import { ReactFragment } from 'react'
// import Button from '../button/button'
import classes, { createScopedClasses } from '../utils/classnames'

import './style'

const componentName = 'Input'
const sc = createScopedClasses(componentName)

export interface IProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  labelPosition?: 'left' | 'top'
  error?: string
  errorPosition?: 'right' | 'bottom'
  size?: 'big' | 'small'
  type?:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'date'
    | 'datetime'
    | 'datetime-local'
    | 'search'
    | 'tel'
    | 'time'
    | 'url'
}

const Input: React.FunctionComponent<IProps> = props => {
  const {
    label,
    labelPosition,
    error,
    errorPosition,
    size,
    type,
    style,
    className,
    ...rest
  } = props
  return (
    <div className={classes(sc('wrapper'), className)}>
      {label && <div className={sc('label', 'labelPosition')}>{label}</div>}
      <div className={sc('content', 'size')}>
        <input type={type} style={style} {...rest} />
      </div>
      {error && <div className={sc('error', errorPosition)}>{error}</div>}
    </div>
  )
}

Input.displayName = componentName
Input.propTypes = {}

export default Input
