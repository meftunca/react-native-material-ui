import _pt from "prop-types";
import React from 'react';
import Dialog from '../Dialog';
import Button from '../Buttons/Button';
import Text from '../Core/Typography';

const Alert = ({
  onDismiss,
  header,
  prompt = false,
  contentText = '',
  action,
  isOpen = false
}) => {
  return React.createElement(Dialog, {
    animationType: "fade",
    visible: isOpen,
    onClose: onDismiss
  }, header && React.createElement(Dialog.Header, header), (contentText || prompt) && React.createElement(Dialog.Content, null, React.createElement(Text, {
    variant: "body1"
  }, contentText)), React.createElement(Dialog.Actions, {
    style: {
      justifyContent: 'flex-end'
    }
  }, action && action.map(({
    label,
    accessibilityLabel,
    color,
    onPress
  }, k) => React.createElement(Button, {
    key: k,
    accessibilityLabel: accessibilityLabel,
    color: color,
    onPress: e => {
      onDismiss;
      onPress(e);
    }
  }, label))));
};

Alert.propTypes = {
  onDismiss: _pt.func,
  header: _pt.shape({
    title: _pt.string,
    subtitle: _pt.string,
    titleProps: _pt.any,
    subtitleProps: _pt.any
  }),
  prompt: _pt.bool,
  contentText: _pt.string,
  action: _pt.arrayOf(_pt.shape({
    color: _pt.string,
    label: _pt.string,
    accessibilityLabel: _pt.string,
    onPress: _pt.func
  })),
  isOpen: _pt.bool
};
export default Alert;