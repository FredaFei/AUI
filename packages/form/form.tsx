import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ReactFragment, Fragment, ReactNode } from 'react'
import classes, { createScopedClasses } from '../utils/classnames'
import Input from '../input/input'
import './style'

const componentName = 'Form'
const sc = createScopedClasses(componentName)

interface IFormFieldInput {
  type: 'text' | 'password' | 'textarea' | 'number'
}
export interface FormValue {
  [K: string]: string
}
export interface FormErrors {
  [K: string]: any
}
export interface FormFields {
  name: string
  label: string
  input: (() => ReactNode) | IFormFieldInput
}
interface IProps extends IStyledProps {
  layout?: 'vertical' | 'inline' | 'horizontal'
  value: FormValue
  errors: FormErrors
  fields: FormFields[]
  buttons: ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormValue) => void
  errorDisplayMode?: 'first' | 'all'
  labelWidth?: string
}
/**
 * TODO:
 * 1.必填和非必填字段样式
 */
class Form extends React.Component<IProps> {
  static displayName = componentName
  static defaultProps = {
    layout: 'horizontal',
    errorDisplayMode: 'first'
  }
  static propTypes = {
    value: PropTypes.object.isRequired,
    fields: PropTypes.array.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }
  onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange({ ...this.props.value, [name]: e.target.value })
  }
  onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { onSubmit } = this.props
    onSubmit && onSubmit(e)
  }
  renderInput = (field: FormFields) => {
    return typeof field.input === 'function' ? (
      field.input()
    ) : (
      <Input
        value={this.props.value[field.name]}
        type="text"
        onChange={this.onInputChange.bind(null, field.name)}
      />
    )
  }
  renderButtons = () => {
    return <div className={sc('item')}>{this.props.buttons}</div>
  }
  verticalLayout = () => {
    const { errors, fields } = this.props
    return (
      <Fragment>
        {fields.map(f => (
          <div className={sc('item', 'vertical')} key={f.name}>
            <label className={sc('item-label', 'item-label-require')}>
              {f.label}
            </label>
            {this.renderInput(f)}
            {errors[f.name] && (
              <div className={sc('item-error')}>{errors[f.name][0]}</div>
            )}
          </div>
        ))}
        {this.renderButtons()}
      </Fragment>
    )
  }
  inlineLayout = () => {
    const { errors, fields } = this.props
    return (
      <Fragment>
        {fields.map(f => (
          <div className={sc('item')} key={f.name}>
            <label className={sc('item-label', 'item-label-require')}>
              {f.label}
            </label>
            <div className={sc('item-input-error')}>
              {this.renderInput(f)}
              {errors[f.name] && (
                <div className={sc('item-error')}>{errors[f.name][0]}</div>
              )}
            </div>
          </div>
        ))}
        {this.renderButtons()}
      </Fragment>
    )
  }
  horizontalLayout = () => {
    const { errors, fields } = this.props
    return (
      <table>
        <tbody>
          {fields.map(f => (
            <Fragment key={f.name}>
              <tr>
                <td
                  style={{ width: this.props.labelWidth || '6em' }}
                  className={sc('item-label', 'item-label-require')}
                >
                  {f.label}
                </td>
                <td>{this.renderInput(f)}</td>
              </tr>
              <tr>
                <td />
                <td className={sc('item-error')}>
                  {errors[f.name] &&
                    (this.props.errorDisplayMode === 'first'
                      ? errors[f.name][0]
                      : errors[f.name].join(''))}
                </td>
              </tr>
            </Fragment>
          ))}
          <tr>
            <td />
            <td colSpan={2}>{this.renderButtons()}</td>
          </tr>
        </tbody>
      </table>
    )
  }
  layoutMap = (key: string) => {
    const map = {
      vertical: this.verticalLayout(),
      inline: this.inlineLayout(),
      horizontal: this.horizontalLayout()
    }
    return map[key]
  }
  render() {
    return (
      <form
        className={classes(sc('wrapper', this.props.layout))}
        onSubmit={this.onFormSubmit}
      >
        {this.layoutMap(this.props.layout!)}
      </form>
    )
  }
}
export default Form
