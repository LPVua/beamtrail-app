import { SensorInterface } from "../../services/sensor.interface";

export interface MainComponentPropsInterface {
  isShowingConnected: boolean;
  onChangeIsShowingConnected(): void;
  onToggleSensor(sensor: SensorInterface): void;
  sensors: Array<SensorInterface>
}
