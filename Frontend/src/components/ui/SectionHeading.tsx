import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-sm font-bold tracking-wider text-[#007ACC] uppercase mb-2">{subtitle}</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h3>
    </div>
  );
};