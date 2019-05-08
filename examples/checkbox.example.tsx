import * as React from 'react'
import { useState, useReducer } from 'react'
import Checkbox from '../packages/checkbox/checkbox'

const initialState = { selected: [], checkAll: false, indeterminate: false }
const groups = [
  { name: 'fruit', value: 'apple' },
  { name: 'fruit', value: 'peach' },
  { name: 'fruit', value: 'orange' },
  { name: 'fruit', value: 'banana' },
  { name: 'fruit', value: 'pear' }
]
interface IState {
  selected: string[]
  checkAll: boolean
  indeterminate: boolean
}
interface IAction {
  type: string
  value?: string
  checkAll?: boolean
}

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'add':
      const selected1 = [...state.selected, action.value]
      return {
        selected: selected1,
        checkAll: selected1.length === groups.length,
        indeterminate:
          selected1.length && selected1.length < groups.length
      }
      break
    case 'remove':
      const selected2 = state.selected.filter(i => i !== action.value)
      return {
        selected: selected2,
        checkAll: selected2.length === groups.length,
        indeterminate:
          selected2.length && selected2.length < groups.length
      }
      break
    case 'toggleAll':
      const result:string[] = []
      groups.forEach(i => result.push(i.value))
      return {
        selected: action.checkAll ? result : [],
        checkAll: action.checkAll,
        indeterminate: false
      }
      break
    default:
      return state
      break
  }
}

export default function(props: any) {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange1 = (e: React.FormEvent) => {
    setChecked1((e.target as HTMLInputElement).checked)
  }
  const onChange2 = (e: React.FormEvent) => {
    setChecked2((e.target as HTMLInputElement).checked)
  }
  const onChange3 = (e: React.FormEvent) => {
    const value = (e.target as HTMLInputElement).value
    dispatch({ value, type: state.selected.includes(value) ? 'remove' : 'add' })
  }
  const onCheckAllChange = (e: React.FormEvent) => {
    const checked = (e.target as HTMLInputElement).checked
    dispatch({
      type: 'toggleAll',
      checkAll: checked
    })
  }
  const onChange4 = () => {}
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Checkbox onChange={onChange1} checked={checked1}>
          apple
        </Checkbox>
        <Checkbox onChange={onChange2} checked={checked2}>
          apple
        </Checkbox>
      </div>
      <div className="exp-section">
        <h3>全部</h3>
        <Checkbox
          indeterminate={state.indeterminate}
          onChange={onCheckAllChange}
          checked={state.checkAll}
        >
          全选水果
        </Checkbox>
        <div>
          {groups.map(i => (
            <Checkbox
              key={i.value}
              value={i.value}
              checked={state.selected.includes(i.value)}
              onChange={onChange3}
              name={i.name}
            >
              {i.value}
            </Checkbox>
          ))}
        </div>
        <p>当前选中的水果: {JSON.stringify(state.selected)}</p>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
        <Checkbox checked onChange={onChange4} disabled>
          apple
        </Checkbox>
      </div>
    </div>
  )
}
