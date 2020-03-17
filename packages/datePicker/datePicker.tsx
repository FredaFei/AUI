import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Popover from '../popover/popover'
import ClickOutside from '../clickOutside/clickOutside'
import Input from '../input/input';
import DayPanel from "./dayPanel";
import MonthPanel from "./monthPanel";
import YearPanel from "./yearPanel";
import Date2, { IReadonlyDate } from '../utils/date';

import './style'
import {ReactNode, useEffect, useRef, useState} from "react";
import Icon from "../icon/icon";

const componentName = 'DatePicker'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps {
  value?: Date | string
  disabled?: Boolean
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  onChange?: (date: Date | string) => void
  extraFooter?: (() => ReactNode)
}

type Panel = 'day' | 'month' | 'year'

const DatePicker: React.FunctionComponent<Props> = props => {
  const [display, setDisplay] = useState<IReadonlyDate>(new Date2(new Date()).clone)
  const [displayPanel, setDisplayPanel] = useState<Panel>('day')
  const [visible, setVisible] = useState<boolean>(false)
  const [formattedValue, setFormattedValue] = useState('')
  const refDiv = useRef<HTMLDivElement>(null)

  const isDatepickerRef = useRef(false)
  useEffect(() => {
    const date2Value = 'value' in props ? new Date2(props.value).clone : new Date2(new Date()).clone
    setDisplay(date2Value as IReadonlyDate)
    setFormattedValue('value' in props ? date2Value.toDateString() : '')
    return bindEvents()
  }, [])
  const bindEvents = () => {
    isDatepickerRef.current = true
    document.addEventListener('selectstart', onSelect)
    return () => {
      document.removeEventListener('selectstart', onSelect)
    }
  }
  const onSelect = (e: Event) => {
    if (isDatepickerRef.current) {e.preventDefault()}
  }
  const onChange = (date: Date) => {
    onChangeDisplay(new Date2(date))
    setFormattedValue(new Date2(date).toDateString())
    props.onChange && props.onChange(date)
    close()
  }
  const onChangeDisplay = (display: Date2) => {
    setDisplay(display)
  }
  const onFocusInput = () => {
    open()
  }
  const onClickOutside = () => {
    close()
  }
  const close = () => {
    setVisible(false)
  }
  const open = () => {
    if(props.disabled){return}
    setVisible(true)
  }
  const onChangePanel = (displayPanel: Panel) => {
    setDisplayPanel(displayPanel)
  }
  const renderDatePicker = () => {
    return (
      <div className={sc('body')} ref={refDiv}>
        {displayPanel === 'day' ?
          <DayPanel value={props.value}
                    display={display}
                    firstDayOfWeek={props.firstDayOfWeek}
                    onChange={onChange}
                    onChangePanel={onChangePanel}
                    extraFooter={props.extraFooter}
                    onChangeDisplay={onChangeDisplay}/> : displayPanel === 'month' ?
            <MonthPanel display={display}
                        onChangePanel={onChangePanel}
                        onChangeDisplay={onChangeDisplay}/> : <YearPanel display={display}
                                                                         onChangePanel={onChangePanel}
                                                                         onChangeDisplay={onChangeDisplay}/>}
      </div>
    )
  }

  return (
    <ClickOutside handler={onClickOutside} exclude={refDiv}>
      <div className={classes(sc('wrapper',{disabled:props.disabled}), props.className)} style={props.style}>
        <Popover content={renderDatePicker()} trigger="manual" open={visible} position="bottomLeft">
          <Input value={formattedValue} onFocus={onFocusInput} readOnly={true}
                 before={<Icon name="date"/>}/>
        </Popover>
      </div>
    </ClickOutside>
  )
}

DatePicker.displayName = componentName
DatePicker.defaultProps = {
  firstDayOfWeek: 1,
  disabled: false
}

export default DatePicker
