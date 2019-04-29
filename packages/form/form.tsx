import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ReactFragment } from 'react'
import classes, { createScopedClasses } from '../utils/classnames'
import validator from './validator'
import './style'

const componentName = 'Form'
const sc = createScopedClasses(componentName)

export interface FormValue {
  [K: string]: string
}
interface IProps extends IStyledProps {
  value: FormValue
  fields: Array<{ name: string; label: string; input: { type: string } }>
  buttons: ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormValue) => void
}
const Form: React.FunctionComponent<IProps> = props => {
  const { value, fields, buttons, onChange, onSubmit, ...rest } = props
  const onInputChange = (
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({ ...value, [name]: e.target.value })
  }
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLength: 6 },
      { key: 'username', maxLength: 16 },
      { key: 'password', required: true },
      { key: 'password', minLength: 6 },
      { key: 'password', maxLength: 16 },
      { key: 'password', pattern: /^[a-zA-Z0-9]+$/ }
    ]
    const errors = validator(value, rules)
    console.log('errors')
    console.log(errors)
    // if (Object.keys(errors).length > 0) {
    //   return
    // }
    onSubmit(e)
  }
  return (
    <form className={classes(sc(''))} {...rest} onSubmit={onFormSubmit}>
      <div>
        {fields.map(f => (
          <div key={f.name}>
            <label htmlFor="">{f.label}</label>
            <input
              type={f.input.type}
              value={value[f.name]}
              onChange={onInputChange.bind(null, f.name)}
            />
          </div>
        ))}
      </div>
      <div>{buttons}</div>
    </form>
  )
}
Form.displayName = componentName
Form.propTypes = {}
export default Form
