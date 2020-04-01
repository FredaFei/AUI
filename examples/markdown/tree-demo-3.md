```jsx harmony
import * as React from 'react'

export default function (props) {
  const [customData] = useState([
    {
      text: ()=>{return <span><Icon name="settings"/> 1</span>},
      key: '1',
      children: [
        {
          text: ()=>{return <span><Icon name="upload"/> 1.1</span>},
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
          text: ()=>{return <span><Icon name="upload"/> 1.2</span>},
          key: '1.2',
        },
      ],
    }, {
      text: ()=>{return <span><Icon name="settings"/>2</span>},
      key: '2',
      children: [
        {
          text: ()=>{return <span><Icon name="upload"/>2.1</span>},
          key: '2.1',
        }, {
          text: ()=>{return <span><Icon name="upload"/>2.2</span>},
          key: '2.2',
        }
      ],
    }
  ]);
  const [customSelected, setCustomSelected] = useState(['1.1.1', '2.1']);
  const onChange = (item: string[], setType: (value: string[]) => void) => {
    setType(item);
  };
  return (
    <div className="exp-section">
      <Tree sourceData={customData} selected={customSelected} multiple={true}
              onChange={(values) => onChange(values, setCustomSelected)}/>
    </div>
  )
}
```

