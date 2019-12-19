/// <reference types="react" />
declare const _default: {
    Item: import("react").FC<import("./ListItem").ListItemProps>;
    Accordion: import("react").FC<import("./ListItem").ListItemProps & {
        expanded?: boolean;
        children?: import("react").ReactNode;
        duration?: number;
        delay?: number;
        startDeg?: string;
        endDeg?: string;
    }>;
    Section: () => JSX.Element;
};
export default _default;
