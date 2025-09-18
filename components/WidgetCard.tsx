import React from 'react';

interface WidgetCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ title, children, className }) => {
  return (
    <div className={`bg-slate-800 shadow-xl rounded-lg p-1 flex flex-col h-full transition-all duration-300 hover:shadow-sky-500/30 ${className}`}>
      <div className="bg-slate-700/50 px-4 py-3 border-b border-slate-700 rounded-t-md">
        <h3 className="text-lg font-semibold text-sky-400">{title}</h3>
      </div>
      <div className="p-4 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default WidgetCard;
