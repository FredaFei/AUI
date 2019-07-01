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
    defaultValue: IReadonlyDate
}
/**
 * TODOS:
 * 日期格式自定义
 * 输入框一键删除
 * 日期样式统一高度
 * 关闭选择日期层（类似popover层）
 */
class DatePicker
    extends React.PureComponent <IProps, IState> {
    static displayName = componentName
    static defaultProps = {
        firstDayOfWeek: 1
    }
    static propTypes = {}

    state: IState = {
        displayPanel: 'day',
        display: this.display || this.date2Value,
        defaultValue : this.date2Value
    }
    get date2Value(){
        return new Date2(this.props.value).clone
    }
    get display() {
        return isNaN(this.date2Value.day) && new Date2(new Date()).clone
    }

    get formattedValue() {
        if (!this.props.value && isNaN(this.state.defaultValue.day)) {
            return ''
        }
        return this.state.defaultValue.toDateString()
    }
    onChange = (date: Date) => {
        this.onChangeDisplay(new Date2(date))
        this.setState({defaultValue:new Date2(date)})
        this.props.onChange && this.props.onChange(date)
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
                              defaultValue={this.state.defaultValue}
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
        return (
            <div className={classes(sc('wrapper'), props.className)} style={props.style}>
                <Input value={this.formattedValue} onFocus={this.onFocusInput} readOnly={true}/>
                {this.renderDatePicker()}
            </div>
        )
    }
}

export default DatePicker
