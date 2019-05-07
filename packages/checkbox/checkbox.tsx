import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import Icon from '../icon/icon'
import './style'

const componentName = 'Checkbox'
const sc = createScopedClasses(componentName)
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean
}
const Checkbox: React.FunctionComponent<IProps> = props => {
  const { indeterminate, disabled, children, className, ...rest } = props
  return (
    <label className={sc('wrapper', { disabled })}>
      <div className={classes(className, sc('content'))}>
        <span className={sc('input', { indeterminate })}>
          <input type="checkbox" className={sc('')} disabled {...rest} />
        </span>
        <span className={sc('label')}>{children}</span>
      </div>
    </label>
  )
}
export default Checkbox
