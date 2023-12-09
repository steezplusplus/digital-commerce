import { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        className={`
          disabled:cursor-opacity-50
          w-auto
          rounded-md
          border
          border-neutral-200
          px-2
          py-1
          text-sm
          tracking-widest
          transition
          hover:opacity-75
          disabled:cursor-not-allowed
          dark:border-neutral-800
          ${className}
        `}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
