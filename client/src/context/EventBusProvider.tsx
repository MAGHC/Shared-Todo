import { EventBusContext, NotificationT } from './EventBusContext';
import { useState, useEffect } from 'react';

const EventBusProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeNotice, setActiveNotice] = useState<null | NotificationT>(null);

  useEffect(() => {
    if (activeNotice?.status === 'error' || activeNotice?.status === 'sucess') {
      const hideTimer = setTimeout(() => {
        setActiveNotice(null);
      }, 2000);

      return () => {
        clearTimeout(hideTimer);
      };
    }
  }, [activeNotice]);

  const handleShow = (notice: NotificationT) => {
    setActiveNotice({
      status: notice!!.status,
      message: notice!!.message,
    });
  };

  console.log(activeNotice);

  return (
    <EventBusContext.Provider value={{ notification: activeNotice, show: handleShow }}>
      {children}
    </EventBusContext.Provider>
  );
};

export default EventBusProvider;
