import React from 'react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#007ACC] transition-all"
    >
      {icon}
    </a>
  );
};