// @ts-nocheck
import theme from './theme';
import {addParameters, configure, addDecorator} from '@storybook/react';
import ReactThemeProvider from './ReactThemeProvider';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
// import {withInfo} from '@storybook/addon-info';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
});
// addDecorator(withInfo);
addDecorator(ReactThemeProvider); //tema desteğini ayarla
// Option defaults:
addParameters({
  options: {
    storySort: (a, b) => {
      const sectionA = a[1].id.split('-')[0];
      const sectionB = b[1].id.split('-')[0];

      return sectionB.localeCompare(sectionA);
    },
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
    theme: theme,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     */
    // @ts-ignore
    hierarchyRootSeparator: /\|/,
    panelPosition: 'right',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: true,
    downPanelInRight: true,
  },
});

// addDecorator(centered);

const context = require.context('../stories', true, /\.stories\.(ts|js|md)x$/);

configure(context, module);
