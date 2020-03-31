import * as React from 'react';
import classes, { createScopedClasses } from '../utils/classnames';
import './style';
import TreeItem from './treeItem';

const componentName = 'Tree';
const sc = createScopedClasses(componentName);

type Style = {
  className?: string
  style?: React.CSSProperties
}

const Tree: React.FunctionComponent<TreeProps & Style> = props => {
  const { sourceData } = props;
  const onItemChange = (values: string[]) => {
    console.log('tree onItemChange values');
    console.log(values);
    props.onChange(values)
  }
  return <div className={ classes(sc(''), props.className) }>
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
