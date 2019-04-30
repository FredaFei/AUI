import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'

import './style'

const componentName = 'Input'
const sc = createScopedClasses(componentName)

export interface IProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  labelPosition?: 'left' | 'top'
  error?: string
  length?: number | string
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
  const class1 = {
    'label-left': labelPosition === 'left',
    'label-top': labelPosition === 'top'
  }
  const class2 = {
    'error-bottom': errorPosition === 'bottom',
    'label-right': errorPosition === 'right'
  }
  return (
    <div className={classes(sc('wrapper', class1, size), className)}>
      {label && <div className={sc('label')}>{label}</div>}
      <div className={sc('inputAndError')}>
        <div className={sc('content')}>
          <input className={sc('')} type={type} style={style} {...rest} />
        </div>
        {error && <span className={sc('error', class2)}>{error}</span>}
      </div>
    </div>
  )
}

Input.displayName = componentName
Input.propTypes = {}

export default Input
