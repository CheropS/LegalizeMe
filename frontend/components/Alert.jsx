import React from 'react';

export function Alert({ children, className = '', variant = 'default' }) {
  const baseStyles = "flex items-center p-4 rounded-md";
  const variantStyles = {
    default: "bg-blue-50 text-blue-700 border border-blue-200",
    destructive: "bg-red-50 text-red-700 border border-red-200",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

export function AlertDescription({ children, className = '' }) {
  return (
    <p className={`text-sm ${className}`}>
      {children}
    </p>
  );
} 