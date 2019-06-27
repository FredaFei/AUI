import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, {createScopedClasses} from '../utils/classnames'
import './svg.js'
import './style'

interface IProps extends IStyledProps {
    name: string
    rotate?: number
    spin?: boolean
    onClick?: () => void
}

const componentName = 'Icon'
const sc = createScopedClasses(componentName)

const Icon: React.FunctionComponent<IProps> = (props: IProps) => {
    const {name, style, rotate, spin, className, onClick, ...rest} = props
    const wrapClasses = classes(sc(), [spin || (name === 'loading' && 'icon-spin')], className)
    const styles = Object.assign(
        {},
        style,
        rotate && {
            transform: `rotate(${rotate}deg)`,
            transition: `transform .2s ease`
        }
    )
    return (
        <svg className={wrapClasses} style={styles} onClick={onClick} {...rest}>
            <use xlinkHref={`#i-${name}`}/>
        </svg>
    )
}
Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
}
Icon.displayName = componentName
export default Icon
