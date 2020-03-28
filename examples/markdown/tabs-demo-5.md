``` jsx harmony
import * as React from 'react'

const initTabs = range(11, 26).map(i => `tab ${i % 2 === 0 ? i * 10 : i}`);
export default function (props) {
  const [direction, setDirection] = useState<'horizontal' | 'vertical'>('vertical');
  const style = direction === 'horizontal' ? {maxWidth: '976px'} : {height: '320px'};
  return (
    <div className="exp-section">
      <ButtonGroup style={{marginBottom: '20px'}}>
        <Button onClick={() => setDirection('horizontal')}>Horizontal</Button>
        <Button onClick={() => setDirection('vertical')}>Vertical</Button>
      </ButtonGroup>

      <Tabs direction={direction} style={style}>
        {tabsSource.map(t => <TabPane tab={t} key={t}>{`Content of Tab Pane ${t}`}</TabPane>)}
      </Tabs>
    </div>
  )
}
```