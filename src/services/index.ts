import {Receiver, EventObject, Sender } from "xstate";
import { SensorInterface } from "./sensor.interface";

export const socketService = () => (callback: Sender<{
  type: 'SENSOR',
  data: SensorInterface
}>, onReceive: Receiver<EventObject>) => {
  const socket = new WebSocket('ws://localhost:5000');
  socket.onmessage = (e) => {
    try {
      const data = JSON.parse(e.data);

      callback({
        type: 'SENSOR',
        data,
      })
    } catch (e) {
      console.error(e)
    }
  }

  onReceive(
    (event) => {
      if(event.type === 'TOGGLE_SENSOR') {
        const e = event as {
          type: 'TOGGLE_SENSOR',
          data: SensorInterface
        };
        socket.send(JSON.stringify({
          command: (e).data.connected ? 'disconnect' : 'connect',
          id: (e).data.id
        }))
      }
    }
  )

  return () => socket.close();
}