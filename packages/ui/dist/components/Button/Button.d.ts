import { default as React } from 'react';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
    /** Button variant */
    variant?: "primary" | "secondary" | "outline" | "ghost";
    /** Button size */
    size?: "sm" | "md" | "lg";
    /** Loading state */
    loading?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Full width button */
    fullWidth?: boolean;
    /** Children content */
    children: React.ReactNode;
    /** Custom class name */
    className?: string;
    /** Ref */
    ref?: React.Ref<HTMLButtonElement>;
}
export declare const Button: {
    ({ variant, size, loading, disabled, fullWidth, children, className, ref, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Button.d.ts.map