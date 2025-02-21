import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: <C extends React.ElementType>({ component, startIcon, endIcon, size, variant, color, fullWidth, shadow, vertical, disabled, borderRadius, children, className, classList, ...restProps }: import('../../utils/utils.types').AuxiliaryProps<C, import('./Button.types').ButtonProps>) => JSX.Element;
    parameters: {
        layout: string;
    };
    args: {
        onClick: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Simple: Story;
export declare const Disabled: Story;
export declare const Grayscale: Story;
export declare const LeftIcon: Story;
export declare const Vertical: Story;
export declare const RightIcon: Story;
export declare const Small: Story;
