import * as React from 'react'
import * as PropTypes from 'prop-types'
// import { ReactFragment, Fragment } from 'react'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'Form'
const sc = createScopedClasses(componentName)

export interface FormValue {
  [K: string]: string
}
interface IProps extends IStyledProps {
  value: FormValue
  fields: Array<{ name: string; label: string; input: { type: string } }>
  buttons: any
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
