import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'

import './style'

const componentName = 'MenuItem'
const sc = createScopedClasses(componentName)

export interface IProps extends IStyledProps {
    key: string
    disabled?: boolean
    onSelect?: (value: string) => any
}

const MenuItem: React.FunctionComponent<IProps> = props => {
    const onMenuItemClick = () => {
        props.onSelect && props.onSelect(props.key)
    }
    return (
        <div className={classes(sc(''), props.className)} style={props.style} onClick={onMenuItemClick}>
            {props.children}
        </div>
    )
}

MenuItem.displayName = componentName
MenuItem.defaultProps = {}
MenuItem.propTypes = {}

export default MenuItem
