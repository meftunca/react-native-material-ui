import React from 'react';
import Dialog from '../Dialog';
import Button from '../Buttons/Button';
import Text from '../Core/Typography';
const Alert = ({ onDismiss, header, prompt = false, contentText = '', action, isOpen = false, }) => {
    return (React.createElement(Dialog, { animationType: "fade", visible: isOpen, onClose: onDismiss },
        header && React.createElement(Dialog.Header, Object.assign({}, header)),
        (contentText || prompt) && (React.createElement(Dialog.Content, null,
            React.createElement(Text, { variant: "body1" }, contentText))),
        React.createElement(Dialog.Actions, { style: { justifyContent: 'flex-end' } }, action &&
            action.map(({ label, accessibilityLabel, color, onPress }, k) => (React.createElement(Button, { key: k, accessibilityLabel: accessibilityLabel, color: color, onPress: e => {
                    onDismiss;
                    onPress(e);
                } }, label))))));
};
export default Alert;
