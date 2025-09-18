import React from 'react';

export interface WidgetComponentProps {
  title: string;
  id: string;
}

export interface WidgetConfig {
  id: string;
  componentType: WidgetType; // Reference to registered component type
  title: string;
  size?: 'small' | 'medium' | 'large' | 'full'; // Optional size hint
  // Add other widget-specific config here if needed, e.g., API keys, refresh intervals
  config?: Record<string, any>; 
}

// Enum for widget types to ensure type safety when mapping components
export enum WidgetType {
  Clock = 'ClockWidget',
  Weather = 'WeatherWidget',
  PCMetrics = 'PCMetricsWidget',
  Calendar = 'CalendarWidget',
  Placeholder = 'PlaceholderWidget',
  ProjectDemo = 'ProjectDemoWidget', // For future project hosting
  GeminiText = 'GeminiTextWidget' // Example for a future Gemini-powered widget
}

export type WidgetComponentRegistry = {
  [key in WidgetType]: React.ComponentType<WidgetComponentProps>;
};

// For PC Metrics Data
export interface Metric {
  name: string;
  value: number;
  unit: string;
  max?: number; // For progress/gauge display
  colorClass: string; // Tailwind color class for the bar/gauge
}

// For Calendar Event Data (Placeholder)
export interface CalendarEvent {
  id: string;
  title: string;
  startTime: string; // ISO string or formatted string
  endTime?: string;
  isAllDay?: boolean;
  link?: string;
}
