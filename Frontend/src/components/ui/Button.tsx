import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href = '#',
  icon = false,
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyle =
    'inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg';

  const variants = {
    primary: 'bg-[#007ACC] hover:bg-[#005f9e] text-white',
    secondary: 'border-2 border-gray-200 hover:border-[#007ACC] text-gray-700 hover:text-[#007ACC] bg-white',
    outline: 'border-2 border-[#007ACC] text-[#007ACC] hover:bg-[#007ACC] hover:text-white',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <ChevronRight size={18} className="ml-1" />}
    </a>
  );
};