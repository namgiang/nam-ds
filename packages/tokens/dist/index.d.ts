
export declare const themes: {
    readonly default: "default";
    readonly dark: "dark";
    readonly "dutch-phrase-companion": "dutch-phrase-companion";
};
export type Theme = keyof typeof themes;
export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export declare const rawTokens: {
    readonly color: {
        readonly brand: {
            readonly primary: (shade?: ColorShade) => string;
            readonly secondary: (shade?: ColorShade) => string;
        };
        readonly semantic: {
            readonly success: (shade?: ColorShade) => string;
            readonly warning: (shade?: ColorShade) => string;
            readonly error: (shade?: ColorShade) => string;
            readonly info: (shade?: ColorShade) => string;
        };
        readonly neutral: (shade?: ColorShade) => string;
    };
    readonly spacing: {
        readonly px: () => string;
        readonly 0: () => string;
        readonly 1: () => string;
        readonly 2: () => string;
        readonly 3: () => string;
        readonly 4: () => string;
        readonly 6: () => string;
        readonly 8: () => string;
        readonly 10: () => string;
        readonly 12: () => string;
        readonly 16: () => string;
        readonly 20: () => string;
        readonly 24: () => string;
        readonly 32: () => string;
    };
};
export declare const token: {
    readonly color: {
        readonly brand: {
            readonly primary: (shade?: ColorShade) => string;
            readonly secondary: (shade?: ColorShade) => string;
        };
        readonly semantic: {
            readonly success: (shade?: ColorShade) => string;
            readonly warning: (shade?: ColorShade) => string;
            readonly error: (shade?: ColorShade) => string;
            readonly info: (shade?: ColorShade) => string;
        };
        readonly neutral: (shade?: ColorShade) => string;
    };
    readonly spacing: {
        readonly px: () => string;
        readonly 0: () => string;
        readonly 1: () => string;
        readonly 2: () => string;
        readonly 3: () => string;
        readonly 4: () => string;
        readonly 6: () => string;
        readonly 8: () => string;
        readonly 10: () => string;
        readonly 12: () => string;
        readonly 16: () => string;
        readonly 20: () => string;
        readonly 24: () => string;
        readonly 32: () => string;
    };
    readonly fontSize: {
        readonly xs: () => string;
        readonly sm: () => string;
        readonly base: () => string;
        readonly lg: () => string;
        readonly xl: () => string;
        readonly "2xl": () => string;
        readonly "3xl": () => string;
        readonly "4xl": () => string;
    };
    readonly fontWeight: {
        readonly light: () => string;
        readonly normal: () => string;
        readonly medium: () => string;
        readonly semibold: () => string;
        readonly bold: () => string;
    };
    readonly fontFamily: {
        readonly sans: () => string;
        readonly serif: () => string;
        readonly mono: () => string;
    };
    readonly borderRadius: {
        readonly none: () => string;
        readonly sm: () => string;
        readonly base: () => string;
        readonly md: () => string;
        readonly lg: () => string;
        readonly xl: () => string;
        readonly full: () => string;
    };
    readonly shadow: {
        readonly none: () => string;
        readonly sm: () => string;
        readonly base: () => string;
        readonly md: () => string;
        readonly lg: () => string;
        readonly xl: () => string;
    };
    readonly zIndex: {
        readonly hide: () => string;
        readonly base: () => string;
        readonly dropdown: () => string;
        readonly modal: () => string;
        readonly tooltip: () => string;
    };
};
export declare const motion: {
    readonly color: {
        readonly brand: {
            readonly primary: (shade?: ColorShade) => string;
            readonly secondary: (shade?: ColorShade) => string;
        };
        readonly semantic: {
            readonly success: (shade?: ColorShade) => string;
            readonly warning: (shade?: ColorShade) => string;
            readonly error: (shade?: ColorShade) => string;
            readonly info: (shade?: ColorShade) => string;
        };
        readonly neutral: (shade?: ColorShade) => string;
    };
    readonly spacing: {
        readonly px: () => string;
        readonly 0: () => string;
        readonly 1: () => string;
        readonly 2: () => string;
        readonly 3: () => string;
        readonly 4: () => string;
        readonly 6: () => string;
        readonly 8: () => string;
        readonly 10: () => string;
        readonly 12: () => string;
        readonly 16: () => string;
        readonly 20: () => string;
        readonly 24: () => string;
        readonly 32: () => string;
    };
    readonly presets: {
        readonly fadeIn: {
            readonly initial: {
                readonly opacity: 0;
            };
            readonly animate: {
                readonly opacity: 1;
            };
            readonly exit: {
                readonly opacity: 0;
            };
        };
        readonly slideUp: {
            readonly initial: {
                readonly y: 20;
                readonly opacity: 0;
            };
            readonly animate: {
                readonly y: 0;
                readonly opacity: 1;
            };
            readonly exit: {
                readonly y: -20;
                readonly opacity: 0;
            };
        };
        readonly scale: {
            readonly initial: {
                readonly scale: 0.9;
                readonly opacity: 0;
            };
            readonly animate: {
                readonly scale: 1;
                readonly opacity: 1;
            };
            readonly exit: {
                readonly scale: 0.9;
                readonly opacity: 0;
            };
        };
        readonly slideInLeft: {
            readonly initial: {
                readonly x: -20;
                readonly opacity: 0;
            };
            readonly animate: {
                readonly x: 0;
                readonly opacity: 1;
            };
            readonly exit: {
                readonly x: 20;
                readonly opacity: 0;
            };
        };
    };
};
export declare function setTheme(theme: Theme): void;
export declare function getTheme(): Theme;
export declare function toggleTheme(): "default" | "dark";
export declare function getThemeColor(colorPath: string, shade?: ColorShade): string;
export declare function getCSSVar(varName: string): string;
export declare function setCSSVar(varName: string, value: string): void;
export declare const cssVar: {
    readonly color: {
        readonly brand: {
            readonly primary: (shade?: ColorShade) => string;
            readonly secondary: (shade?: ColorShade) => string;
        };
        readonly semantic: {
            readonly success: (shade?: ColorShade) => string;
            readonly warning: (shade?: ColorShade) => string;
            readonly error: (shade?: ColorShade) => string;
            readonly info: (shade?: ColorShade) => string;
        };
        readonly neutral: (shade?: ColorShade) => string;
    };
    readonly spacing: {
        readonly px: () => string;
        readonly 0: () => string;
        readonly 1: () => string;
        readonly 2: () => string;
        readonly 3: () => string;
        readonly 4: () => string;
        readonly 6: () => string;
        readonly 8: () => string;
        readonly 10: () => string;
        readonly 12: () => string;
        readonly 16: () => string;
        readonly 20: () => string;
        readonly 24: () => string;
        readonly 32: () => string;
    };
    readonly fontSize: {
        readonly xs: () => string;
        readonly sm: () => string;
        readonly base: () => string;
        readonly lg: () => string;
        readonly xl: () => string;
        readonly "2xl": () => string;
        readonly "3xl": () => string;
        readonly "4xl": () => string;
    };
    readonly fontWeight: {
        readonly light: () => string;
        readonly normal: () => string;
        readonly medium: () => string;
        readonly semibold: () => string;
        readonly bold: () => string;
    };
    readonly fontFamily: {
        readonly sans: () => string;
        readonly serif: () => string;
        readonly mono: () => string;
    };
    readonly borderRadius: {
        readonly none: () => string;
        readonly sm: () => string;
        readonly base: () => string;
        readonly md: () => string;
        readonly lg: () => string;
        readonly xl: () => string;
        readonly full: () => string;
    };
    readonly shadow: {
        readonly none: () => string;
        readonly sm: () => string;
        readonly base: () => string;
        readonly md: () => string;
        readonly lg: () => string;
        readonly xl: () => string;
    };
    readonly zIndex: {
        readonly hide: () => string;
        readonly base: () => string;
        readonly dropdown: () => string;
        readonly modal: () => string;
        readonly tooltip: () => string;
    };
};
//# sourceMappingURL=index.d.ts.map