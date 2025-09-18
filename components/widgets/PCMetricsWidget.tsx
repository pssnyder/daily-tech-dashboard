import React, { useState, useEffect } from 'react';
import { WidgetComponentProps, Metric } from '../../types';
import { CpuChipIcon, ServerIcon, CircleStackIcon } from '../icons/TechIcons';

const MetricBar: React.FC<{ metric: Metric }> = ({ metric }) => {
  const percentage = metric.max ? (metric.value / metric.max) * 100 : metric.value;
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center text-sm mb-1">
        <span className="text-slate-300">{metric.name}</span>
        <span className={`font-semibold ${metric.colorClass}`}>{metric.value.toFixed(1)}{metric.unit}</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full rounded-full ${metric.colorClass.replace('text-', 'bg-')} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};


const PCMetricsWidget: React.FC<WidgetComponentProps> = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    // Simulate fetching PC metrics
    const fetchMetrics = () => {
      setMetrics([
        { name: 'CPU Usage', value: Math.random() * 100, unit: '%', max: 100, colorClass: 'text-sky-400' },
        { name: 'RAM Usage', value: Math.random() * 16, unit: ' GB', max: 16, colorClass: 'text-green-400' },
        { name: 'GPU Temp', value: 45 + Math.random() * 30, unit: ' °C', max: 100, colorClass: 'text-red-400' },
        { name: 'Disk C: Usage', value: Math.random() * 512, unit: ' GB', max: 512, colorClass: 'text-purple-400' },
      ]);
    };

    fetchMetrics();
    const intervalId = setInterval(fetchMetrics, 3000); // Update every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  if (metrics.length === 0) {
    return <p className="text-slate-400 text-center">Loading metrics...</p>;
  }

  return (
    <div className="space-y-3">
       <div className="flex items-center text-slate-400 mb-4">
        <CpuChipIcon className="w-6 h-6 mr-2 text-sky-500" />
        <span className="text-md font-medium">System Performance</span>
      </div>
      {metrics.map((metric) => (
        <MetricBar key={metric.name} metric={metric} />
      ))}
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <div className="bg-slate-700/50 p-3 rounded-md">
          <ServerIcon className="w-8 h-8 mx-auto mb-1 text-teal-400"/>
          <p className="text-xs text-slate-400">Network Up</p>
          <p className="text-lg font-semibold text-slate-100">{(Math.random() * 100).toFixed(1)} Mbps</p>
        </div>
        <div className="bg-slate-700/50 p-3 rounded-md">
          <CircleStackIcon className="w-8 h-8 mx-auto mb-1 text-indigo-400"/>
          <p className="text-xs text-slate-400">Processes</p>
          <p className="text-lg font-semibold text-slate-100">{Math.floor(80 + Math.random() * 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default PCMetricsWidget;
