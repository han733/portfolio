import React from 'react';
import type { Experience } from '../../data';

interface ExperienceTimelineItemProps {
  experience: Experience;
  index: number;
}

export const ExperienceTimelineItem: React.FC<ExperienceTimelineItemProps> = ({
  experience,
  index,
}) => {
  const isLeft = index % 2 === 0; // even index -> left side on desktop

  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } group`}
    >
      {/* Timeline dot */}
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#007ACC] text-white shadow shrink-0 z-10 relative ${
          isLeft ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'
        }`}
      >
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
        <h4 className="font-bold text-gray-900 text-lg">{experience.role}</h4>
        <div className="text-sm font-medium text-[#007ACC] mb-4">
          {experience.company} • {experience.duration}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
      </div>
    </div>
  );
};