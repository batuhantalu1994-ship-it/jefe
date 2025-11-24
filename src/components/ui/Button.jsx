import React from 'react';
import { cn } from '../../lib/utils';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-primary text-black hover:bg-primary-hover font-bold',
        secondary: 'bg-secondary text-white hover:bg-secondary-light',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
        ghost: 'text-slate-600 hover:bg-slate-100',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={cn(
                'rounded-full transition-all duration-200 flex items-center justify-center gap-2',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
