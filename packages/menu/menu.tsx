import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'

import './style'

const componentName = 'Menu'
const sc = createScopedClasses(componentName)

export interface IProps extends StyledProps {
    selected: string
    layout?: 'horizontal' | 'inline' | 'vertical'
    onSelect?: (value: string) => any
}

const Menu: React.FunctionComponent<IProps> = props => {
    const menuItem = React.Children.map(props.children, child => {
        console.log(child)
        const element = child as React.ReactElement
        if(!element.type){return null}
        const key = element.key as string
        return React.cloneElement(child as React.ReactElement, {
            key,
            onSelect: props.onSelect
        })
    })
    return (
        <div className={classes(sc('wrapper', props.layout), props.className)} style={props.style}>
            {menuItem}
        </div>
    )
}

Menu.displayName = componentName
Menu.defaultProps = {
    layout: 'horizontal'
}
Menu.propTypes = {}

export default Menu
