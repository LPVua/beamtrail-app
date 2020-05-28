import React from 'react';
import { cx } from 'emotion';
import * as css from './styles';

export const RadioComponent: React.FunctionComponent<{
  isActive: boolean;
  onChange?(): void;
}> = ({isActive, ...props}) =>
<div className={css.radio} onClick={props.onChange}>
  <div className={cx(
  css.toggle,
  isActive && css.toggleActive
)}>
    <div className={cx(
      css.toggleSwitch,
      isActive && css.toggleSwitchActive
    )}></div>
  </div>
  <div className={css.radioLabel}>{props.children}</div>
</div>
