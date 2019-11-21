import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import Date2, {IReadonlyDate} from '../utils/date'
import {range} from '../utils/collection'
import {useState} from "react";

const componentName = 'MonthPanel'
const sc = createScopedClasses(componentName)

type Panel = 'day' | 'month' | 'year'

interface Props extends IStyledProps {
  display: IReadonlyDate
  onChangePanel?: (panel: Panel) => void
  onChangeDisplay?: (date: Date2) => void
}

const monthMap = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月"
]

const MonthPanel: React.FunctionComponent<Props> = props => {
  const [display, setDisplay] = useState(props.display.clone)

  const onClickPrevYear = () => {
    setDisplay(display.clone.addYear(-1))
    props.onChangeDisplay!(display.clone)
    // this.setState((prevState) => ({display: prevState.display.clone.addYear(-1)}), () => {
    //   this.props.onChangeDisplay!(this.state.display.clone)
    // });
  }
  const onNavMonthClick = () => {
    props.onChangePanel!('year')
  }
  const onClickMonth = (day: Date2) => {
    setDisplay(day)
    props.onChangeDisplay!(day)
    props.onChangePanel!('day')
  }
  const onClickNextYear = () => {
    setDisplay(display.clone.addYear(+1))
    props.onChangeDisplay!(display.clone)
  }

  const renderNav = () => {
    return (
      <div className={classes(sc('nav'), 'am-datePicker-nav')}>
        <div className={sc('col')}>
          <Icon name="double-left" onClick={onClickPrevYear}/>
        </div>
        <div className={sc('col')}>
          <span className={sc('year')} onClick={onNavMonthClick}>{display.year}年</span>
        </div>
        <div className={sc('col')}>
          <Icon name="double-right" onClick={onClickNextYear}/>
        </div>
      </div>
    )
  }

  const renderBody = () => {
    const month = range(0, 3).map(row => (
      <tr key={`month-${row}`}>
        {range(1, 3).map(col => {
          const d = display.clone.setMonth(row * 3 + col)
          return <td
            className={sc('month', {
              'month-selected': d.month === display.month
            })}
            onClick={() => onClickMonth(d)}
            key={d.timestamp}>
            <div className={sc('cell')}>{monthMap[row * 3 + col - 1]}</div>
          </td>
        })}
      </tr>
    ))
    return (
      <div className={classes(sc('main'), 'am-datePicker-main')}>
        <table>
          <tbody>{month}</tbody>
        </table>
      </div>
    )
  }

  return (
    <React.Fragment>
      {renderNav()}
      {renderBody()}
    </React.Fragment>
  )
}

MonthPanel.displayName = componentName
MonthPanel.defaultProps = {}

export default MonthPanel
