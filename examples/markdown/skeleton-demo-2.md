```jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <div className="exp-section">
      <Skeleton repeat={2} loading placeholder={`
                xxxxxx
                xxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                `}/>
    </div>
  )
}
```

