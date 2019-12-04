```html
<div>
  {groups.map(i => (
    <Radio
      key={i.value}
      value={i.value}
      checked={checked2.includes(i.value)}
      onChange={onChange2}
      name={i.name}
    >
      {i.value}
    </Radio>
  ))}
</div>
```
```javascript
  import * as React from 'react'
  import { useState } from 'react'
  
  const groups = [
    { name: 'fruit', value: 'apple' },
    { name: 'fruit', value: 'peach' },
    { name: 'fruit', value: 'orange' },
    { name: 'fruit', value: 'pear' }
  ]
  const [checked2, setChecked2] = useState(['peach'])

  const onChange2 = (e) => {
    console.log(e)
    setChecked2([e.target.value])
  }
```