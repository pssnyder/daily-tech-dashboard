import { useState, useEffect } from 'react';

interface DateTimeState {
  time: string;
  date: string;
  dayOfWeek: string;
}

const useDateTime = (): DateTimeState => {
  const [dateTime, setDateTime] = useState<DateTimeState>(() => {
    const now = new Date();
    return {
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      date: now.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' }),
      dayOfWeek: now.toLocaleDateString([], { weekday: 'long' }),
    };
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      setDateTime({
        time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        date: now.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' }),
        dayOfWeek: now.toLocaleDateString([], { weekday: 'long' }),
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return dateTime;
};

export default useDateTime;
