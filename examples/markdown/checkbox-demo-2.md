```html
<div>
  <Checkbox
    indeterminate={state.indeterminate}
    onChange={onCheckAllChange}
    checked={state.checkAll}
  >全选水果</Checkbox>
  <div>
    {groups.map(i => (
      <Checkbox
        key={i.value}
        value={i.value}
        checked={state.selected.includes(i.value)}
        onChange={onChange3}
        name={i.name}
      >{i.value}</Checkbox>
    ))}
  </div>
  <p>当前选中的水果: {JSON.stringify(state.selected)}</p>
</div>
```
```javascript
  import * as React from 'react'
  import { useState } from 'react'
  
  const groups = [
    {name: 'fruit', value: 'apple'},
    {name: 'fruit', value: 'peach'},
    {name: 'fruit', value: 'orange'},
    {name: 'fruit', value: 'pear'},
    {name: 'fruit', value: 'banana'}
  ]
  
  function reducer(state, action) {
    switch (action.type) {
      case 'add':
        const selected1 = [...state.selected, action.value]
        return {
          selected: selected1,
          checkAll: selected1.length === groups.length,
          indeterminate:
            selected1.length < groups.length
        }
        break
      case 'remove':
        const selected2 = state.selected.filter(i => i !== action.value)
        return {
          selected: selected2,
          checkAll: selected2.length === groups.length,
          indeterminate:
            selected2.length < groups.length && selected2.length !==0
        }
        break
      case 'toggleAll':
        const result = []
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

  const initialState = {selected: [], checkAll: false, indeterminate: false}
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange3 = (e) => {
    const value = e.target.value
    dispatch({value, type: state.selected.includes(value) ? 'remove' : 'add'})
  }
  const onCheckAllChange = (e) => {
    const checked = e.target.checked
    dispatch({
      type: 'toggleAll',
      checkAll: checked
    })
  }
```