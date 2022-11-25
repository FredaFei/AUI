import * as React from 'react'
import {useState, useReducer} from 'react'
import Checkbox from '../packages/checkbox/checkbox'

import content1 from "./markdown/checkbox-demo-1.md";
import content2 from "./markdown/checkbox-demo-2.md";
import content3 from "./markdown/checkbox-demo-3.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/checkbox-doc.md";

const initialState = {selected: [], checkAll: false, indeterminate: false}
const groups = [
  {name: 'fruit', value: 'apple'},
  {name: 'fruit', value: 'peach'},
  {name: 'fruit', value: 'orange'},
  {name: 'fruit', value: 'pear'},
  {name: 'fruit', value: 'banana'}
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

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'add':
      const selected1 = [...state.selected, action.value!]
      return {
        selected: selected1,
        checkAll: selected1.length === groups.length,
        indeterminate:
          selected1.length! < groups.length
      }
      break
    case 'remove':
      const selected2 = state.selected.filter(i => i !== action.value)
      return {
        selected: selected2,
        checkAll: selected2.length === groups.length,
        indeterminate:
          selected2.length! < groups.length && selected2.length! !==0
      }
      break
    case 'toggleAll':
      const result: string[] = []
      groups.forEach(i => result.push(i.value))
      return {
        selected: action.checkAll ? result : [],
        checkAll: action.checkAll!,
        indeterminate: false
      }
      break
    default:
      return state
      break
  }
}

export default function (props: any) {
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
    dispatch({value, type: state.selected.includes(value) ? 'remove' : 'add'})
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
      <h3>基础应用</h3>
      <div className="exp-section">
        <Checkbox onChange={onChange1} checked={checked1}>apple</Checkbox>
        <Checkbox onChange={onChange2} checked={checked2}>apple</Checkbox>
        <CodeBox content={content1}/>
      </div>
      <h3>全选</h3>
      <div className="exp-section">
        <Checkbox
          indeterminate={state.indeterminate}
          onChange={onCheckAllChange}
          checked={state.checkAll}
        >全选水果</Checkbox>
        <div style={{padding: '10px 0'}}>
          {groups.map(i => (
            <div>
              <Checkbox
              key={i.value}
              value={i.value}
              checked={state.selected.includes(i.value)}
              onChange={onChange3}
              name={i.name}
            >{i.value}</Checkbox>
            </div>
          ))}
        </div>
        <p>当前选中的水果: {JSON.stringify(state.selected)}</p>
        <CodeBox content={content2}/>
      </div>
      <h3>不可用状态</h3>
      <div className="exp-section">
        <Checkbox checked onChange={onChange4} disabled>apple</Checkbox>
        <CodeBox content={content3}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}
