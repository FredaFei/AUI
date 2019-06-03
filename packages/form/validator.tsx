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
  validator?: {
    validate: (value: string) => Promise<void>
  }
}
interface OneError {
  message: string
  promise?: Promise<void>
}
export const noErrors = (value: any) => {
  return Object.values(value).length === 0
}
const validator = (formValue: FormValue, rules: rules,callback:(errors:any)=>any) => {
  const result: any = {}
  const addErrors = (key: string, error: OneError) => {
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(error)
  }
  rules.map(r => {
    let value = formValue[r.key]
    if (r.validator) {
      const promise = r.validator.validate(value)
      addErrors(r.key, { message: '用户名已存在', promise })
    }
    if (isEmpty(value) && r.required) {
      addErrors(r.key, { message: `${r.label}不能为空` })
    }
    if (!isEmpty(value) && value.length < r.minLength!) {
      addErrors(r.key, { message: `${r.label}的最小长度为${r.minLength!}` })
    }
    if (!isEmpty(value) && value.length > r.maxLength!) {
      addErrors(r.key, {
        message: `${r.label}的最大长度为${r.maxLength!}`
      })
    }
    if (!isEmpty(value) && r.pattern && r.pattern.test(value)) {
      addErrors(r.key, { message: `${r.label}的格式不正确` })
    }
  })

  console.log(result)
  console.log(flat(Object.values(result))
  .filter(i => i.promise)
  .map(i=> i.promise)
  )
  const x = ()=>{
    const newErrors = flat(Object.keys(result))
      // key:string
      // result[key]: [{message,promise}]
      .map(key => [key, result[key].map((i: OneError) => i.message)])
    console.log(fromEntries(newErrors))
    callback(fromEntries(newErrors))
  }
  
  Promise.all(flat(Object.values(result))
      .filter(i => i.promise)
      .map(i => i.promise)
  ).then(x,x)
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

function fromEntries(array:any[]) {
  const result = {}
  array.forEach(item=>{
    result[item[0]] = item[1]
  })
  return result
}
export default validator
