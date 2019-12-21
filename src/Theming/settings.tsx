import React from 'react';
import {TextProps} from '../Components/Core/Typography';
import Alert from '../Components/PopUp/Alert';
import Snackbar from '../Components/PopUp/Snackbar';

type ActionType = {
  color?: string;
  label?: string;
  accessibilityLabel?: string;
  onPress?: () => void;
};
type AvatarType = {
  // source?:
};
type AlertType = {
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
type SnackbarType = {
  label: string;
  color?: string;
  //   avatar?:AvatarType;
  backgroundColor?: string;
  elevation?: number;
  action?: ActionType | undefined;
  isOpen?: boolean;
};
export type Settings = {
  children?: React.ReactNode;
  onToggleAlert?: (status: boolean) => void | undefined;
  onToggleSnackbar?: (status: boolean) => void | undefined;
  setAlert: (data: AlertType) => void;
  setSnacbar: (data: SnackbarType) => void;
  isOpenSnacbar?: number;
};
const DefaultSettings = {
  setAlert: undefined,
  setSnacbar: undefined,
};
const SettingsContext = React.createContext<Settings>(DefaultSettings);

export const Provider: React.FC<{value?: Settings}> = ({children}) => {
  const [alertData, setAlertData] = React.useState<AlertType>({
    header: undefined,
    prompt: false,
    contentText: '',
    action: undefined,
    isOpen: false,
  });
  const [snackbarData, setSnackbarData] = React.useState<SnackbarType>({
    label: 'Label',
    color: undefined,
    backgroundColor: undefined,
    elevation: 4,
    action: undefined,
    isOpen: false,
  });
  const onToggleAlert = (status: boolean) =>
    setAlertData({...alertData, isOpen: status});
  const onToggleSnackbar = (status: boolean = !snackbarData.isOpen) =>
    setSnackbarData({...snackbarData, isOpen: status});
  const setSnacbar = (newSnacbar: SnackbarType) =>
    setSnackbarData(Object.assign(snackbarData, newSnacbar));
  const setAlert = (newAlert: AlertType) =>
    setAlertData(Object.assign(alertData, newAlert));

  const value: any = React.useMemo(() => {
    return {
      isOpenSnacbar: snackbarData.isOpen,
      setSnacbar,
      onToggleAlert,
      onToggleSnackbar,
      setAlert,
    };
  }, [setSnacbar || setAlert]);
  return (
    <SettingsContext.Provider value={value}>
      {children}
      {alertData && (
        <Alert {...alertData} onDismiss={() => onToggleAlert(false)} />
      )}
      {snackbarData && (
        <Snackbar {...snackbarData} onDismiss={() => onToggleSnackbar(false)} />
      )}
    </SettingsContext.Provider>
  );
};
export const useAlert = () => {
  const {setAlert, onToggleAlert} = React.useContext(SettingsContext);
  return {
    setAlert,
    onDismiss: () => onToggleAlert(false),
    onOpen: () => onToggleAlert(true),
  };
};
export const useSnackbar = () => {
  const {setSnacbar, onToggleSnackbar, isOpenSnacbar} = React.useContext(
    SettingsContext,
  );
  return {
    setSnacbar,
    isOpen: isOpenSnacbar,
    onDismiss: () => onToggleSnackbar(false),
    onOpen: () => onToggleSnackbar(true),
    onToggle: onToggleSnackbar,
  };
};
