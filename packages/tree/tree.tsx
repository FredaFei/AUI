import * as React from 'react';
import classes, { createScopedClasses } from '../utils/classnames';
import './style';
import TreeItem from './treeItem';
import { useEffect, useState } from 'react';

const componentName = 'Tree';
const sc = createScopedClasses(componentName);

const Tree: React.FunctionComponent<TreeProps> = props => {
  // const selectedMapRef = useRef<{}>({});
  const {sourceData, selected} = props;
  const [selectedMap, setSelectedMap] = useState({});
  useEffect(() => {
    x();
  }, []);
  const x = () => {
    const result = {};
    sourceData.map(item => {
      console.log('item selected');
      console.log(item,selected);
      console.log(selected.indexOf(item.key) > -1 && item.children);

      if (selected.indexOf(item.key) > -1 && item.children) {
        if (!result[item.key]) {result[item.key] = [];}
        result[item.key] = item.children.map(i => i.key);
      }
    });
    console.log('resultMap');
    console.log(result);
    setSelectedMap(result);
  };
  return <div className={classes(sc(''))}>
    {
      sourceData.map(item => <TreeItem treeProps={props} item={item} leave={1}
                                       key={item.key} selectedMap={selectedMap}/>)
    }
  </div>;
};
Tree.displayName = componentName;
Tree.defaultProps = {
  multiple: true
};
export default Tree;
