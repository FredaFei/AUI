import * as React from 'react'
// import * as PropTypes from 'prop-types'
import { ReactFragment, Fragment, ReactNode } from 'react'
import classes, { createScopedClasses } from '../utils/classnames'
import Input from '../input/input'
import './style'

const componentName = 'Form'
const sc = createScopedClasses(componentName)

interface IFormFieldInput {
  type: 'text' | 'password' | 'number'
}
export interface FormValue {
  [K: string]: string
}
export interface FormErrors {
  [K: string]: string[]
}
export interface FormFields {
  name: string
  label: string
  input: (() => ReactNode) | IFormFieldInput
}
type Layout = 'horizontal'|'inline'|'vertical'

interface IProps extends IStyledProps {
  value: FormValue
  errors: FormErrors
  fields: FormFields[]
  buttons: ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormValue) => void
  layout?: Layout
  errorDisplayMode?: 'first' | 'all'
  labelWidth?: string
}
/**
 * TODO:
 * 1.必填和非必填字段样式
 * 2.input 组件 type类型范围
 */

const Form: React.FunctionComponent<IProps> = props => {
  const onInputChange = (
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onChange({ ...props.value, [name]: e.target.value })
  }
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit && props.onSubmit(e)
  }
  const renderInput = (field: FormFields) => {
    return field.input instanceof Function ? (
      field.input()
    ) : (
      <Input
        value={props.value[field.name]}
        type={field.input.type}
        onChange={onInputChange.bind(null, field.name)}
      />
    )
  }
  const renderButtons = () => {
    return <div className={sc('item')}>{props.buttons}</div>
  }
  const displayError = (errors: any[]) => {
    return props.errorDisplayMode === 'first' ? errors[0] : errors.join()
  }
  const verticalLayout = (
    <Fragment>
      {props.fields.map(f => (
        <div className={sc('item', 'vertical')} key={f.name}>
          <label className={sc('item-label', 'item-label-require')}>
            {f.label}
          </label>
          {renderInput(f)}
          {props.errors[f.name] && (
            <div className={sc('item-error')}>
              {displayError(props.errors[f.name])}
            </div>
          )}
        </div>
      ))}
      {renderButtons()}
    </Fragment>
  )
  const inlineLayout = (
    <Fragment>
      {props.fields.map(f => (
        <div className={sc('item')} key={f.name}>
          <label className={sc('item-label', 'item-label-require')}>
            {f.label}
          </label>
          <div className={sc('item-input-error')}>
            {renderInput(f)}
            {props.errors[f.name] && (
              <div className={sc('item-error')}>
                {displayError(props.errors[f.name])}
              </div>
            )}
          </div>
        </div>
      ))}
      {renderButtons()}
    </Fragment>
  )
  const horizontalLayout = (
    <table>
      <tbody>
        {props.fields.map(f => (
          <Fragment key={f.name}>
            <tr>
              <td
                style={{ width: props.labelWidth || '6em' }}
                className={sc('item-label', 'item-label-require')}
              >
                {f.label}
              </td>
              <td>{renderInput(f)}</td>
            </tr>
            <tr>
              <td />
              <td className={sc('item-error')}>
                {props.errors[f.name] && displayError(props.errors[f.name])}
              </td>
            </tr>
          </Fragment>
        ))}
        <tr>
          <td />
          <td colSpan={2}>{renderButtons()}</td>
        </tr>
      </tbody>
    </table>
  )
  const layoutMap = () => {
    const map = {
      vertical: verticalLayout,
      inline: inlineLayout,
      horizontal: horizontalLayout
    }
    return map[props.layout!]
  }
  return (
    <form
      className={classes(sc('wrapper', props.layout!),props.className)}
      onSubmit={onFormSubmit}
    >
      {layoutMap()}
    </form>
  )
}

export default Form

Form.displayName = componentName
Form.defaultProps = {
  layout: 'horizontal',
  errorDisplayMode: 'first'
}
Form.propTypes = {}