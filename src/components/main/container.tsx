import React from 'react';

import { useMachine } from '@xstate/react';
import { MainComponent } from './component';
import { MainMachine } from './machine';


export const MainContainer: React.FunctionComponent = () => {
  const [current, send] = useMachine(MainMachine, {
    devTools: process.env.NODE_ENV === 'development'
  });

  return <MainComponent
    isShowingConnected={current.context.isShowingConnected}
    sensors={current.context.sensors.ids.filter(
      (id) => {
        if(current.context.isShowingConnected) {
          return current.context.sensors.byId[id].connected
        }

        return true;
      }
    ).map(
      (id) => current.context.sensors.byId[id]
    )}
    onToggleSensor={(data) => {
      send('TOGGLE_SENSOR', {data})
    }}
    onChangeIsShowingConnected={() => send('TOGGLE_IS_SHOWING_CONNECTED')}
  />
}
