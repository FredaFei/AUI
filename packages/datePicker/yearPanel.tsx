import * as React from 'react'
import {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import Date2, {IReadonlyDate} from '../utils/date'
import {range} from '../utils/collection'

const componentName = 'YearPanel'
const sc = createScopedClasses(componentName)

type IPanel = 'day' | 'month' | 'year'

interface IProps extends IStyledProps {
    display: IReadonlyDate
    onChange?: (date: Date) => void
    onChangePanel?: (panel: IPanel) => void
    onChangeDisplay?: (date: Date2) => void
}

interface IState {
    display: IReadonlyDate
    displayPanel?: IPanel
}

class YearPanel extends React.PureComponent<IProps, IState> {
    static displayName = componentName
    static propTypes = {}
    state: IState = {
        displayPanel: 'day',
        display: this.props.display.clone
    }

    get visibleYears() {
        let start = Math.floor(this.state.display.year / 10) * 10
        return Array.from({length: 12}, (val, index) => start - 1 + index)
    }

    onClickPrevYear = () => {
        this.setState({display: this.state.display.clone.addYear(-10)});
    }
    onClickNavYear = () => {
        this.props.onChangePanel!('month')
    }
    onClickYear = (date: Date2) => {
        this.setState({display: date})
        this.props.onChangeDisplay!(date)
        this.props.onChangePanel!('month')
    }
    onClickNextYear = () => {
        this.setState({display: this.state.display.clone.addYear(+10)});
    }

    renderNav() {
        return (
            <div className={sc('nav')}>
                <div className={sc('col')}>
                    <Icon name="double-left" onClick={this.onClickPrevYear}/>
                </div>
                <div className={sc('col')}>
                    <span className={sc('year')}
                          onClick={this.onClickNavYear}>{this.visibleYears[1]}-{this.visibleYears[this.visibleYears.length - 2]}</span>
                </div>
                <div className={sc('col')}>
                    <Icon name="double-right" onClick={this.onClickNextYear}/>
                </div>
            </div>
        )
    }

    renderBody() {
        return (
            <div className={sc('main')}>
                <table>
                    {this.renderYears()}
                </table>
            </div>
        )
    }

    renderYears() {
        const {display} = this.props
        const currentYearIndex:number = this.visibleYears.indexOf(this.state.display.year)
        const years = range(0, 3).map(row => (
            <tr key={`year-${row}`}>
                {range(1, 3).map(col => {
                    const index = row * 3 + col - 1
                    const d = display.clone.setYear(this.visibleYears[index])
                    return (
                        <td
                            className={sc('year', {
                                'firstOrLastYear': index === 0 || index === this.visibleYears.length - 1,
                                'year-selected': index === currentYearIndex
                            })}
                            onClick={() => this.onClickYear(d)}
                            key={d.timestamp}>
                            <div className={sc('cell')}>{this.visibleYears[index]}</div>
                        </td>
                    )
                })}

            </tr>
        ))
        return (
            <tbody>{years}</tbody>
        )
    }

    render() {
        // console.log(this.visibleYears)
        return (
            <React.Fragment>
                {this.renderNav()}
                {this.renderBody()}
            </React.Fragment>
        )
    }
}

export default YearPanel
