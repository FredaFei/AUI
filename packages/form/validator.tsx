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
  validator?: (value: string) => OneError
}
type OneError = string | Promise<string>

export const noErrors = (value: any) => {
  return Object.values(value).length === 0
}
const validator = (
  formValue: FormValue,
  rules: rules,
  callback: (errors: any) => void
) => {
  const result: any = {}
  const addErrors = (key: string, error: OneError) => {
    if (result[key]===undefined) {
      result[key] = []
    }
    result[key].push(error)
  }
  rules.map(r => {
    let value = formValue[r.key]
    if (r.validator) {
      const promise = r.validator(value)
      addErrors(r.key, promise)
    }
    if (isEmpty(value) && r.required) {
      addErrors(r.key, `${r.label}不能为空`)
    }
    if (!isEmpty(value) && value.length < r.minLength!) {
      addErrors(r.key, `${r.label}的最小长度为${r.minLength!}`)
    }
    if (!isEmpty(value) && value.length > r.maxLength!) {
      addErrors(r.key, `${r.label}的最大长度为${r.maxLength!}`)
    }
    if (!isEmpty(value) && r.pattern && !r.pattern.test(value)) {
      addErrors(r.key, `${r.label}的格式不正确`)
    }
  })

  const errors = Object.keys(result).map(k=>result[k].map((promise:OneError)=> [k,promise] ))
  const newPromises = flat(errors).map(([key,promiseOrString])=>(promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString))
          .then(()=>[key,undefined],reason=>[key,reason]))
  Promise.all(newPromises).then(results=>{
    console.log(results)
    callback(zip(results.filter(i=>i[1])))
  })
}

function flat(array: any[]) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i])
    } else {
      result.push(array[i])
    }
  }
  return result
}

function zip(list: Array<string[]>) {
  const result = {}
  list.map(([key,value])=>{
    result[key] = result[key] || []
    result[key].push(value)
  })
  return result
}
export default validator
