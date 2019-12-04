```html
<div>
  <Switch checked={checked}/>
  <Button onClick={onToggleSwitch}>toggle</Button>
</div>
```
```javascript
  import * as React from 'react'
  import { useState } from 'react'
  
  const [checked, setChecked] = useState(true)

  const onToggleSwitch = () => {
      setChecked(!checked)
    }
```