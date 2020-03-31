import * as React from 'react';
import { createScopedClasses } from '../utils/classnames';
import './style';
import { useEffect, useRef, useState } from 'react';
import useExceptFirstUpdate from '../hooks/useExceptFirstUpdate';
import Checkbox from '../checkbox/checkbox';
import { flatten, intersection, towArraysAreEqual, unique } from '../utils/collection';

const componentName = 'TreeItem';
const sc = createScopedClasses(componentName);

interface TreeItemProps {
  treeProps: TreeProps
  item: SourceItem
  leave: number
  selectedMap?: SelectedMap
  onItemChange: (values: string[]) => void
};
const collectionChildrenValues = (item: SourceItem): string[] => {
  return flatten(item.children?.map(i => [i.key, collectionChildrenValues(i)]) as [])
}
const TreeItem: React.FunctionComponent<TreeItemProps> = props => {
    const { item, leave, treeProps } = props;
    const [expanded, setExpanded] = useState(true);
    const childrenRef = useRef<HTMLDivElement>(null);

    const classes = { [`leave-${ leave }`]: true, 'item': true };
    useExceptFirstUpdate(expanded, () => {
      if (!childrenRef.current) {return;}
      if (expanded) {
        childrenRef.current.style.position = 'absolute';
        childrenRef.current.style.opacity = '0';
        childrenRef.current.style.height = 'auto';
        const { height } = childrenRef.current.getBoundingClientRect();
        childrenRef.current.style.position = '';
        childrenRef.current.style.opacity = '';
        childrenRef.current.style.height = `0px`;
        childrenRef.current.getBoundingClientRect();
        childrenRef.current.style.height = `${ height }px`;
        childrenRef.current.addEventListener('transitionend', afterExpand);
      } else {
        const { height } = childrenRef.current.getBoundingClientRect();
        childrenRef.current.style.height = `${ height }px`;
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
    useEffect(() => {
      onItemChange(treeProps.selected)
    }, [])
    const onItemChange = (values: string[]) => {
      const childrenValues = collectionChildrenValues(item)
      const common = intersection(values, childrenValues)
      console.log('item onItemChange values')
      console.log(values)
      if (common.length !== 0) {
        // 半选
        props.onItemChange(unique(values.concat(item.key)))
      } else {
        // 全选
        props.onItemChange(values.filter(v => v !== item.key))
      }
    }

    const onChange = (e: React.FormEvent) => {
      const checked = (e.target as HTMLInputElement).checked;
      treeProps.multiple ? multipleSelected(checked) : singleSelected(checked);
    };
    const multipleSelected = (checked: boolean) => {
      const childrenValues = collectionChildrenValues(item)
      console.log('childrenValues')
      console.log(childrenValues)
      if (checked) {
        props.onItemChange(unique([...treeProps.selected, item.key, ...childrenValues]))
      } else {
        props.onItemChange(treeProps.selected.filter(v => v !== item.key && childrenValues.indexOf(v) === -1))
      }
    };
    const singleSelected = (checked: boolean) => {
      if (checked) {
        props.onItemChange([item.key]);
      } else {
        props.onItemChange([]);
      }
    };
    const checkedAll = () => {
      const childrenValues = collectionChildrenValues(item)
      return towArraysAreEqual(childrenValues, intersection(treeProps.selected, childrenValues))
    }
    const indeterminate = () => {
      const childrenValues = collectionChildrenValues(item)
      if (!treeProps.selected.includes(item.key)) {return false}
      const common = intersection(treeProps.selected, childrenValues)
      return common.length !== childrenValues.length
    }
    return <div className={ sc(classes) } key={ item.key }>
      <div className={ sc('text') }>
        {
          item.children ?
            <Checkbox indeterminate={ indeterminate() } checked={ checkedAll() }
                      onChange={ onChange }>{ item.text }</Checkbox> :
            <Checkbox checked={ treeProps.selected.includes(item.key) } value={ item.key }
                      onChange={ onChange }>{ item.text }</Checkbox>
        }
        {
          item.children && <span className={ sc('expand') }>
            { expanded ? <span onClick={ collapse }>-</span> : <span onClick={ expand }>+</span> }
          </span>
        }
      </div>
      <div className={ sc('children', { collapsed: !expanded }) } ref={ childrenRef }>
        { item.children?.map(subItem => <TreeItem treeProps={ treeProps } onItemChange={ onItemChange }
                                                  item={ subItem } leave={ leave + 1 } key={ subItem.key }/>) }
      </div>
    </div>;

  }
;
TreeItem.displayName = componentName;
export default TreeItem;
