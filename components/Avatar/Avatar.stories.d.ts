import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<import('./Avatar.types').AvatarProps>;
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Simple: Story;
export declare const WithInitials: Story;
export declare const AsChildren: Story;
export declare const WithSize: Story;
