import * as React from 'react';
import { createScopedClasses } from '../utils/classnames';
import './style';
import { ChangeEventHandler, useEffect, useState } from 'react';

const componentName = 'TreeItem';
const sc = createScopedClasses(componentName);

interface TreeItemProps {
  treeProps: TreeProps
  item: SourceItem
  leave: number
};
const TreeItem: React.FunctionComponent<TreeItemProps> = props => {
  const {item, leave, treeProps} = props;
  const [expanded, setExpanded] = useState(true);
  const classes = {[`leave-${leave}`]: true, 'item': true};
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const checked = e.target.checked;
    treeProps.multiple ? multipleSelected(checked) : singleSelected(checked);
  };
  const multipleSelected = (checked: boolean) => {
    if (checked) {
      treeProps.onChange([...treeProps.selected, item.value]);
    } else {
      treeProps.onChange(treeProps.selected.filter(value => value !== item.value));
    }
  };
  const singleSelected = (checked: boolean) => {
    if (checked) {
      treeProps.onChange([item.value]);
    } else {
      treeProps.onChange([]);
    }
  };
  useEffect(()=>{
    console.log('expanded');
    console.log(expanded);
  },[expanded])
  const expand = () => {
    setExpanded(false);
  };
  const collapse = () => {
    setExpanded(true);
  };
  return <div className={sc(classes)} key={item.value}>
    <div className={sc('text')}>
      <label>
        <input type="checkbox" checked={treeProps.selected.includes(item.value)} onChange={onChange}/>
        {item.text}
      </label>
      {
        item.children && <span className={sc('expand')}>
            {expanded ? <span onClick={expand}>+</span> : <span onClick={collapse}>-</span>}
          </span>
      }
    </div>
    <div className={sc('children', {collapsed: expanded})}>
      {item.children?.map(subItem => <TreeItem treeProps={treeProps}
                                               item={subItem} leave={leave + 1} key={subItem.value}/>)}
    </div>
  </div>;

};
TreeItem.displayName = componentName;
export default TreeItem;
