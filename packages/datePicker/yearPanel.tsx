import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import Date2, {IReadonlyDate} from '../utils/date'
import {range} from '../utils/collection'
import {useState} from "react";

const componentName = 'YearPanel'
const sc = createScopedClasses(componentName)

type Panel = 'day' | 'month' | 'year'

interface Props extends IStyledProps {
  display: IReadonlyDate
  onChangePanel?: (panel: Panel) => void
  onChangeDisplay?: (date: Date2) => void
}

const YearPanel: React.FunctionComponent<Props> = props => {
  const [display, setDisplay] = useState(props.display.clone)

  const visibleYears = () => {
    let start = Math.floor(display.year / 10) * 10
    return Array.from({length: 12}, (val, index) => start - 1 + index)
  }

  const onClickPrevYear = () => {
    setDisplay(display.clone.addYear(-10))
  }
  const onClickNavYear = () => {
    props.onChangePanel!('month')
  }
  const onClickYear = (date: Date2) => {
    setDisplay(date)
    props.onChangeDisplay!(date)
    props.onChangePanel!('month')
  }
  const onClickNextYear = () => {
    setDisplay(display.clone.addYear(+10))
  }

  const renderNav = () => {
    return (
      <div className={classes(sc('nav'), 'am-datePicker-nav')}>
        <div className={sc('col')}>
          <Icon name="double-left" onClick={onClickPrevYear}/>
        </div>
        <div className={sc('col')}>
                    <span className={sc('year')}
                          onClick={onClickNavYear}>{visibleYears()[1]}-{visibleYears()[visibleYears().length - 2]}</span>
        </div>
        <div className={sc('col')}>
          <Icon name="double-right" onClick={onClickNextYear}/>
        </div>
      </div>
    )
  }

  const renderBody = () => {
    return (
      <div className={classes(sc('main'), 'am-datePicker-main')}>
        <table>
          {renderYears()}
        </table>
      </div>
    )
  }

  const renderYears = () => {
    const {display} = props
    const currentYearIndex: number = visibleYears().indexOf(display.year)
    const years = range(0, 3).map(row => (
      <tr key={`year-${row}`}>
        {range(1, 3).map(col => {
          const index = row * 3 + col - 1
          const d = display.clone.setYear(visibleYears()[index])
          return (
            <td className={sc('year', {
                'firstOrLastYear': index === 0 || index === visibleYears().length - 1,
                'year-selected': index === currentYearIndex
              })} onClick={() => onClickYear(d)} key={d.timestamp}>
              <div className={sc('cell')}>{visibleYears()[index]}</div>
            </td>
          )
        })}

      </tr>
    ))
    return (
      <tbody>{years}</tbody>
    )
  }

  return (
    <React.Fragment>
      {renderNav()}
      {renderBody()}
    </React.Fragment>
  )
}

YearPanel.displayName = componentName
export default YearPanel
