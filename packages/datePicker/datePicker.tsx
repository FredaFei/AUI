import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Input from '../input/input'
import DayPanel from "./dayPanel";

import './style'

const componentName = 'DatePicker'
const sc = createScopedClasses(componentName)

interface IProps extends IStyledProps {
    value?: Date | string
    onChange?: (date: Date) => void
}

interface IState {
    displayPanel?: 'day' | 'month' | 'year'
}


class DatePicker extends React.PureComponent<IProps, IState> {
    static displayName = componentName
    static defaultProps = {}
    static propTypes = {}
    state: IState = {
        displayPanel: 'day'
    }
    onChange = (date: Date) => {
        this.props.onChange && this.props.onChange(date)
    }

    renderYearPanel() {
        return <div>year</div>
    }

    renderMonthPanel() {
        return <div>month</div>
    }

    renderDatePicker() {
        return (
            <React.Fragment>
                {this.state.displayPanel === 'day' ?
                    <DayPanel value={this.props.value}
                              onChange={this.onChange}/> : this.state.displayPanel === 'month' ? this.renderMonthPanel() : this.renderYearPanel()}
            </React.Fragment>
        )
    }

    render() {
        const {props} = this
        return (
            <div className={classes(sc('wrapper'), props.className)} style={props.style}>
                <Input/>
                {this.renderDatePicker()}
            </div>
        )
    }
}

export default DatePicker
