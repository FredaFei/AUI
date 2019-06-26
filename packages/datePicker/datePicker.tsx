import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'

import './style'

const componentName = 'DatePicker'
const sc = createScopedClasses(componentName)

export interface IProps extends IStyledProps {
}

const DatePicker: React.FunctionComponent<IProps> = props => {
    return (
        <div className={classes(sc('wrapper'), props.className)} style={props.style}></div>
    )
}

DatePicker.displayName = componentName
DatePicker.defaultProps = {}
DatePicker.propTypes = {}

export default DatePicker
