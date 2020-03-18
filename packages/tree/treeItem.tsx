import * as React from 'react';
import { createScopedClasses } from '../utils/classnames';
import './style';
import { ChangeEventHandler, useRef, useState } from 'react';
import useExceptFirstUpdate from '../hooks/useExceptFirstUpdate';

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
  const childrenRef = useRef<HTMLDivElement>(null);

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
  useExceptFirstUpdate(expanded, () => {
    console.log('expanded change');
    if (!childrenRef.current) {return;}
    if (expanded) {
      console.log('open');
      childrenRef.current.style.position = 'absolute';
      childrenRef.current.style.opacity = '0';
      childrenRef.current.style.height = 'auto';
      const {height} = childrenRef.current.getBoundingClientRect();
      childrenRef.current.style.position = '';
      childrenRef.current.style.opacity = '';
      childrenRef.current.style.height = `0px`;
      childrenRef.current.getBoundingClientRect();
      childrenRef.current.style.height = `${height}px`;
      childrenRef.current.addEventListener('transitionend', afterExpand);
    } else {
      console.log('close');
      const {height} = childrenRef.current.getBoundingClientRect();
      childrenRef.current.style.height = `${height}px`;
      childrenRef.current.getBoundingClientRect();
      childrenRef.current.style.height = `0px`;
      childrenRef.current.addEventListener('transitionend', afterCollapse);
    }

  });
  const afterExpand = () => {
    if (!childrenRef.current) {return;}
    childrenRef.current.style.height = '';
    childrenRef.current.removeEventListener('transitionend', afterExpand);
  };
  const afterCollapse = () => {
    if (!childrenRef.current) {return;}
    childrenRef.current.style.height = '';
    childrenRef.current.classList.add(sc('gone'));
    childrenRef.current.removeEventListener('transitionend', afterCollapse);
  };
  const expand = () => {
    setExpanded(true);
  };
  const collapse = () => {
    setExpanded(false);
  };
  return <div className={sc(classes)} key={item.value}>
    <div className={sc('text')}>
      <label>
        <input type="checkbox" checked={treeProps.selected.includes(item.value)} onChange={onChange}/>
        {item.text}
      </label>
      {
        item.children && <span className={sc('expand')}>
            {expanded ? <span onClick={collapse}>-</span> : <span onClick={expand}>+</span>}
          </span>
      }
    </div>
    <div className={sc('children', {collapsed: !expanded})} ref={childrenRef}>
      {item.children?.map(subItem => <TreeItem treeProps={treeProps}
                                               item={subItem} leave={leave + 1} key={subItem.value}/>)}
    </div>
  </div>;

};
TreeItem.displayName = componentName;
export default TreeItem;
