import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-[#ED5C66] text-white shadow-sm active:scale-95',
    secondary: 'bg-[#A3ECE6] text-[#333] shadow-sm active:scale-95',
    outline: 'border-2 border-[#ED5C66] text-[#ED5C66] active:bg-[#ED5C66]/10',
    ghost: 'text-[#ED5C66] active:bg-[#ED5C66]/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg font-bold',
  };

  return (
    <button
      className={cn(
        'rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

export const Card = ({ 
  children, 
  className,
  onClick
}: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) => (
  <div 
    onClick={onClick}
    className={cn(
      'bg-white rounded-3xl p-4 shadow-xs border border-gray-100 transition-transform active:scale-[0.98]',
      onClick && 'cursor-pointer',
      className
    )}
  >
    {children}
  </div>
);

export const Typography = {
  H1: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h1 className={cn('text-2xl font-bold text-gray-800 leading-tight', className)}>{children}</h1>
  ),
  H2: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={cn('text-xl font-semibold text-gray-800', className)}>{children}</h2>
  ),
  P: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <p className={cn('text-base text-gray-600 leading-relaxed', className)}>{children} </p>
  ),
  Small: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <span className={cn('text-sm text-gray-500', className)}>{children}</span>
  ),
};
