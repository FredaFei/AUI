import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Popover from '../popover/popover'
import ClickOutside from '../clickOutside/clickOutside'
import Input from '../input/input';
import DayPanel from "./dayPanel";
import MonthPanel from "./monthPanel";
import YearPanel from "./yearPanel";
import Date2, {IReadonlyDate} from '../utils/date'

import './style'
import {ReactNode} from "react";
import Icon from "../icon/icon";

const componentName = 'DatePicker'
const sc = createScopedClasses(componentName)

interface IProps extends IStyledProps {
  value?: Date | string
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  onChange?: (date: Date | string) => void
  extraFooter?: (() => ReactNode)
}

type IPanel = 'day' | 'month' | 'year'

interface IState {
  display: IReadonlyDate
  displayPanel: IPanel
  defaultValue: IReadonlyDate
  open: boolean
}

/**
 * TODOS:
 * 日期格式自定义
 */
class DatePicker
  extends React.PureComponent <IProps, IState> {
  static displayName = componentName
  static defaultProps = {
    firstDayOfWeek: 1
  }
  static propTypes = {}
  private readonly refDiv: React.RefObject<HTMLDivElement>

  constructor(props: IProps) {
    super(props)
    this.state = {
      open: false,
      displayPanel: 'day',
      display: this.display || this.date2Value,
      defaultValue: this.date2Value
    }
    this.refDiv = React.createRef<HTMLDivElement>()
  }

  get date2Value() {
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
    this.setState({defaultValue: new Date2(date)})
    this.props.onChange && this.props.onChange(date)
    this.close()
  }
  onChangeDisplay = (display: Date2) => {
    this.setState({display})
  }
  onFocusInput = () => {
    this.open()
  }
  onClickOutside = () => {
    this.close()
  }
  close = () => {
    this.setState({open: false})
  }
  open = () => {
    this.setState({open: true})
  }
  onChangePanel = (displayPanel: IPanel) => {
    this.setState({displayPanel});
  }
  renderDatePicker() {
    return (
      <div className={sc('body')} ref={this.refDiv}>
        {this.state.displayPanel === 'day' ?
          <DayPanel value={this.props.value}
                    display={this.state.display}
                    defaultValue={this.state.defaultValue}
                    firstDayOfWeek={this.props.firstDayOfWeek}
                    onChange={this.onChange}
                    onChangePanel={this.onChangePanel}
                    extraFooter={this.props.extraFooter}
                    onChangeDisplay={this.onChangeDisplay}/> : this.state.displayPanel === 'month' ?
            <MonthPanel display={this.state.display}
                        onChangePanel={this.onChangePanel}
                        onChangeDisplay={this.onChangeDisplay}/> : <YearPanel display={this.state.display}
                                                                              onChangePanel={this.onChangePanel}
                                                                              onChangeDisplay={this.onChangeDisplay}/>}
      </div>
    )
  }

  render() {
    const {props} = this
    return (
      <ClickOutside handler={this.onClickOutside} exclude={this.refDiv}>
        <div className={classes(sc('wrapper'), props.className)} style={props.style}>
          <Popover content={this.renderDatePicker()} trigger="manual" open={this.state.open} position="bottomLeft">
            <Input value={this.formattedValue} onFocus={this.onFocusInput} readOnly={true} before={<Icon name="date"/>} />
          </Popover>
        </div>
      </ClickOutside>
    )
  }
}

export default DatePicker
