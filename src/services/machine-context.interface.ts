import { SensorInterface } from "./sensor.interface";

export interface MachineContextInterface {
  isShowingConnected: boolean;
  sensors: {
    byId: Record<string, SensorInterface>,
    ids: Array<string>
  }
}
