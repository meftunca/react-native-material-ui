function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Alert from '../Components/PopUp/Alert';
import Snackbar from '../Components/PopUp/Snackbar';
const DefaultSettings = {
  setAlert: undefined,
  setSnacbar: undefined
};
const SettingsContext = React.createContext(DefaultSettings);
export const Provider = ({
  children
}) => {
  const [alertData, setAlertData] = React.useState({
    header: undefined,
    prompt: false,
    contentText: '',
    action: undefined,
    isOpen: false
  });
  const [snackbarData, setSnackbarData] = React.useState({
    label: 'Label',
    color: undefined,
    backgroundColor: undefined,
    elevation: 4,
    action: undefined,
    isOpen: false
  });

  const onToggleAlert = status => setAlertData({ ...alertData,
    isOpen: status
  });

  const onToggleSnackbar = (status = !snackbarData.isOpen) => setSnackbarData({ ...snackbarData,
    isOpen: status
  });

  const setSnacbar = newSnacbar => setSnackbarData(Object.assign(snackbarData, newSnacbar));

  const setAlert = newAlert => setAlertData(Object.assign(alertData, newAlert));

  const value = React.useMemo(() => {
    return {
      isOpenSnacbar: snackbarData.isOpen,
      setSnacbar,
      onToggleAlert,
      onToggleSnackbar,
      setAlert
    };
  }, [setSnacbar || setAlert]);
  return React.createElement(SettingsContext.Provider, {
    value: value
  }, children, alertData && React.createElement(Alert, _extends({}, alertData, {
    onDismiss: () => onToggleAlert(false)
  })), snackbarData && React.createElement(Snackbar, _extends({}, snackbarData, {
    onDismiss: () => onToggleSnackbar(false)
  })));
};
export const useAlert = () => {
  const {
    setAlert,
    onToggleAlert
  } = React.useContext(SettingsContext);
  return {
    setAlert,
    onDismiss: () => onToggleAlert(false),
    onOpen: () => onToggleAlert(true)
  };
};
export const useSnackbar = () => {
  const {
    setSnacbar,
    onToggleSnackbar,
    isOpenSnacbar
  } = React.useContext(SettingsContext);
  return {
    setSnacbar,
    isOpen: isOpenSnacbar,
    onDismiss: () => onToggleSnackbar(false),
    onOpen: () => onToggleSnackbar(true),
    onToggle: onToggleSnackbar
  };
};