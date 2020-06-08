import validator, {noErrors} from '../validator'

describe('测试 Validator 以下行为', () => {
  it('基本验证', () => {
    const formData = {
      username: '张三',
      password: '123'
    }
    const rules = [
      {key: 'username', required: true, label: '用户名'},
      {key: 'password', required: true, label: '密码'}
    ]

    validator(formData, rules, (errors: any) => {
      expect(noErrors(errors)).toEqual(true)
    })
  })
  it('基本验证，是否必填', () => {
    const formData = {
      username: '',
      password: ''
    }
    const rules = [
      {key: 'username', required: true, label: '用户名'},
      {key: 'password', required: true, label: '密码'}
    ]

    validator(formData, rules, (errors: any) => {
      expect(noErrors(errors)).toEqual(false)
      expect(Object.keys(errors).length).toEqual(2)
      expect(errors.usename[0]).toEqual('用户名不能为空')
      expect(errors.usename.length).toEqual(1)
      expect(errors.password.length).toEqual(1)
      expect(errors.password[0]).toEqual('密码不能为空')

    })
  })
  it('基本验证，最小长度', () => {
    const formData = {
      password: '123'
    }
    const rules = [
      {key: 'password', required: true, label: '密码'},
      {key: 'password', minLength: 6, label: '密码'},
    ]

    validator(formData, rules, (errors: any) => {
      expect(noErrors(errors)).toEqual(false)
      expect(Object.keys(errors).length).toEqual(1)
      expect(errors.password.length).toEqual(1)
      expect(errors.password[0]).toEqual('密码的最小长度为6')
    })
  })
  it('基本验证，最大长度', () => {
    const formData = {
      password: '1234567'
    }
    const rules = [
      {key: 'password', required: true, label: '密码'},
      {key: 'password', maxLength: 6, label: '密码'},
    ]
    validator(formData, rules, (errors: any) => {
      expect(noErrors(errors)).toEqual(false)
      expect(Object.keys(errors).length).toEqual(1)
      expect(errors.password.length).toEqual(1)
      expect(errors.password[0]).toEqual('密码的最大长度为6')
    })
  })
  it('基本验证，自定义数据格式', () => {
    const formData = {
      password: '~123456'
    }
    const rules = [
      {key: 'password', required: true, label: '密码'},
      {key: 'password', pattern: /^[a-zA-Z0-9]+$/, label: '密码'},
      {key: 'password', maxLength: 6, label: '密码'},
    ]
    validator(formData, rules, (errors: any) => {
      expect(noErrors(errors)).toEqual(false)
      expect(Object.keys(errors).length).toEqual(1)
      expect(errors.password.length).toEqual(2)
      expect(errors.password[0]).toEqual('密码的格式不正确')
      expect(errors.password[1]).toEqual('密码的最大长度为6')
    })
  })
  it('基本验证，自定义验证器', () => {
    const formData = {
      password: '~1234',
      password2: '123456',
    }
    const baseRules = [
      {key: 'password', required: true, label: '密码'},
      {key: 'password', minLength: 6, label: '密码'},
      {key: 'password', pattern: /^[a-zA-Z0-9]+$/, label: '密码'},
      {key: 'password2', required: true, label: '确认密码'},
      {key: 'password2', minLength: 6, label: '确认密码'},
      {key: 'password2', pattern: /^[a-zA-Z0-9]+$/, label: '确认密码'}
    ]
    const rules1 = [...baseRules,{
      key: 'password2',
      validator: (value: string) => {
        if (value !== formData['password']) {
          return '两次的密码不一致'
        }
        return ''
      },
      label: '确认密码'
    }]
    validator(formData, rules1, (errors: any) => {
      expect(noErrors(errors)).toEqual(false)
      expect(Object.keys(errors).length).toEqual(2)
      expect(errors.password.length).toEqual(2)
      expect(errors.password[0]).toEqual('密码的最小长度为6')
      expect(errors.password[1]).toEqual('密码的格式不正确')
      expect(errors.password2.length).toEqual(1)
      expect(errors.password2[0]).toEqual('两次的密码不一致')
    })
    const formData2 = {
      password: '123456',
      password2: '123456',
    }
    const rules2 = [...baseRules,{
      key: 'password2',
      validator: (value: string) => {
        if (value !== formData2['password']) {
          return '两次的密码不一致'
        }
        return ''
      },
      label: '确认密码'
    }]
    validator(formData2, rules2, (errors: any) => {
      expect(noErrors(errors)).toEqual(false)
      expect(Object.keys(errors).length).toEqual(0)
    })
  })
  it('基本验证，自定义异步验证器', () => {
    const users = ['12345678999', '12345678990']

    function checkPhone(
      value: string,
      success: () => void,
      fail: (message: string) => void
    ) {
      setTimeout(() => {
        if (!users.includes(value)) {
          success()
        } else {
          fail('该手机号已被注册')
        }
      }, 100)
    }

    const rules = [
      {key: 'phone', required: true, label: '手机号'},
      {key: 'phone', pattern: /^1\d{10}$/, label: '手机号'},
      {
        key: 'phone',
        checkPhone: (value: string) => {
          return new Promise<string>((resolve, reject) => {
            checkPhone(value, ()=>resolve(), (message: string) => reject(message))
          })
        },
        label: '确认密码'
      }
    ]
    validator({phone: '12345678900'}, rules, (errors: any) => {
      expect(noErrors(errors)).toEqual(true)
      expect(Object.keys(errors).length).toEqual(0)
    })
    validator({phone: '12345678990'}, rules, (errors: any) => {
      expect(noErrors(errors)).toEqual(false)
      expect(Object.keys(errors).length).toEqual(1)
      expect(errors.phone.length).toEqual(1)
      expect(errors.phone[0]).toEqual('该手机号已被注册')
    })
  })
})