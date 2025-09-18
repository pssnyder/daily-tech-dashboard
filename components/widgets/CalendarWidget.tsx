import React from 'react';
import { WidgetComponentProps, CalendarEvent } from '../../types';
import { CalendarDaysIcon, LinkIcon } from '../icons/GenericIcons';

const mockEvents: CalendarEvent[] = [
  { id: '1', title: 'Team Sync Meeting', startTime: '10:00 AM', endTime: '11:00 AM', link: '#' },
  { id: '2', title: 'Project Phoenix Demo Prep', startTime: '01:00 PM', endTime: '03:00 PM' },
  { id: '3', title: 'Dentist Appointment', startTime: '04:30 PM', endTime: '05:00 PM', link: '#'},
  { id: '4', title: 'Gym Session', startTime: 'Tomorrow 08:00 AM'},
];


const CalendarWidget: React.FC<WidgetComponentProps> = () => {
  // In a real app, fetch events from an API (e.g., Google Calendar)
  const [events, setEvents] = React.useState<CalendarEvent[]>(mockEvents.slice(0,3)); // Show first 3

  if (events.length === 0) {
    return <p className="text-slate-400 text-center">No upcoming events.</p>;
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center text-slate-400 mb-2">
        <CalendarDaysIcon className="w-5 h-5 mr-2 text-sky-500" />
        <span className="text-md font-medium">Today & Upcoming</span>
      </div>
      <ul className="space-y-3">
        {events.map(event => (
          <li key={event.id} className="p-3 bg-slate-700/60 rounded-md hover:bg-slate-700 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-slate-100">{event.title}</p>
                <p className="text-sm text-sky-400">{event.startTime}{event.endTime ? ` - ${event.endTime}` : ''}</p>
              </div>
              {event.link && (
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <LinkIcon className="w-4 h-4" />
                </a>
              )}
            </div>
            {event.isAllDay && <p className="text-xs text-slate-500 mt-1">All day</p>}
          </li>
        ))}
      </ul>
      {mockEvents.length > 3 && <p className="text-xs text-slate-500 text-center mt-3">+{mockEvents.length - 3} more</p>}
    </div>
  );
};

export default CalendarWidget;
