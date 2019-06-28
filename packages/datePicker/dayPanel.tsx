import * as React from 'react'
import {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import Date2, {IReadonlyDate, pad} from '../utils/date'
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
    onChangeDisplay?: (date: Date2) => void
}

interface IState {
    display: IReadonlyDate
    displayPanel?: 'day' | 'month' | 'year'
}

const weeksMap: string[] = ["日", "一", "二", "三", "四", "五", "六"]

class DayPanel extends React.PureComponent<IProps, IState> {
    static displayName = componentName
    static defaultProps = {
        firstDayOfWeek: 1
    }
    static propTypes = {}
    state: IState = {
        displayPanel: 'day',
        display: this.props.display.clone
    }

    get date2Value() {
        return new Date2(this.props.value)
    }

    get weekdayNames() {
        const before = weeksMap.slice(0, this.props.firstDayOfWeek)
        const after = weeksMap.slice(this.props.firstDayOfWeek)
        return [...after, ...before]
    }

    onClickDay = (day: Date2) => {
        this.props.onChange!.call(null, day.toDate())
    }
    onClickPrevYear = () => {
        this.setState(()=>({display: this.state.display.clone.addYear(-1)}), () => {
            this.props.onChangeDisplay!(this.state.display.clone)
        });
    }
    onClickPrevMonth = () => {
        this.setState(() => ({display: this.state.display.clone.addMonth(-1)}), () => {
            this.props.onChangeDisplay!(this.state.display.clone)
        });
    }
    onClickYear = () => {
        this.props.onChangePanel!('year')
    }
    onClickMonth = () => {
        this.props.onChangePanel!('month')
    }
    onClickNextMonth = () => {
        this.setState(()=>({display: this.state.display.clone.addMonth(+1)}), () => {
            this.props.onChangeDisplay!(this.state.display.clone)
        });
    }
    onClickNextYear = () => {
        this.setState(()=>({display: this.state.display.clone.addYear(+1)}), () => {
            this.props.onChangeDisplay!(this.state.display.clone)
        });
    }

    renderNav() {
        return (
            <div className={sc('nav')}>
                <div className={sc('col')}>
                    <Icon name="left" onClick={this.onClickPrevYear}/>
                    <Icon name="left" onClick={this.onClickPrevMonth}/>
                </div>
                <div className={sc('col')}>
                    <span className={sc('year')} onClick={this.onClickYear}>{this.state.display.year}年</span>
                    <span className={sc('month')} onClick={this.onClickMonth}>{pad(this.state.display.month)}月</span>
                </div>
                <div className={sc('col')}>
                    <Icon name="right" onClick={this.onClickNextMonth}/>
                    <Icon name="right" onClick={this.onClickNextYear}/>
                </div>
            </div>
        )
    }

    renderBody() {
        return (
            <div className={sc('main')}>
                <table>
                    <thead>
                    <tr>
                        {this.weekdayNames.map(i => <th key={i}>{i}</th>)}
                    </tr>
                    </thead>
                    {this.renderDays()}
                </table>
            </div>
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

    renderActions() {
        return (<div className={sc('actions')}>今天</div>)
    }

    render() {
        console.log('daypanel')
        console.log(this.state.display.month)
        return (
            <React.Fragment>
                {this.renderNav()}
                {this.renderBody()}
                {this.renderActions()}
            </React.Fragment>
        )
    }
}

export default DayPanel
