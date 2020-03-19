import * as React from 'react';
import classes, { createScopedClasses } from '../utils/classnames';
import './style';
import TreeItem from './treeItem';

const componentName = 'Tree';
const sc = createScopedClasses(componentName);

const Tree: React.FunctionComponent<TreeProps> = props => {
  return <div className={classes(sc(''))}>
    {
      props.sourceData.map(item => <TreeItem treeProps={props} item={item} leave={1} key={item.key} />)
    }
  </div>;
};
Tree.displayName = componentName;
Tree.defaultProps = {
  multiple: true
};
export default Tree;
