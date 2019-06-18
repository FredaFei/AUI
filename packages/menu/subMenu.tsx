import * as React from 'react'
import {ReactNode} from "react";
import classes, {createScopedClasses} from '../utils/classnames'

import './style'

const componentName = 'SubMenu'
const sc = createScopedClasses(componentName)

export interface IProps extends IStyledProps {
    key: string
    title: string | ReactNode
}

const SubMenu: React.FunctionComponent<IProps> = props => {
    return (
        <div className={classes(sc(''), props.className)} style={props.style}>
            {props.children}
        </div>
    )
}

SubMenu.displayName = componentName
SubMenu.defaultProps = {}
SubMenu.propTypes = {}

export default SubMenu
