import * as React from 'react';
import classes, { createScopedClasses } from '../utils/classnames';

import './style';

const componentName = 'Input';
const sc = createScopedClasses(componentName);

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  before?: string | React.ReactNode
  after?: string | React.ReactNode
  addOnBefore?: string | React.ReactNode
  addOnAfter?: string | React.ReactNode
  label?: string
  labelPosition?: 'left' | 'top'
  error?: string
  errorPosition?: 'right' | 'bottom'
  size?: 'big' | 'small'
  type?: 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'date'
    | 'time'
    | 'search'
    | 'tel'
    | 'url'
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>
}

const Input: React.FunctionComponent<Props> = props => {
  const {
    label,
    labelPosition,
    error,
    errorPosition,
    size,
    type,
    style,
    className,
    before,
    after,
    addOnBefore,
    addOnAfter,
    onEnter,
    ...rest
  } = props;
  const class1 = {
    'label-left': labelPosition === 'left',
    'label-top': labelPosition === 'top'
  };
  const class2 = {
    'error-bottom': errorPosition === 'bottom',
    'error-right': errorPosition === 'right'
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onEnter && onEnter.call(null, e);
    }
    props.onKeyDown && props.onKeyDown.call(null, e);
  };
  return (
    <div
      className={sc('wrapper', class1, {
        big: size === 'big',
        small: size === 'small'
      })}
    >
      {label && <div className={sc('label')}>{label}</div>}
      <div className={sc('inputAndError')}>
        <div className={sc('content', {'before-or-after': before || after})}>
          {before && <span className={sc('before')}>{before}</span>}
          {addOnBefore && <span className={sc('add-on-before')}>{addOnBefore}</span>}
          <input
            className={classes(sc(''), className)}
            type={type}
            style={style}
            {...rest}
            onKeyDown={onKeyDown}
          />
          {after && <span className={sc('after')}>{after}</span>}
          {addOnAfter && <span className={sc('add-on-after')}>{addOnAfter}</span>}
        </div>
        {error && <span className={sc('error', class2)}>{error}</span>}
      </div>
    </div>
  );
};

Input.displayName = componentName;
Input.defaultProps = {
  errorPosition: 'right',
  type: 'text',
  labelPosition: 'top'
};
Input.propTypes = {};

export default Input;
