import React from 'react';
import { WidgetConfig, WidgetType, WidgetComponentRegistry, WidgetComponentProps } from '../types';
import WidgetCard from './WidgetCard';

// Import widget components - In a larger app, consider dynamic imports or a more sophisticated registry
import ClockWidget from './widgets/ClockWidget';
import WeatherWidget from './widgets/WeatherWidget';
import PCMetricsWidget from './widgets/PCMetricsWidget';
import CalendarWidget from './widgets/CalendarWidget';
import PlaceholderWidget from './widgets/PlaceholderWidget';

interface WidgetGridProps {
  widgets: WidgetConfig[];
}

// Map widget type strings from config to actual component references
const widgetComponentRegistry: WidgetComponentRegistry = {
  [WidgetType.Clock]: ClockWidget,
  [WidgetType.Weather]: WeatherWidget,
  [WidgetType.PCMetrics]: PCMetricsWidget,
  [WidgetType.Calendar]: CalendarWidget,
  [WidgetType.Placeholder]: PlaceholderWidget,
  // Add other widgets here as they are created
  [WidgetType.ProjectDemo]: PlaceholderWidget, // Placeholder for now
  [WidgetType.GeminiText]: PlaceholderWidget, // Placeholder for now
};

const WidgetGrid: React.FC<WidgetGridProps> = ({ widgets }) => {
  if (!widgets || widgets.length === 0) {
    return <p className="text-center text-slate-400">No widgets configured.</p>;
  }

  const getSizeClass = (size?: 'small' | 'medium' | 'large' | 'full'): string => {
    switch (size) {
      case 'small':
        return 'md:col-span-1';
      case 'medium':
        return 'md:col-span-1 lg:col-span-1'; // Adjusted for potentially more columns on larger screens
      case 'large':
        return 'md:col-span-2 lg:col-span-2';
      case 'full':
        return 'md:col-span-2 lg:col-span-3'; // Example full width for a 3-col grid
      default:
        return 'md:col-span-1'; // Default size
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {widgets.map((widget) => {
        const WidgetComponent = widgetComponentRegistry[widget.componentType];
        if (!WidgetComponent) {
          console.warn(`Widget component for type "${widget.componentType}" not found.`);
          return (
            <WidgetCard key={widget.id} title={`Error: ${widget.title}`}>
              <p className="text-red-400">Widget type not implemented: {widget.componentType}</p>
            </WidgetCard>
          );
        }
        
        const componentProps: WidgetComponentProps = { 
          title: widget.title, 
          id: widget.id, 
          ...widget.config // Pass any widget-specific config
        };

        return (
          <div key={widget.id} className={`${getSizeClass(widget.size)}`}>
            <WidgetCard title={widget.title}>
              <WidgetComponent {...componentProps} />
            </WidgetCard>
          </div>
        );
      })}
    </div>
  );
};

export default WidgetGrid;
