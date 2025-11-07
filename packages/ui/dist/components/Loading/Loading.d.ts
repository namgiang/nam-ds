import { default as React } from 'react';

export interface LoadingProps {
    /** Loading size */
    size?: "sm" | "md" | "lg";
    /** Loading variant */
    variant?: "spinner" | "dots" | "pulse";
    /** Custom class name */
    className?: string;
    /** Custom color */
    color?: string;
    /** Accessible label for screen readers */
    "aria-label"?: string;
}
export declare const Loading: React.FC<LoadingProps>;
//# sourceMappingURL=Loading.d.ts.map