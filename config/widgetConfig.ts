import { WidgetConfig, WidgetType } from '../types';

export const activeWidgets: WidgetConfig[] = [
  {
    id: 'clock1',
    componentType: WidgetType.Clock,
    title: 'Current Time',
    size: 'medium',
  },
  {
    id: 'pcMetrics1',
    componentType: WidgetType.PCMetrics,
    title: 'System Overview',
    size: 'large',
  },
  {
    id: 'weather1',
    componentType: WidgetType.Weather,
    title: 'Weather Forecast',
    size: 'medium',
    config: {
      location: 'New York, NY' // Example specific config
    }
  },
  {
    id: 'calendar1',
    componentType: WidgetType.Calendar,
    title: 'Upcoming Events',
    size: 'large',
  },
  {
    id: 'placeholder1',
    componentType: WidgetType.Placeholder,
    title: 'Future Module A',
    size: 'medium',
  },
  {
    id: 'placeholder2',
    componentType: WidgetType.Placeholder,
    title: 'Future Module B',
    size: 'medium',
  },
];
