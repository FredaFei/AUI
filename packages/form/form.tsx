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
}
class Form extends React.Component<IProps> {
  static displayName = componentName
  static defaultProps = {
    layout: 'horizontal'
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
          <div key={f.name}>
            <label>{f.label}</label>
            {this.renderInput(f)}
            <div style={{ lineHeight: '22px', height: '22px' }}>
              {errors[f.name] && errors[f.name][0]}
            </div>
          </div>
        ))}
        {this.renderButtons()}
      </Fragment>
    )
  }
  // inlineLayout = () => {
  //   const { value, errors, fields } = this.props
  //   return (
  //     <Fragment>
  //       {fields.map(f => (
  //         <div className={sc('item')} key={f.name}>
  //           <Input
  //             label={f.label}
  //             labelPosition="left"
  //             error={errors[f.name] && errors[f.name][0]}
  //             errorPosition="bottom"
  //             value={value[f.name]}
  //             onChange={this.onInputChange.bind(null, f.name)}
  //           />
  //         </div>
  //       ))}
  //       {this.renderButtons()}
  //     </Fragment>
  //   )
  // }
  // horizontalLayout = () => {
  //   const { errors, fields } = this.props
  //   return (
  //     <table>
  //       <tbody>
  //         {fields.map(f => (
  //           <Fragment>
  //             <tr key={f.name}>
  //               <td>
  //                 <label>{f.label}</label>
  //               </td>
  //               <td>{this.renderInput(f)}</td>
  //             </tr>
  //             <tr>
  //               <td />
  //               <td style={{ lineHeight: '22px', height: '22px' }}>
  //                 {errors[f.name] && (
  //                   <span className={sc('error')}>{errors[f.name][0]}</span>
  //                 )}
  //               </td>
  //             </tr>
  //           </Fragment>
  //         ))}
  //         <tr>
  //           <td />
  //           <td>{this.renderButtons()}</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   )
  // }
  layoutMap = (key: string) => {
    const map = {
      vertical: this.verticalLayout()
      // inline: this.inlineLayout(),
      // horizontal: this.horizontalLayout()
    }
    return map[key]
  }
  render() {
    return (
      <form
        className={classes(
          sc('wrapper', [this.props.layout === 'inline' && 'inline'])
        )}
        onSubmit={this.onFormSubmit}
      >
        {this.layoutMap(this.props.layout!)}
      </form>
    )
  }
}
export default Form
