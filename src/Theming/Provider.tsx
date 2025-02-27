import React from 'react';
import {Provider as SettingsProvider, Settings} from './settings';
import {ThemeTypes, ThemeProvider} from '.';

type Props = {
  children: React.ReactNode;
  theme?: ThemeTypes;
  settings?: Settings;
};
export default class Provider extends React.Component<Props> {
  render() {
    return (
      <SettingsProvider>
        <ThemeProvider theme={this.props.theme}>
          {this.props.children}
        </ThemeProvider>
      </SettingsProvider>
    );
    // return (
    //   <PortalHost>
    //     <SettingsProvider value={this.props.settings}>
    //       <ThemeProvider theme={this.props.theme}>
    //         {this.props.children}
    //       </ThemeProvider>
    //     </SettingsProvider>
    //   </PortalHost>
    // );
  }
}
