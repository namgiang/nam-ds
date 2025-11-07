import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        ({ size, className, label, color, children, style, ref, ...props }: import('./base').BaseIconProps & {
            children: React.ReactNode;
            ref?: React.Ref<HTMLSpanElement>;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
    argTypes: {
        size: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        color: {
            control: {
                type: "color";
            };
            description: string;
        };
        label: {
            control: {
                type: "text";
            };
            description: string;
        };
        className: {
            control: {
                type: "text";
            };
            description: string;
        };
        children: {
            control: false;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const Accessibility: Story;
export declare const Colors: Story;
export declare const NavigationIcons: Story;
export declare const ActionIcons: Story;
export declare const StatusIcons: Story;
export declare const InterfaceIcons: Story;
export declare const AllIcons: Story;
export declare const UsageExamples: Story;
//# sourceMappingURL=base.stories.d.ts.map