import { assign, send, ActionObject, AnyEventObject } from 'xstate';
import { MachineContextInterface } from '../../services/machine-context.interface';

export const MainActions: Record<string, ActionObject<MachineContextInterface, AnyEventObject>> = {
  toggleIsShowingConnected: assign({
    isShowingConnected: (context) => (!context.isShowingConnected)
  }),
  sendToggleSensorToSocketService: send(
    (_, event) => event, { to: 'socket'}
  ),
  addSensor: assign({
    sensors: (context, event) => {

      const byId = context.sensors.byId;
      const ids = [...context.sensors.ids];

      byId[event.data.id] = event.data;

      if(!ids.includes(event.data.id)) {
        ids.push(event.data.id)
      }

      return {
        byId,
        ids
      }
    }
  })
};
