```html
<div>
  <DatePicker firstDayOfWeek={0} value={d3} onChange={onChange3}/>
</div>
```
```javascript
  const [d3, setD3] = useState(new Date());
  const onChange3 = (day) => {
    setD3(day)
  }
```