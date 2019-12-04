```html
<div>
  <div className="custom-input">
    <Input onEnter={onEnter} />
    <div>enter event value: {enterVal}</div>
  </div>
  <div className="custom-input">
    <Input onKeyDown={onKeyDown} />
    <div>enter event value: {keyDownVal}</div>
  </div>
</div>
```