import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Input from '../input/input'
import DayPanel from "./dayPanel";
import MonthPanel from "./monthPanel";
import YearPanel from "./yearPanel";
import Date2, {IReadonlyDate} from '../utils/date'

import './style'
import {ReactNode} from "react";

const componentName = 'DatePicker'
const sc = createScopedClasses(componentName)

interface IProps extends IStyledProps {
    value?: Date | string
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    onChange?: (date: Date|string) => void
    extraFooter?: (() => ReactNode)
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
        // value: new Date(),
        firstDayOfWeek: 1
    }
    static propTypes = {}
    state: IState = {
        displayPanel: 'month',
        display: this.date2Value.clone
    }

    get date2Value() {
        return new Date2(this.props.value || new Date())
    }

    get formattedValue() {
        if (!this.props.value) {
            return ''
        }
        return this.date2Value.toDateString()
    }
    set formattedValue(value:Date | string) {
        if ('value' in this.props) {
            this.setState({ display: new Date2(value) })
        }
        this.props.onChange && this.props.onChange(value)
    }

    onChange = (date: Date) => {
        this.formattedValue = date
        // this.props.onChange && this.props.onChange(date)
    }
    onChangeDisplay = (display: Date2) => {
        this.setState({display})
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
                              display={this.state.display}
                              extraFooter={this.props.extraFooter}
                              onChangeDisplay={this.onChangeDisplay}/> : this.state.displayPanel === 'month' ?
                        <MonthPanel display={this.state.display}
                                    onChange={this.onChange}
                                    onChangePanel={this.onChangePanel}
                                    onChangeDisplay={this.onChangeDisplay}/> : <YearPanel display={this.state.display}
                                                                                          onChange={this.onChange}
                                                                                          onChangePanel={this.onChangePanel}
                                                                                          onChangeDisplay={this.onChangeDisplay}/>}
            </div>
        )
    }

    render() {
        const {props} = this
        console.log('datepicker')
        console.log(this.formattedValue)
        console.log(this.state.display.year)
        console.log(this.state.display.month)
        return (
            <div className={classes(sc('wrapper'), props.className)} style={props.style}>
                <Input value={this.formattedValue} onFocus={this.onFocusInput} readOnly={true}/>
                {this.renderDatePicker()}
            </div>
        )
    }
}

export default DatePicker
