import { FormValue } from './form'

function isEmpty(value: any) {
  return value === '' || value === null || value === undefined
}

type rules = Array<FormRules>
interface FormRules {
  key: string
  label: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
}
export const noErrors = (value: any) => {
  return Object.values(value).length === 0
}
const validator = (formValue: FormValue, rules: rules) => {
  const result: any = {}
  const addErrors = (key: string, message: string) => {
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(message)
  }
  rules.map(r => {
    let value = formValue[r.key]
    if (isEmpty(value) && r.required) {
      addErrors(r.key, `${r.label}的值不能为空`)
    }
    if (!isEmpty(value) && value.length < r.minLength!) {
      addErrors(r.key, `${r.label}的最小长度为${r.minLength!}`)
    }
    if (!isEmpty(value) && value.length > r.maxLength!) {
      addErrors(r.key, `${r.label}的最大长度为${r.maxLength!}`)
    }
    if (!isEmpty(value) && r.pattern && r.pattern.test(value)) {
      addErrors(r.key, `${r.label}的格式不正确`)
    }
  })
  return result
}
export default validator
