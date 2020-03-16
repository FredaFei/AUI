import * as React from 'react';
import { createScopedClasses } from '../utils/classnames';
import './style';
import { HTMLAttributes, RefObject, useEffect, useRef } from 'react';

const componentName = 'ClickOutside';
const sc = createScopedClasses(componentName);

interface Props extends HTMLAttributes<HTMLDivElement> {
  handler?: (e: any) => void
  exclude?: RefObject<Element>
}

const ClickOutside: React.FunctionComponent<Props> = props => {
  const myRef = useRef<HTMLDivElement>(null);
  const {children, exclude, handler, ...restProps} = props;

  const onHandler = (e: MouseEvent | TouchEvent) => {
    if (myRef.current === null) {
      return;
    }
    if (exclude && exclude.current && exclude.current.contains(e.target as Node)) {
      return;
    }
    if (!document.contains(e.target as Node)) {
      return;
    }
    if (!myRef.current.contains(e.target as Node)) {
      handler && handler.call(e.target, e);
    }
  };
  useEffect(() => {
    handler && document.addEventListener('click', onHandler);
    return () => {
      handler && document.removeEventListener('click', onHandler);
    };
  }, []);

  return (
    <div data-role={componentName} className={sc('')} ref={myRef} {...restProps}>
      {children}
    </div>
  );
};

ClickOutside.displayName = componentName;
ClickOutside.defaultProps = {};
export default ClickOutside;
