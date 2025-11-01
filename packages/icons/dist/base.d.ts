import { default as React } from 'react';

/** Icon sizes mapped to font-size design tokens */
export declare const ICON_SIZES: {
    readonly xs: "var(--font-size-xs)";
    readonly sm: "var(--font-size-sm)";
    readonly md: "var(--font-size-base)";
    readonly lg: "var(--font-size-lg)";
    readonly xl: "var(--font-size-xl)";
    readonly "2xl": "var(--font-size-2xl)";
};
export type IconSize = keyof typeof ICON_SIZES;
/** Base props for all icons */
export interface BaseIconProps {
    /** Icon size - defaults to 'md' (20px) */
    size?: IconSize;
    /** Custom class name */
    className?: string;
    /**
     * Accessibility label - if provided, icon is semantic and gets aria-label
     * If not provided, icon is decorative and gets aria-hidden="true"
     */
    label?: string;
    /**
     * Custom color - uses currentColor by default for token integration
     * Only use when you need to override the theme color
     */
    color?: string;
    /** Additional HTML attributes */
    style?: React.CSSProperties;
}
/**
 * Base Icon component that wraps any icon source with consistent API and a11y defaults
 * This is the foundation that all specific icons build upon
 */
export declare const BaseIcon: {
    ({ size, className, label, color, children, style, ref, ...props }: BaseIconProps & {
        children: React.ReactNode;
        ref?: React.Ref<HTMLSpanElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare function createIcon(LucideIcon: any, displayName: string): {
    (props: BaseIconProps & {
        ref?: React.Ref<HTMLSpanElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=base.d.ts.map