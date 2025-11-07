import { default as React } from 'react';

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    /** Link variant */
    variant?: "default" | "primary" | "secondary" | "muted";
    /** Link size */
    size?: "sm" | "md" | "lg";
    /** Show underline */
    underline?: "none" | "hover" | "always";
    /** External link (opens in new tab) */
    external?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Children content (required and non-empty) - Links must have visible content for accessibility */
    children: Exclude<React.ReactNode, null | undefined | false | "">;
    /** Custom class name */
    className?: string;
    /** Link URL (required) */
    href: string;
    /** Ref */
    ref?: React.Ref<HTMLAnchorElement>;
}
export declare const Link: {
    ({ variant, size, underline, external, disabled, children, className, href, target, rel, ref, onClick, ...props }: LinkProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Link.d.ts.map