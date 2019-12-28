import React from 'react';
import Dialog from '../Dialog';
import Button from '../Buttons/Button';
import Text, {TextProps} from '../Core/Typography';

type ActionType = {
  color?: string;
  label?: string;
  accessibilityLabel?: string;
  onPress?: (event?: any) => void;
};
type AlertType = {
  onDismiss?: () => void | undefined;
  header?: {
    title?: string;
    subtitle?: string;
    titleProps?: TextProps;
    subtitleProps?: TextProps;
  };
  prompt?: boolean;
  contentText?: string;
  action?: ActionType[];
  isOpen?: boolean;
};
const Alert: React.FC<AlertType> = ({
  onDismiss,
  header,
  prompt = false,
  contentText = '',
  action,
  isOpen = false,
}) => {
  return (
    <Dialog animationType="fade" visible={isOpen} onClose={onDismiss}>
      {header && <Dialog.Header {...header} />}
      {(contentText || prompt) && (
        <Dialog.Content>
          <Text variant="body1">{contentText}</Text>
        </Dialog.Content>
      )}
      <Dialog.Actions style={{justifyContent: 'flex-end'}}>
        {action &&
          action.map(({label, accessibilityLabel, color, onPress}, k) => (
            <Button
              key={k}
              accessibilityLabel={accessibilityLabel}
              color={color}
              onPress={e => {
                onDismiss;
                onPress(e);
              }}>
              {label}
            </Button>
          ))}
      </Dialog.Actions>
    </Dialog>
  );
};

export default Alert;
