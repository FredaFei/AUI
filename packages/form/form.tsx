import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ReactFragment } from 'react'
import classes, { createScopedClasses } from '../utils/classnames'
import Input from '../input/input'
import './style'

const componentName = 'Form'
const sc = createScopedClasses(componentName)

export interface FormValue {
  [K: string]: string
}
export interface FormErrors {
  [K: string]: any
}
type Layout = 'vertical' | 'inline' | 'horizontal'
interface IProps extends IStyledProps {
  layout?: Layout
  value: FormValue
  errors: FormErrors
  fields: Array<{ name: string; label: string; input: { type: string } }>
  buttons: ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormValue) => void
}
class Form extends React.Component<IProps> {
  static displayName = componentName
  static defaultProps = {
    layout: 'vertical'
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
  renderInput = (field)=>{
    return (
      <Input value={this.props.value[field.name]} type={field.input.type} 
          onChange={this.onInputChange.bind(null, field.name)} />
    )
  }
  renderButtons= ()=>{
    return <div>{this.props.buttons}</div>
  }
  verticalLayout = () => {
    const { value, errors, fields } = this.props
    return <div className="item">
      {fields.map(f => (
        <div key={f.name}>
          <Input
              label={f.label}
              labelPosition="top"
              error={errors[f.name]&&errors[f.name][0]}
              errorPosition="bottom"
              type={f.input.type}
              value={value[f.name]}
              onChange={this.onInputChange.bind(null, f.name)} 
            />
        </div>
        ))
      }
      {this.renderButtons()}
    </div>
  }
  inlineLayout = () => {
    return 'inlineLayout'
  }
  horizontalLayout = () => {
    const {errors, fields } = this.props
    return (
      <table>
        <tbody>
          {fields.map(f => (
            <tr key={f.name}>
              <td>
                <label>{f.label}</label>
              </td>
              <td>{this.renderInput(f)}</td>
              <td>
                {errors[f.name] && (
                  <span className={sc('error')}>{errors[f.name][0]}</span>
                )}
              </td>
            </tr>
          }
          <tr>
            <td></td>
            <td>{this.renderButtons()}</td>
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
      <form className={classes(sc(''))} onSubmit={this.onFormSubmit}>
        {this.layoutMap(this.props.layout)}
      </form>
    )
  }
}
export default Form
