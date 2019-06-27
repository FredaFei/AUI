import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Input from '../input/input'
import DayPanel from "./dayPanel";
import MonthPanel from "./monthPanel";
import YearPanel from "./yearPanel";
import Date2, {IReadonlyDate} from '../utils/date'

import './style'

const componentName = 'DatePicker'
const sc = createScopedClasses(componentName)

interface IProps extends IStyledProps {
    value?: Date | string
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    onChange?: (date: Date) => void
}

type IPanel = 'day' | 'month' | 'year'

interface IState {
    display: IReadonlyDate
    displayPanel: IPanel
}

class DatePicker
    extends React.PureComponent <IProps, IState> {
    static displayName = componentName
    static defaultProps = {
        firstDayOfWeek: 1
    }
    static propTypes = {}
    state: IState = {
        displayPanel: 'month',
        display: this.date2Value.clone
    }

    get date2Value() {
        return new Date2(this.props.value)
    }

    get formattedValue() {
        return this.date2Value.toDateString()
    }

    onChange = (date: Date) => {
        this.props.onChange && this.props.onChange(date)
    }
    onFocusInput = () => {
    }
    onChangePanel = (displayPanel: IPanel) => {
        this.setState({displayPanel});
    }

    renderDatePicker() {
        return (
            <div className={sc('body')}>
                {this.state.displayPanel === 'day' ?
                    <DayPanel value={this.props.value}
                              onChange={this.onChange}
                              firstDayOfWeek={this.props.firstDayOfWeek}
                              onChangePanel={this.onChangePanel}
                              display={this.state.display}/> : this.state.displayPanel === 'month' ? <MonthPanel /> : <YearPanel />}
            </div>
        )
    }

    render() {
        const {props} = this
        return (
            <div className={classes(sc('wrapper'), props.className)} style={props.style}>
                <Input value={this.formattedValue} onFocus={this.onFocusInput} readOnly={true}/>
                {this.renderDatePicker()}
            </div>
        )
    }
}

export default DatePicker
