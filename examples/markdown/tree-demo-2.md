```jsx harmony
import * as React from 'react'

export default function (props) {
  const [data] = useState([
    {
      text: '1',
      key: '1',
      children: [
        {
          text: '1.1',
          key: '1.1',
          children: [
            {
              text: '1.1.1',
              key: '1.1.1',
            },
            {
              text: '1.1.2',
              key: '1.1.2',
            }
          ]
        }, {
          text: '1.2',
          key: '1.2',
        },
      ],
    }, {
      text: '2',
      key: '2',
      children: [
        {
          text: '2.1',
          key: '2.1',
        }, {
          text: '2.2',
          key: '2.2',
        }
      ],
    }
  ]);
  const [selected, setSelected] = useState(['1.1']);
  const onChange = (item: string[], setType: (value: string[]) => void) => {
    setType(item);
  };
  return (
    <div className="exp-section">
      <Tree sourceData={data} selected={selected} multiple={false}
                  onChange={(values) => onChange(values, setSelected)}/>
    </div>
  )
}
```

