import React from 'react';

import * as css from './styles';
import { RadioComponent } from '../radio';
import { MainComponentPropsInterface } from './component-props.interface';
import { CardComponent } from '../card';

export const MainComponent: React.FunctionComponent<MainComponentPropsInterface> = (props) =>
<div className={css.main}>
  <div className={css.header}>
    <div>
      Sensors Management
    </div>

    <RadioComponent isActive={props.isShowingConnected} onChange={props.onChangeIsShowingConnected}>
      Show connected
    </RadioComponent>
  </div>
  <div className={css.content}>
    {
      props.sensors.map(
        sensor =>
        // TODO: Debounce card component or use concurrent mode
        <CardComponent sensor={sensor} onToggle={props.onToggleSensor} />
      )
    }
  </div>
</div>
