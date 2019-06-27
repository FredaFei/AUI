import * as React from 'react'
import {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import Date2, {IReadonlyDate} from '../utils/date'
import {range} from '../utils/collection'

const componentName = 'DayPanel'
const sc = createScopedClasses(componentName)

function normalize(n: number, base: number): number {
    if (n < 0) {
        return normalize(n + base, base)
    } else {
        return n
    }
}

type IPanel = 'day' | 'month' | 'year'

interface IProps extends IStyledProps {
    value?: Date | string
    display: IReadonlyDate
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    onChange?: (date: Date) => void
    onChangePanel?: (panel: IPanel) => void
}

interface IState {
    display: IReadonlyDate
    displayPanel?: 'day' | 'month' | 'year'
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

class DayPanel extends React.PureComponent<IProps, IState> {
    static displayName = componentName
    static defaultProps = {
        firstDayOfWeek: 1
    }
    static propTypes = {}
    state: IState = {
        displayPanel: 'day',
        display: new Date2(this.props.value)
    }

    get date2Value() {
        return new Date2(this.props.value)
    }

    onClickDay = (day: Date2) => {
        this.props.onChange && this.props.onChange.call(null, day.toDate())
    }
    onClickPrevYear = () => {
        this.setState({display: this.state.display.clone.addYear(-1)});
    }
    onClickYear = () => {
        this.props.onChangePanel!('year')
    }
    onClickMonth = (index:number)=>{}
    onClickNextYear = () => {
        this.setState({display: this.state.display.clone.addYear(+1)});
    }

    renderNav() {
        return (
            <div className={sc('nav')}>
                <div className={sc('col')}>
                    <Icon name="left" onClick={this.onClickPrevYear}/>
                </div>
                <div className={sc('col')}>
                    <span className={sc('year')} onClick={this.onClickYear}>{this.state.display.year}年</span>
                </div>
                <div className={sc('col')}>
                    <Icon name="right" onClick={this.onClickNextYear}/>
                </div>
            </div>
        )
    }

    renderBody() {
        const month = range(0, 3).map(row => (
            <tr key={`month-${row}`}>
                {range(1, 3).map(col => {
                    return <td
                        className={sc('month', {
                            'month-selected': true
                        })}
                        onClick={() => this.onClickMonth(row * 3 + col - 1)}
                        key={`month-${row}-${col}`}>
                        <div className={sc('cell')}>{monthMap[row * 3 + col - 1]}</div>
                    </td>
                })}
            </tr>
        ))
        return (
            <table>
                <tbody>{month}</tbody>
            </table>
        )
    }

    renderDays() {
        const {display} = this.props
        const firstDayThisMonth = display.clone.setDay(1)
        const n = firstDayThisMonth.dayOfWeek
        const delta = normalize(n - this.props.firstDayOfWeek!, 7)
        const firstDayThisPanel = firstDayThisMonth.addDay(-delta)
        const days = range(0, 5).map(row => (
            <tr key={firstDayThisMonth.clone.addDay(row * 7).timestamp}>
                {range(0, 6).map(col => {
                    const d = firstDayThisPanel.clone.addDay(row * 7 + col)
                    return (
                        <td
                            className={sc('day', {
                                'day-currentMonth': d.month === display.month,
                                'day-selected': d.isSameDayAs(this.date2Value)
                            })}
                            onClick={() => this.onClickDay(d)}
                            key={d.timestamp}>
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


    render() {
        return (
            <React.Fragment>
                {this.renderNav()}
                {this.renderBody()}
            </React.Fragment>
        )
    }
}

export default DayPanel
