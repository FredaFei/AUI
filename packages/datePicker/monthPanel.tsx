import * as React from 'react'
import {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import Date2, {IReadonlyDate} from '../utils/date'
import {range} from '../utils/collection'

const componentName = 'MonthPanel'
const sc = createScopedClasses(componentName)

type IPanel = 'day' | 'month' | 'year'

interface IProps extends IStyledProps {
    value?: Date | string
    display: IReadonlyDate
    onChange?: (date: Date) => void
    onChangePanel?: (panel: IPanel) => void
    onChangeDisplay?: (date: Date2) => void
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
    static propTypes = {}
    state: IState = {
        displayPanel: 'day',
        display: this.props.display.clone
    }

    onClickPrevYear = () => {
        this.setState({display: this.state.display.clone.addYear(-1)});
    }
    onNavMonthClick = () => {
        this.props.onChangePanel!('year')
    }
    onClickMonth = (day: Date2) => {
        this.setState({display: day})
        this.props.onChangeDisplay!(day)
        this.props.onChangePanel!('day')
    }
    onClickNextYear = () => {
        this.setState({display: this.state.display.clone.addYear(+1)});
    }

    renderNav() {
        return (
            <div className={sc('nav')}>
                <div className={sc('col')}>
                    <Icon name="double-left" onClick={this.onClickPrevYear}/>
                </div>
                <div className={sc('col')}>
                    <span className={sc('year')} onClick={this.onNavMonthClick}>{this.state.display.year}年</span>
                </div>
                <div className={sc('col')}>
                    <Icon name="double-right" onClick={this.onClickNextYear}/>
                </div>
            </div>
        )
    }

    renderBody() {
        const {display} = this.props
        const month = range(0, 3).map(row => (
            <tr key={`month-${row}`}>
                {range(1, 3).map(col => {
                    const d = display.clone.setMonth(row * 3 + col)
                    return <td
                        className={sc('month', {
                            'month-selected': d.month === display.month
                        })}
                        onClick={() => this.onClickMonth(d)}
                        key={d.timestamp}>
                        <div className={sc('cell')}>{monthMap[row * 3 + col - 1]}</div>
                    </td>
                })}
            </tr>
        ))
        return (
            <div className={sc('main')}>
                <table>
                    <tbody>{month}</tbody>
                </table>
            </div>
        )
    }

    render() {
        console.log('monthpanel')
        console.log(this.state.display.month)
        return (
            <React.Fragment>
                {this.renderNav()}
                {this.renderBody()}
            </React.Fragment>
        )
    }
}

export default DayPanel
