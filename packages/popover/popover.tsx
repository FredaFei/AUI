import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, {createScopedClasses} from '../utils/classnames'
import ClickOutside from '../clickOutside/clickOutside'
import './style'
import {ReactElement, ReactNode, RefObject} from "react";

const componentName = 'Popover'
const sc = createScopedClasses(componentName)

type position = 'top' | 'right' | 'left' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'topRight' | 'topLeft'

interface IProps extends IStyledProps {
    content: string | ReactNode
    children: ReactElement<any>
    position?: position
    trigger?: 'hover' | 'trigger' | 'manual'
    open?: boolean
    container?: RefObject<Element>
}

interface IState {

}

class Popover extends React.PureComponent<IProps, IState> {
    static displayName = componentName
    static defaultProps = {
        position: 'top',
        trigger: 'hover'
    }
    static propTypes = {
        content: PropTypes.node.isRequired,
        position: PropTypes.oneOf(['top' , 'right' , 'left' , 'bottom' , 'bottomLeft' , 'bottomRight' , 'topRight', 'topLeft'])
    }
    render() {
        const {className, style, children} = this.props
        return (
            <ClickOutside>
                <div data-role={componentName} style={style} className={classes(sc(), className)}>
                    {children}
                </div>
            </ClickOutside>
        )
    }
}


export default Popover
