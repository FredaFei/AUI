```html
<div>
  <Collapse
    activeKey={['1', '3']}
    className="custom-desk"
    expandIcon={active => (
      <Icon
        name="upload"
        rotate={active ? 90 : 0}
        className="am-icon-animation"
      />
    )}
  >
    <Pane header="This is panel header 1" visibleIcon={false} name="1">
      <p>This is pane content 1</p>
    </Pane>
    <Pane header="This is panel header 2" name="2">
      <p>This is pane content 2</p>
    </Pane>
    <Pane header="This is panel header 3" name="3">
      <p>This is pane content 3</p>
    </Pane>
  </Collapse>
</div>
```