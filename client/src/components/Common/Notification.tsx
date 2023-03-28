import Styles from './Notification.module.css';
import { EventBusI, useEventBus } from '../../context/EventBusContext';
import { useState, useEffect } from 'react';

const Notification = ({ children }: { children: React.ReactNode }) => {
  const { notification } = useEventBus() as EventBusI;

  const [style, setStyle] = useState('');

  useEffect(() => {
    if (notification?.status === 'loading') {
      setStyle('');
    }

    if (notification?.status === 'success') {
      setStyle('success');
    }

    if (notification?.status === 'error') {
      console.log(notification.status);
      setStyle(Styles.error);
    }
  }, [notification]);

  return (
    <>
      {children}

      {notification && (
        <div className={`${Styles.wrapper} ${style}`}>
          {notification.status} {notification.message}
        </div>
      )}
    </>
  );
};

export default Notification;
