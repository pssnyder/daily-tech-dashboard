import React from 'react';
import { WidgetComponentProps } from '../../types';
import { CogIcon } from '../icons/GenericIcons';


const PlaceholderWidget: React.FC<WidgetComponentProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-slate-500">
      <CogIcon className="w-12 h-12 mb-3 text-slate-600 animate-spin-slow" />
      <p className="text-lg">This is the <strong className="text-slate-400">{title}</strong> widget.</p>
      <p className="text-sm">Content will be added here soon.</p>
    </div>
  );
};

export default PlaceholderWidget;
