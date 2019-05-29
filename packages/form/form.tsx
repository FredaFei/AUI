import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ReactFragment } from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

import './style'

const componentName = 'Form'
const sc = createScopedClasses(componentName)

export interface FormValue {
  [K: string]: string
}
export interface FormErrors {
  [K: string]: any
}
interface IProps extends IStyledProps {
  value: FormValue
  errors: FormErrors
  fields: Array<{ name: string; label: string; input: { type: string } }>
  buttons: ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormValue) => void
}
class Form extends React.Component<IProps>{
  static displayName = componentName;
  static propTypes = {
    value: PropTypes.object.isRequired,
    fields: PropTypes.array.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }
  onInputChange=(
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.props.onChange({ ...this.props.value, [name]: e.target.value })
  }
  onFormSubmit=(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  const { onSubmit} = this.props
    onSubmit&&onSubmit(e)
  }
  render(){
    const { value, errors,fields, buttons, onChange, onSubmit, ...rest } = this.props
    return (
      <form className={classes(sc(''))} {...rest} onSubmit={this.onFormSubmit}>
        {fields.map(f => (
          <div key={f.name}>
            <label htmlFor="">{f.label}</label>
            <input
              type={f.input.type}
              value={value[f.name]}
              onChange={this.onInputChange.bind(null, f.name)}
            />
            {errors[f.name] && (
              <span className={sc('error')}>{errors[f.name][0]}</span>
            )}
          </div>
        ))}
        <div>{buttons}</div>
      </form>
    )
  }
}
export default Form
