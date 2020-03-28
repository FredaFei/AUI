import * as React from 'react';
import classes, { createScopedClasses } from '../utils/classnames';
import TabPane, { Props as PaneProps } from './tabPane';
import './style';
import { useEffect, useRef, useState } from 'react';

const componentName = 'Tabs';
const sc = createScopedClasses(componentName);

export interface Props extends StyledProps {
  activeKey?: string
  defaultActiveKey?: string
  lineWidthOrHeight?: string | number
  direction?: 'horizontal' | 'vertical'
  onChange?: (key: string) => any
}

interface Layout {
  key: string
  active?: boolean
}

type TLayout = (a: React.ReactElement<PaneProps>, b: Layout) => {}

const Tabs: React.FunctionComponent<Props> = props => {
  const [activeTabKey, setActiveTabKey] = useState<string>('');
  const [lineWidth, setLineWidth] = useState<number>(0);
  const [lineHeight, setLineHeight] = useState<number>(0);
  const [lineX, setLineX] = useState<number>(0);
  const [lineY, setLineY] = useState<number>(0);
  const [navX, setNavX] = useState<number>(0);
  const [navY, setNavY] = useState<number>(0);

  const {className, direction, lineWidthOrHeight, defaultActiveKey, activeKey, style} = props;

  const keysRef = useRef<Array<string>>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const navViewRef = useRef<HTMLDivElement>(null);
  const tabItemsRef = useRef<HTMLDivElement>(null);
  const tabItemRef = useRef<HTMLDivElement>(null);

  const navsStyle = props.direction === 'horizontal' ? {transform: `translate3d(${navX}px, 0, 0)`} : {transform: `translate3d( 0,${navY}px,0)`};
  const lineStyle = props.direction === 'horizontal' ? {
    width: `${lineWidth}px`,
    transform: `translate3d(${lineX}px, 0, 0)`,
  } : {
    height: `${lineHeight}px`,
    transform: `translate3d(0,${lineY}px, 0)`,
  };
  useEffect(() => {
    const active = 'defaultActiveKey' in props ? defaultActiveKey : 'activeKey' in props ? activeKey : (keysRef.current[0] || '');
    setActiveTabKey(active as string);
  }, []);

  useEffect(() => {
    calculateLineStyle(getCurrentTabsIndex(activeTabKey));
    hasTabItemHidden() && calculateNavsStyle(getCurrentTabsIndex(activeTabKey));
  }, [activeTabKey, direction]);

  const hasTabItemHidden = () => {
    const {width, height} = tabItemsRef.current!.getBoundingClientRect();
    const {width: viewWidth, height: viewHeight} = navViewRef.current!.getBoundingClientRect();
    if (props.direction === 'horizontal' && viewWidth >= width) {return false;}
    if (props.direction === 'vertical' && viewHeight >= height) {return false;}
    return true;
  };
  const getCurrentItemOffset = (index: number, tabItemElement: HTMLElement) => {
    let width = 0, height = 0, left = 0, top = 0;
    if (tabItemElement) {
      const tabItems = tabItemElement.querySelectorAll('.am-tabs-nav-item');
      for (let i = 0; i < tabItems.length; i++) {
        let {width: itemWidth, height: itemHeight} = tabItems[i].getBoundingClientRect();
        if (i < index) {
          left += itemWidth;
          top += itemHeight;
        }
        if (i === index) {
          width = itemWidth;
          height = itemHeight;
        }
      }
    }
    return {width, left, height, top};
  };

  const getCurrentTabsIndex = (value: string): number => {
    const index = keysRef.current.indexOf(value);
    return index >= 0 ? index : 0;
  };
  const tabItemViewPosition = (itemLeftOrRight: number, itemWidthOrHeight: number,
                               viewWidthOrHeight: number, widthOrHeight: number): number => {
    const offset = itemLeftOrRight + itemWidthOrHeight / 2;
    let delta = offset - viewWidthOrHeight / 2;
    if (delta > 0) {
      if (widthOrHeight - itemLeftOrRight - itemWidthOrHeight <= viewWidthOrHeight / 2) {
        delta = widthOrHeight - viewWidthOrHeight;
      }
    } else {
      delta = 0;
    }
    return delta;
  };
  const calculateNavsStyle = (index: number): any => {
    if (index < 0) {return;}
    const navsElement = navViewRef.current;
    const tabItemsElement = tabItemsRef.current;
    if (!navsElement || !tabItemsElement) {return;}
    const {width: viewWidth, height: viewHeight} = navsElement.getBoundingClientRect();
    const {width: itemWidth, height: itemHeight, left: itemLeft, top: itemTop} = getCurrentItemOffset(index, tabItemsElement);
    const {width, height} = tabItemsElement.getBoundingClientRect();

    if (props.direction === 'horizontal') {
      setNavX(-tabItemViewPosition(itemLeft, itemWidth, viewWidth, width));
    } else {
      setNavY(-tabItemViewPosition(itemTop, itemHeight, viewHeight, height));
    }
  };
  const calculateLineStyle = (index: number): any => {
    if (index < 0) {return;}
    const lineElement = lineRef.current;
    const tabItemsElement = tabItemsRef.current;
    if (!lineElement || !tabItemsElement || !tabItemsElement.children) {return;}
    const el = tabItemsElement.children[index];
    let {left: left1, top: top1} = tabItemsElement.getBoundingClientRect();
    let {width, left: left2, height, top: top2} = el.getBoundingClientRect();

    const lineWidth = lineWidthOrHeight ? +lineWidthOrHeight : width;
    const lineHeight = lineWidthOrHeight ? +lineWidthOrHeight : height;
    if (props.direction === 'horizontal') {
      setLineWidth(lineWidth);
      setLineX(left2 - left1 + (width - lineWidth) / 2);
    } else {
      setLineHeight(lineHeight);
      setLineY(top2 - top1 + (height - lineHeight) / 2);
    }
  };

  const handleClick = (key: string, disabled: boolean): any => {
    if (disabled) {
      return false;
    }
    setActiveTabKey(key);
    props.onChange && props.onChange(key);
  };
  const renderTabsNav = (child: React.ReactElement, options: Layout) => {
    const itemClass = {
      disabled: child.props.disabled,
      active: options.active
    };
    return (
      <div
        data-role="tabsNavItem"
        key={`nav-${options.key}`}
        className={sc('nav-item', itemClass)}
        onClick={() => handleClick(options.key, child.props.disabled)}
        ref={tabItemRef}
      >{child.props.tab}</div>
    );
  };

  const renderTabsPane = (child: React.ReactElement, options: Layout) => {
    return React.cloneElement(child, {
      active: options.active
    });
  };
  const renderLayout = (layout: TLayout) => {
    const children = React.Children.map(props.children, child => {
      const element = child as React.ReactElement<PaneProps>;
      if (element.type !== TabPane) {
        console.warn('Tabs 组件的子组件只能是 TabPane组件');
        return null;
      }
      const key = element.key as string;
      keysRef.current.push(key);
      return element.type === TabPane && layout(element, {key, active: activeTabKey === key});
    });
    return children.filter(i => i);
  };

  return (
    <div data-role={componentName} className={classes(sc('wrapper', direction), className)} style={style}>
      <div className={sc('nav-wrapper')} ref={navViewRef}>
        <div className={sc('nav')} ref={tabItemsRef} style={navsStyle}>
          {renderLayout(renderTabsNav)}
          <div className={sc('nav-line')} ref={lineRef} style={lineStyle}/>
        </div>
      </div>
      <ul className="am-tabs-pane-body">
        {renderLayout(renderTabsPane)}
      </ul>
    </div>
  );
};

Tabs.displayName = componentName;
Tabs.defaultProps = {
  direction: 'horizontal'
};
export default Tabs;
