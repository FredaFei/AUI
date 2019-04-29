import { FormValue } from './form'

type rules = Array<FormRules>
interface FormRules {
  key: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
}

const validator = (formValue: FormValue, rules: rules) => {
  const result:string = []
  rules.map(r => {
    if (!result[r.key]) { result[r.key] = {}}
    if (
      r.required &&
      (formValue[r.key] === '' ||
        formValue[r.key] === null ||
        formValue[r.key] === undefined)
    ) {
      // result.push({ r.key: `${r.key}的值不能为空`})
    }
    if (
      !(
        formValue[r.key] === '' ||
        formValue[r.key] === null ||
        formValue[r.key] === undefined
      ) &&
      formValue[r.key].length < r.minLength!
    ) {
      // result[r.key] = `${r.key}的最小长度为${r.minLength!}`
    }
  })
  return result
}
export default validator
