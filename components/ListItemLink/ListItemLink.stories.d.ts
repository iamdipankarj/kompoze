import { default as React } from '../../../node_modules/react';
export declare const Simple: React.FC<{}>;
declare const _default: {
    title: string;
    component: <C extends React.ElementType>({ component, icon, children, className, ...restProps }: import('../../utils/utils.types').AuxiliaryProps<C, import('./ListItemLink.types').LinkBaseProps>) => JSX.Element;
    argTypes: {
        component: {
            description: string;
            table: {
                type: {
                    summary: string;
                    detail: string;
                };
            };
            control: {
                type: null;
            };
        };
    };
};
export default _default;
