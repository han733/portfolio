import React from 'react';
import type { SkillCategory } from '../../data';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
        {category.category}
      </h4>
      <ul className="space-y-5">
        {category.skills.map((skill, idx) => (
          <li key={idx} className="flex items-center group">
            <span className="text-2xl mr-4 group-hover:scale-125 transition-transform duration-200">
              {skill.icon}
            </span>
            <div>
              <p className="text-gray-900 font-medium text-sm">{skill.name}</p>
              <p className="text-xs text-gray-500">{skill.level}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};