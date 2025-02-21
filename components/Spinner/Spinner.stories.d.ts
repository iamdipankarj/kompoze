import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<import('./Spinner.types').SpinnerProps>;
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Simple: Story;
export declare const WithSize: Story;
export declare const WithStrokeWidth: Story;
export declare const WithCustomDuration: Story;
