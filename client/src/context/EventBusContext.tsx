import { createContext, useContext } from 'react';

export type NotificationT = null | {
  message: string;
  status: number | string;
};

export interface EventBusI {
  notification: NotificationT;
  show: Function;
}

export const EventBusContext = createContext<EventBusI | null>(null);

export const useEventBus = () => useContext(EventBusContext);
