import React from "react";
import { SensorInterface } from "../../services/sensor.interface";
import * as css from './styles';

export const CardComponent: React.FunctionComponent<{
  sensor: SensorInterface,
  onToggle(sensor: SensorInterface): void
}> = ({sensor, ...props}) => 
<div className={css.card}>
  <div className={css.title}>
    {sensor.name}
  </div>
  <div className={css.value}>
    { sensor.connected ? `${sensor.value} ${sensor.unit}` : 'Disconnected' }
  </div>

  <button 
    className={css.connectButton}
    onClick={() => props.onToggle(sensor)}>{sensor.connected ? 'Disconnect' : 'Connect' }</button>
</div>