import { MachineContextInterface } from '../../services/machine-context.interface';
import { socketService } from '../../services';
import { Machine } from 'xstate';
import { MainActions as actions } from './actions';

export const MainMachine = Machine<MachineContextInterface>({
  initial: 'idle',
  context: {
    isShowingConnected: false,
    sensors: {
      byId: {},
      ids: []
    }
  },
  states: {
    idle: {
      invoke: {
        id: 'socket',
        src: 'socketService'
      },
      on: {
        TOGGLE_IS_SHOWING_CONNECTED: {
          actions: ['toggleIsShowingConnected']
        },
        TOGGLE_SENSOR: {
          actions: ['sendToggleSensorToSocketService']
        },
        SENSOR: {
          actions: ['addSensor']
        }
      }
    }
  }
}, {
  actions,
  services: {
    socketService,
  }
});
