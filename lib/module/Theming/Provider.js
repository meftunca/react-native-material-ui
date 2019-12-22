import React from 'react';
import { Provider as SettingsProvider } from './settings';
import { ThemeProvider } from './';
export default class Provider extends React.Component {
    render() {
        return (React.createElement(SettingsProvider, null,
            React.createElement(ThemeProvider, { theme: this.props.theme }, this.props.children)));
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
