import React from 'react';
import { WidgetComponentProps } from '../../types';
import { SunIcon, CloudIcon, ZapIcon } from '../icons/WeatherIcons'; // Placeholder icons

interface WeatherWidgetSpecificProps extends WidgetComponentProps {
  location?: string;
}

const WeatherWidget: React.FC<WeatherWidgetSpecificProps> = ({ location }) => {
  // Mock data - In a real app, this would come from a weather API
  const weatherData = {
    temperature: 22,
    condition: 'Partly Cloudy',
    humidity: 60,
    wind: '10 km/h NW',
    icon: 'cloudy', // 'sunny', 'rainy', 'stormy'
  };

  const getWeatherIcon = (condition: string): React.ReactNode => {
    if (condition.toLowerCase().includes('cloudy')) return <CloudIcon className="w-16 h-16 text-slate-400" />;
    if (condition.toLowerCase().includes('sunny') || condition.toLowerCase().includes('clear')) return <SunIcon className="w-16 h-16 text-yellow-400" />;
    if (condition.toLowerCase().includes('rain') || condition.toLowerCase().includes('storm')) return <ZapIcon className="w-16 h-16 text-blue-400" />; // Zap for storm/rain
    return <CloudIcon className="w-16 h-16 text-slate-400" />;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center">
        {getWeatherIcon(weatherData.condition)}
        <p className="text-3xl font-semibold text-slate-100 mt-2">{weatherData.temperature}°C</p>
        <p className="text-lg text-slate-300">{weatherData.condition}</p>
        {location && <p className="text-sm text-sky-400 mt-1">{location}</p>}
      </div>
      <div className="mt-4 text-sm text-slate-400 grid grid-cols-2 gap-x-4 gap-y-1 w-full max-w-xs px-2">
        <span>Humidity:</span><span className="text-right font-medium text-slate-200">{weatherData.humidity}%</span>
        <span>Wind:</span><span className="text-right font-medium text-slate-200">{weatherData.wind}</span>
      </div>
    </div>
  );
};

export default WeatherWidget;
