import * as React from 'react';
import classes, { createScopedClasses } from '../utils/classnames';
import './style';

const componentName = 'Tree';
const sc = createScopedClasses(componentName);

export interface Props extends StyledProps {
}

const Tree: React.FunctionComponent<Props> = props => {
  return <div className={classes(sc('tree'))}>tree</div>;
};
Tree.displayName = componentName;
Tree.defaultProps = {};
export default Tree;
