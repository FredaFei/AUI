import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import Date2, {IReadonlyDate, pad} from '../utils/date'
import {range} from '../utils/collection'
import {ReactNode, useState} from "react";

const componentName = 'DayPanel'
const sc = createScopedClasses(componentName)

function normalize(n: number, base: number): number {
  if (n < 0) {
    return normalize(n + base, base)
  } else {
    return n
  }
}

type Panel = 'day' | 'month' | 'year'

interface Props extends StyledProps {
  value?: Date | string
  display: IReadonlyDate
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  extraFooter?: (() => ReactNode)
  onChange?: (date: Date) => void
  onChangePanel?: (panel: Panel) => void
  onChangeDisplay?: (date: Date2) => void
}

const weeksMap: string[] = ["日", "一", "二", "三", "四", "五", "六"]


const DayPanel: React.FunctionComponent<Props> = props => {
  const [selectedValue] = useState(props.value || props.display.clone)
  const [display, setDisplay] = useState(props.display.clone)

  const weekdayNames =()=> {
    const before = weeksMap.slice(0, props.firstDayOfWeek)
    const after = weeksMap.slice(props.firstDayOfWeek)
    return [...after, ...before]
  }

  const onClickDay = (day: Date2) => {
    setDisplay(day)
    props.onChange!( day.toDate())
  }
  const onClickPrevYear = () => {
    setDisplay(display.clone.addYear(-1))
  }
  const onClickPrevMonth = () => {
    setDisplay(display.clone.addMonth(-1))
  }
  const onClickYear = () => {
    props.onChangePanel!('year')
  }
  const onClickMonth = () => {
    props.onChangePanel!('month')
  }
  const onClickNextMonth = () => {
    setDisplay(display.clone.addMonth(+1))
  }
  const onClickNextYear = () => {
    setDisplay(display.clone.addYear(+1))

  }
  const onClickToDay = () => {
    const today = new Date2(new Date())
    setDisplay(today)
    props.onChange!(today.toDate())
  }

  const renderNav=()=> {
    return (
      <div className={classes(sc('nav'), 'am-datePicker-nav')}>
        <div className={sc('col')}>
          <Icon name="double-left" onClick={onClickPrevYear}/>
          <Icon name="left" onClick={onClickPrevMonth}/>
        </div>
        <div className={sc('col')}>
          <span className={sc('year')} onClick={onClickYear}>{display.year}年</span>
          <span className={sc('month')} onClick={onClickMonth}>{pad(display.month)}月</span>
        </div>
        <div className={sc('col')}>
          <Icon name="right" onClick={onClickNextMonth}/>
          <Icon name="double-right" onClick={onClickNextYear}/>
        </div>
      </div>
    )
  }

  const renderBody = ()=> {
    return (
      <div className={classes(sc('main'), 'am-datePicker-main')}>
        <table>
          <thead>
          <tr>
            {weekdayNames().map(i => <th key={i}>{i}</th>)}
          </tr>
          </thead>
          {renderDays()}
        </table>
      </div>
    )
  }

  const renderDays = ()=> {
    const firstDayThisMonth = display.clone.setDay(1)
    const n = firstDayThisMonth.dayOfWeek
    const delta = normalize(n - props.firstDayOfWeek!, 7)
    const firstDayThisPanel = firstDayThisMonth.addDay(-delta)
    const days = range(0, 5).map(row => (
      <tr key={firstDayThisMonth.clone.addDay(row * 7).timestamp}>
        {range(0, 6).map(col => {
          const d = firstDayThisPanel.clone.addDay(row * 7 + col)
          const colClasses = {
            'currentMonth': d.month === display.month,
            'isToday': d.isSameDayAs(new Date2(new Date())),
            'selected': d.isSameDayAs(selectedValue as Date2),
            'isSame': d.day === (display as Date2).day
          }
          return (
            <td className={sc('day', colClasses)} onClick={() => onClickDay(d)} key={d.timestamp}>
              <div className={sc('cell')}>{d.day}</div>
            </td>
          )
        })}
      </tr>
    ))
    return (
      <tbody>{days}</tbody>
    )
  }

  const renderActions = ()=> {
    return (
      <React.Fragment>
        {props.extraFooter && props.extraFooter()}
        <div className={sc('actions')} onClick={onClickToDay}>今天</div>
      </React.Fragment>
    )
  }
  return <React.Fragment>
        {renderNav()}
        {renderBody()}
        {renderActions()}
    </React.Fragment>
}
DayPanel.displayName = componentName
DayPanel.defaultProps = {firstDayOfWeek: 1}

export default DayPanel
