import * as React from 'react';
import classes, { createScopedClasses } from '../utils/classnames';
import './style';
import TreeItem from './treeItem';

const componentName = 'Tree';
const sc = createScopedClasses(componentName);

const Tree: React.FunctionComponent<TreeProps> = props => {
  const { sourceData } = props;
  const onItemChange = (values: string[]) => {
    console.log('tree onItemChange values');
    console.log(values);
    props.onChange(values)
  }
  return <div className={ classes(sc('')) }>
    {
      sourceData.map(item => <TreeItem treeProps={ props } item={ item } leave={ 1 }
                                       key={ item.key } onItemChange={ onItemChange }/>)
    }
  </div>;
};
Tree.displayName = componentName;
Tree.defaultProps = {
  multiple: true
};
export default Tree;
