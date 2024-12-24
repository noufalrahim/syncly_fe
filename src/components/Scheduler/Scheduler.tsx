import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CustomToolbar, EventsCard } from './components';
import { AppBar } from '../AppBar';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { getEvents } from './api/getEvents';
import { EventType } from './types';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Scheduler = () => {
  const [value, setValue] = React.useState(new Date());

  const [events, setEvents] = React.useState<EventType[]>([]);

  const projectData = useSelector((state: AppState) => state);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const events: EventType[] = await getEvents(projectData.selectedProjectId);
      setEvents(events);
    };

    fetchEvents();
  }, [projectData.selectedProjectId]);

  const handleNavigate = (action: 'PREV' | 'NEXT' | 'TODAY', view: string, isFromMonthMap: boolean, id: number) => {
    if (isFromMonthMap) {
      setValue((prev) => new Date(prev.getFullYear(), id - 1, 1));
      return;
    }

    switch (action) {
      case 'PREV':
        if (view === 'month') {
          setValue((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
        } else if (view === 'week') {
          setValue((prev) => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 7));
        } else {
          setValue((prev) => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 1));
        }
        break;
      case 'NEXT':
        if (view === 'month') {
          setValue((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
        } else if (view === 'week') {
          setValue((prev) => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 7));
        } else {
          setValue((prev) => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 1));
        }
        break;
      case 'TODAY':
        setValue(new Date());
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-4 px-5 pb-5">
      <AppBar title="Calendar" description="Manage your tasks and projects" />
      <Calendar
        localizer={localizer}
        date={value}
        events={events}
        views={['month', 'week', 'day']}
        defaultView="month"
        toolbar={true}
        showAllEvents
        step={30}
        timeslots={2}
        style={{
          border: '2px dashed #e0e0e0',
          padding: '10px',
        }}
        onNavigate={(newDate, view, action) => {
          if (action === 'PREV' || action === 'NEXT' || action === 'TODAY') {
            handleNavigate(action, view, false, 0);
          } else {
            setValue(newDate);
          }
        }}
        className="h-full"
        components={{
          eventWrapper: ({ event }) => <EventsCard id={event.id!} title={event.title} assignee={event.assignee!} status={event.status} event={event} />,
          toolbar: () => {
            return <CustomToolbar date={value} onNavigate={(action: 'PREV' | 'NEXT', isFromMonthMap: boolean, id: number) => handleNavigate(action, 'month', isFromMonthMap, id)} />;
          },
        }}
        formats={{
          weekdayFormat: (date, culture, localizer) => localizer?.format(date, 'EEEE', culture) || '',
        }}
      />
    </div>
  );
};

export default Scheduler;
