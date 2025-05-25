import React from 'react';
import type { ReactNode } from 'react'; 
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  statValue: string;
  statLabel: string;
  icon: ReactNode;
  decorativeIcon?: ReactNode;
  linkTo: string;
  linkText: string;
}

const FeatureCard = ({
  title,
  description,
  statValue,
  statLabel,
  icon,
  decorativeIcon,
  linkTo,
  linkText
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm relative">
      <div className="flex items-center mb-1">
        <div className="p-1.5 bg-purple-100 rounded-full mr-3">
          {icon}
        </div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600 text-xs">{description}</p>
      
      <div className="mt-3">
        <div className="text-2xl font-bold text-gray-900">{statValue}</div>
        <div className="text-gray-500 text-xs">{statLabel}</div>
      </div>
      
      {decorativeIcon && (
        <div className="absolute top-4 right-4">
          {decorativeIcon}
        </div>
      )}
      
      <Link 
        to={linkTo} 
        className="block w-full text-center bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-md text-white font-medium mt-3 transition duration-200"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default FeatureCard;