import React from 'react';
import useDateTime from '../../hooks/useDateTime';
import { WidgetComponentProps } from '../../types';
import { ClockIcon } from '../icons/GenericIcons';


const ClockWidget: React.FC<WidgetComponentProps> = () => {
  const { time, date, dayOfWeek } = useDateTime();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <ClockIcon className="w-12 h-12 text-sky-400 mb-3" />
      <div className="text-5xl font-bold text-slate-100 tabular-nums">
        {time}
      </div>
      <div className="text-xl text-slate-300 mt-1">
        {dayOfWeek}
      </div>
      <div className="text-md text-slate-400">
        {date}
      </div>
    </div>
  );
};

export default ClockWidget;
