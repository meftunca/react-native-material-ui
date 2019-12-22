import _pt from "prop-types";
import React from 'react';
import { Provider as SettingsProvider } from './settings';
import { ThemeProvider } from './';
export default class Provider extends React.Component {
  static propTypes = {
    children: _pt.node.isRequired,
    theme: _pt.any,
    settings: _pt.any
  };

  render() {
    return React.createElement(SettingsProvider, null, React.createElement(ThemeProvider, {
      theme: this.props.theme
    }, this.props.children)); // return (
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