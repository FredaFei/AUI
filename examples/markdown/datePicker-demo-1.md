```html
<div>
  <DatePicker value={d1} onChange={onChange1}/>
</div>
```
```javascript
  const [d1, setD1] = useState(new Date());
  const onChange1 = (day) => {
    setD1(day)
  }
```